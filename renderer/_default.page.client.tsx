import { hydrateRoot } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';
import '../index.css';

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById('page-view')!,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
}

export { render };
