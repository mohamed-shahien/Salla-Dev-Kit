#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const kitRoot = path.join(packageRoot, "kit");
const packageJsonPath = path.join(packageRoot, "package.json");

const HELP = `Salla-Dev-Kit

Usage:
  salla-dev-kit init [target] [--agent codex|claude|both] [--force]
  salla-dev-kit doctor [target]
  salla-dev-kit --help
  salla-dev-kit --version

Aliases:
  salla init .
  salla doctor .

Examples:
  npx salla-dev-kit init .
  npx salla-dev-kit init my-salla-theme
  npx salla-dev-kit init . --agent codex
  npx salla-dev-kit init . --agent claude
  npx salla-dev-kit init . --agent both
  npx salla-dev-kit doctor
`;

function readPackageVersion() {
  const raw = fs.readFileSync(packageJsonPath, "utf8");
  return JSON.parse(raw).version;
}

function parseArgs(argv) {
  const args = [...argv];
  const command = args.shift();
  const options = {
    agent: "both",
    force: false,
    target: "."
  };
  const positional = [];

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--agent") {
      const value = args[i + 1];
      if (!value) fail("Missing value for --agent.");
      options.agent = value;
      i += 1;
      continue;
    }
    if (arg.startsWith("--agent=")) {
      options.agent = arg.slice("--agent=".length);
      continue;
    }
    if (arg === "--force" || arg === "-f") {
      options.force = true;
      continue;
    }
    positional.push(arg);
  }

  if (positional[0]) options.target = positional[0];
  return { command, options };
}

function fail(message, code = 1) {
  console.error(`Error: ${message}`);
  process.exit(code);
}

function warn(message) {
  console.warn(`Warning: ${message}`);
}

function normalizeAgent(agent) {
  if (!["codex", "claude", "both"].includes(agent)) {
    fail(`Invalid --agent "${agent}". Expected codex, claude, or both.`);
  }
  return agent;
}

function ensureKitExists() {
  if (!fs.existsSync(kitRoot)) {
    fail(`Distribution kit not found at ${kitRoot}.`);
  }
}

function resolveTarget(target) {
  return path.resolve(process.cwd(), target || ".");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFileSafe(source, destination, options, summary) {
  ensureDir(path.dirname(destination));
  if (fs.existsSync(destination) && !options.force) {
    summary.skipped.push(destination);
    return;
  }
  fs.copyFileSync(source, destination);
  summary.copied.push(destination);
}

function copyDirSafe(sourceDir, destinationDir, options, summary) {
  if (!fs.existsSync(sourceDir)) {
    summary.warnings.push(`Missing kit source: ${sourceDir}`);
    return;
  }

  if (fs.existsSync(destinationDir) && options.skipExistingDir && !options.force) {
    summary.skipped.push(destinationDir);
    return;
  }

  ensureDir(destinationDir);
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const source = path.join(sourceDir, entry.name);
    const destination = path.join(destinationDir, entry.name);
    if (entry.isDirectory()) {
      copyDirSafe(source, destination, { ...options, skipExistingDir: false }, summary);
    } else if (entry.isFile()) {
      copyFileSafe(source, destination, options, summary);
    }
  }
}

function copyRequiredKitPath(relativePath, targetRoot, options, summary) {
  const source = path.join(kitRoot, relativePath);
  const destination = path.join(targetRoot, relativePath);
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    copyDirSafe(source, destination, options, summary);
  } else {
    copyFileSafe(source, destination, options, summary);
  }
}

function copyKitFileToTarget(sourceRelativePath, targetRelativePath, targetRoot, options, summary) {
  const source = path.join(kitRoot, sourceRelativePath);
  if (!fs.existsSync(source)) return false;
  const destination = path.join(targetRoot, targetRelativePath);
  copyFileSafe(source, destination, options, summary);
  return true;
}

