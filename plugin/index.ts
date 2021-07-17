import { DevPortalProviderProps } from './components/Provider';

export type DevPortalConfig = DevPortalProviderProps;

export { withDevPortalApp } from './pages/_app';
export { withDevPortalDocument } from './pages/_document';
export { docsPageStaticFuncs, withDevPortalDocsPage } from './pages/doc';
export type { BasePageProps } from './pages/types';
