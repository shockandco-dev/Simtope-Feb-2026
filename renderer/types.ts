
import type { PageContext } from 'vite-plugin-ssr/types';
import type { Component, ReactNode } from 'react';

type PageProps = {};

export type PageContextCustom = {
  Page: (pageProps: PageProps) => ReactNode;
  pageProps: PageProps;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
};

export type PageContextServer = PageContext<PageContextCustom & { Page: Component<PageProps> }> & PageContextCustom;
export type PageContextClient = PageContext<PageContextCustom & { Page: Component<PageProps> }> & PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
