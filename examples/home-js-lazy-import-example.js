lazyImportWhenExists({
  key: "F__example_component",
  selector: ".F__exampleComponent",
  importer: () => import("./services/home/F__example_component"),
  init: (mod, hosts) => mod.default(hosts, helpers),
});
