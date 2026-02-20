
import ReactDOMServer from 'react-dom/server';
import { PageShell } from './PageShell';
import { dangerouslySkipEscape, escapeInject } from 'vike/server';
import type { PageContextServer } from './types';

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'App using Vite + vike';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {},
  };
}

export { render };
