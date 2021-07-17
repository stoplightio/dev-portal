// The public API:

export type { CustomComponents, DevPortalConfig } from './components/Provider';
export type { SiteFooterProps as DevPortalSiteFooterProps } from './components/SiteFooter';
export { SiteFooter as DevPortalSiteFooter } from './components/SiteFooter';
export type { SiteHeaderProps as DevPortalSiteHeaderProps } from './components/SiteHeader';
export { SiteHeader as DevPortalSiteHeader } from './components/SiteHeader';
export { useConfig as useDevPortalConfig } from './hooks/useConfig';
export { withDevPortalApp } from './pages/_app';
export { withDevPortalDocument } from './pages/_document';
export { docsPageStaticFuncs, withDevPortalDocsPage } from './pages/doc';
export type { BasePageProps } from './pages/types';
