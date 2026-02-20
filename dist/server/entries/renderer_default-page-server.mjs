import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
/*! renderer/usePageContext.tsx [vike:pluginModuleBanner] */
const Context = React.createContext(null);
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
/*! renderer/PageShell.tsx [vike:pluginModuleBanner] */
function PageShell({ children, pageContext }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children }) });
}
/*! renderer/_default.page.server.tsx [vike:pluginModuleBanner] */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Simtope | Global B2B eSIM & Satellite Connectivity Provider";
  const desc = documentProps && documentProps.description || "Simtope is a leading Tier-1 distributor of eSIM, Industrial MFF2 SIMs, and Satellite IoT connectivity. Scalable mobile data solutions for global enterprise deployments.";
  const documentHtml = escapeInject(_a || (_a = __template([`<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N60529BSF6"><\/script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N60529BSF6');
        <\/script>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="`, '" />\n        <title>', `</title>
        <link rel="canonical" href="https://simtope.com" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>S</text></svg>">
        
        <!-- Simtope Identification: v1.2.6-Final-Stable-Deploy -->
        <meta name="simtope-build-id" content="v1.2.6-Final-Stable-Deploy" />

        <!-- GitHub Pages SPA Redirect Script -->
        <script>
          (function(l) {
            if (l.search) {
              var q = {};
              l.search.slice(1).split('&').forEach(function(v) {
                var a = v.split('=');
                q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
              });
              if (q.p !== undefined) {
                window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + (q.p || '') +
                  (q.q ? ('?' + q.q) : '') +
                  l.hash
                );
              }
            }
          }(window.location))
        <\/script>

        <!-- Global Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">

        <style>
          body { background-color: #0f172a; margin: 0; font-family: 'Inter', sans-serif; color: #f8fafc; }
          #root-loader { 
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            background: #0f172a; z-index: 9999;
          }
          .spinner {
            width: 40px; height: 40px; border: 3px solid rgba(59, 130, 246, 0.1);
            border-top-color: #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        </style>
      </head>
      <body>
        <div id="page-view">`, "</div>\n      </body>\n    </html>"])), desc, title, dangerouslySkipEscape(pageHtml));
  return {
    documentHtml,
    pageContext: {}
  };
}
export {
  render
};
