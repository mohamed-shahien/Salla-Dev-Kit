#!/usr/bin/env node

/**
 * build-kit.mjs
 *
 * Generates the two derived artifacts from the single committed source of
 * truth at the repository root:
 *
 *   1. commands/   - the shared (Codex/CLI) command set: every `salla.*` file
 *                    from `.claude/commands/`, minus the Claude-only legacy
 *                    aliases (`salla-*`), plus a generated README.
 *   2. kit/        - the npm distribution payload copied into target themes by
 *                    `bin/salla-dev-kit.js init`.
 *
 * Source of truth (hand-edited, committed):
 *   .claude/commands/   .salla/   references/   examples/
 *   templates/AGENTS.target.md   (becomes the shipped kit/AGENTS.md)
 *   templates/gitignore.template   templates/gitattributes.template
 *
 * Note: the root AGENTS.md governs *this package's* development and is NOT shipped.
 * The agent rules installed into a target theme come from templates/AGENTS.target.md.
 *
 * Both commands/ and kit/ are git-ignored. Run `npm run build:kit` after
 * editing any source file, and again before publishing (handled by prepack).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

function abs(...parts) {
  return path.join(repoRoot, ...parts);
}

function rmrf(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

function copyDir(sourceDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const source = path.join(sourceDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(source, dest);
    } else if (entry.isFile()) {
      fs.copyFileSync(source, dest);
    }
  }
}

function copyFile(source, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(source, dest);
}

// A canonical (shared) command is any `.claude/commands/salla.*.md` file.
// Legacy Claude-only aliases use a hyphen (`salla-*.md`) and stay Claude-only.
function isCanonicalCommand(name) {
  return name.startsWith("salla.") && name.endsWith(".md");
}

const COMMANDS_README = `# Salla-Dev-Kit Commands

This directory is **generated** by \`npm run build:kit\` from \`.claude/commands/\`.
Do not edit these files directly; edit the source in \`.claude/commands/\` instead.

\`commands/\` is the canonical command source shared by Codex and other agents
(through the command router in \`AGENTS.md\`). Claude Code reads its own copies
from \`.claude/commands/\`.

## How Codex should use this directory

When the user writes a command-like message such as:

\`\`\`text
/salla.specify Build a luxury perfume Salla theme
salla.plan
run salla.review
\`\`\`

Codex must treat it as a Salla-Dev-Kit command, not shell syntax:

1. Match the command name to a file in \`commands/\`.
2. Read the command file.
3. Execute its workflow using the current project context.
4. Create the expected artifact path when enough context exists.
5. Ask only if blocked.
6. Produce the command output directly.
`;

function buildCommands() {
  const sourceDir = abs(".claude", "commands");
  const destDir = abs("commands");
  rmrf(destDir);
  fs.mkdirSync(destDir, { recursive: true });

  let count = 0;
  for (const name of fs.readdirSync(sourceDir)) {
    if (!isCanonicalCommand(name)) continue;
    fs.copyFileSync(path.join(sourceDir, name), path.join(destDir, name));
    count += 1;
  }
  fs.writeFileSync(path.join(destDir, "README.md"), COMMANDS_README, "utf8");
  return count;
}

function buildKit() {
  const kitRoot = abs("kit");
  rmrf(kitRoot);
  fs.mkdirSync(kitRoot, { recursive: true });

  // Directories copied verbatim into the kit payload.
  for (const dir of [".salla", "references", "examples", "commands"]) {
    copyDir(abs(dir), path.join(kitRoot, dir));
  }
  copyDir(abs(".claude", "commands"), path.join(kitRoot, ".claude", "commands"));

  // Single files. The shipped AGENTS.md is the target-theme version, NOT the
  // root AGENTS.md (which governs this package's own development).
  copyFile(abs("templates", "AGENTS.target.md"), path.join(kitRoot, "AGENTS.md"));
  copyFile(abs("templates", "gitignore.template"), path.join(kitRoot, "gitignore.template"));
  copyFile(abs("templates", "gitattributes.template"), path.join(kitRoot, "gitattributes.template"));
}

function main() {
  const commandCount = buildCommands();
  buildKit();
  console.log(`build-kit: generated commands/ (${commandCount} commands) and kit/ payload.`);
}

main();
