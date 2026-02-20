const exportNames = ["render"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/company/index.page.tsx": () => import("./entries/pages_company_index-page.mjs"), "/pages/contact/index.page.tsx": () => import("./entries/pages_contact_index-page.mjs"), "/pages/deployment-services/index.page.tsx": () => import("./entries/pages_deployment-services_index-page.mjs"), "/pages/index.page.tsx": () => import("./entries/pages_index-page.mjs"), "/pages/iot-esim/index.page.tsx": () => import("./entries/pages_iot-esim_index-page.mjs"), "/pages/lpwa/index.page.tsx": () => import("./entries/pages_lpwa_index-page.mjs"), "/pages/satellite/index.page.tsx": () => import("./entries/pages_satellite_index-page.mjs"), "/pages/sim-management/index.page.tsx": () => import("./entries/pages_sim-management_index-page.mjs"), "/pages/zero-data/index.page.tsx": () => import("./entries/pages_zero-data_index-page.mjs") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.server.tsx": () => import("./entries/renderer_default-page-server.mjs") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.tsx": __vite_glob_3_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
