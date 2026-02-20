import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape } from "vite-plugin-ssr/server";
import React from "react";
function PageShell({ children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children });
}
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  return {
    documentHtml: dangerouslySkipEscape(pageHtml),
    pageContext: {}
  };
}
export {
  render
};