function initProject(target, rawOptions) {
  ensureKitExists();
  const options = { ...rawOptions, agent: normalizeAgent(rawOptions.agent) };
  const targetRoot = resolveTarget(target);
  ensureDir(targetRoot);

  const summary = {
    target: targetRoot,
    agent: options.agent,
    copied: [],
    skipped: [],
    warnings: []
  };

  copyRequiredKitPath("AGENTS.md", targetRoot, options, summary);
  copyKitFileToTarget(".gitignore", ".gitignore", targetRoot, options, summary)
    || copyKitFileToTarget("gitignore.template", ".gitignore", targetRoot, options, summary);
  copyKitFileToTarget(".gitattributes", ".gitattributes", targetRoot, options, summary)
    || copyKitFileToTarget("gitattributes.template", ".gitattributes", targetRoot, options, summary);
  copyRequiredKitPath(".salla", targetRoot, options, summary);
  copyRequiredKitPath("commands", targetRoot, options, summary);

  if (options.agent === "claude" || options.agent === "both") {
    copyRequiredKitPath(".claude", targetRoot, options, summary);
  }

  if (options.agent === "codex" || options.agent === "both") {
    const agentsPath = path.join(targetRoot, "AGENTS.md");
    if (!fs.existsSync(agentsPath)) {
      summary.warnings.push("AGENTS.md was expected for Codex but was not created.");
    }
  }

  copyDirSafe(path.join(kitRoot, "references"), path.join(targetRoot, "references"), {
    ...options,
    skipExistingDir: true
  }, summary);

  copyDirSafe(path.join(kitRoot, "examples"), path.join(targetRoot, "examples"), {
    ...options,
    skipExistingDir: true
  }, summary);

  printInitSummary(summary, options);
}

function relativeList(paths, root) {
  return paths.map((item) => path.relative(root, item) || ".").sort();
}

function printInitSummary(summary, options) {
  console.log("Salla-Dev-Kit initialized.");
  console.log(`Target: ${summary.target}`);
  console.log(`Agent: ${summary.agent}`);
  console.log(`Force: ${options.force ? "yes" : "no"}`);
  console.log(`Copied: ${summary.copied.length}`);
  console.log(`Skipped: ${summary.skipped.length}`);

  if (summary.skipped.length) {
    console.log("\nSkipped existing paths:");
    for (const item of relativeList(summary.skipped, summary.target)) {
      console.log(`- ${item}`);
    }
  }

  if (summary.warnings.length) {
    console.log("\nWarnings:");
    for (const item of summary.warnings) {
      console.log(`- ${item}`);
    }
  }

  console.log("\nNext steps:");
  console.log("- Read AGENTS.md");
  console.log("- Run salla-dev-kit doctor");
  console.log("- Start with salla.specify or /salla.specify");
}

function exists(targetRoot, relativePath) {
  return fs.existsSync(path.join(targetRoot, relativePath));
}

function gitignoreContains(targetRoot, line) {
  const gitignorePath = path.join(targetRoot, ".gitignore");
  if (!fs.existsSync(gitignorePath)) return false;
  return fs.readFileSync(gitignorePath, "utf8").split(/\r?\n/).map((value) => value.trim()).includes(line);
}

function doctor(target = ".") {
  const targetRoot = resolveTarget(target);
  const checks = [
    ["AGENTS.md", exists(targetRoot, "AGENTS.md"), "required for Codex command router"],
    [".salla/", exists(targetRoot, ".salla"), "workflow, templates, quality gates"],
    ["commands/", exists(targetRoot, "commands"), "canonical command source"],
    [".claude/commands/", exists(targetRoot, path.join(".claude", "commands")), "Claude Code adapter"],
    [".gitattributes", exists(targetRoot, ".gitattributes"), "line ending policy"],
    ["theme-raed-master/ ignored", gitignoreContains(targetRoot, "theme-raed-master/"), "keeps baseline out of commits"],
    ["twilight.json", exists(targetRoot, "twilight.json"), "Salla theme schema"]
  ];

  console.log("Salla-Dev-Kit Doctor");
  console.log(`Target: ${targetRoot}\n`);

  let warnings = 0;
  for (const [name, ok, note] of checks) {
    const isRequiredWarning = name === "twilight.json";
    const status = ok ? "OK" : isRequiredWarning ? "WARN" : "MISSING";
    if (!ok) warnings += 1;
    console.log(`[${status}] ${name} - ${note}`);
  }

  if (!exists(targetRoot, "twilight.json")) {
    console.log("\nWarning: twilight.json was not found. This is fine for a workflow-only repo, but a Salla theme implementation will need it.");
  }

  console.log(`\nDoctor completed with ${warnings} warning(s).`);
}

function main() {
  const argv = process.argv.slice(2);
  if (!argv.length || argv[0] === "--help" || argv[0] === "-h") {
    console.log(HELP);
    return;
  }
  if (argv[0] === "--version" || argv[0] === "-v") {
    console.log(readPackageVersion());
    return;
  }

  const { command, options } = parseArgs(argv);
  if (command === "init") {
    initProject(options.target, options);
    return;
  }
  if (command === "doctor") {
    doctor(options.target);
    return;
  }

  fail(`Unknown command "${command}". Run salla-dev-kit --help.`);
}

main();
