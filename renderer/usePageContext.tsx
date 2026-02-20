
import React, { useContext } from 'react';
import { PageContext } from './types';

const Context = React.createContext<PageContext | null>(null);

export function PageContextProvider({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

export function usePageContext() {
  const context = useContext(Context);
  if (!context) throw new Error('usePageContext must be used within a PageContextProvider');
  return context;
}
