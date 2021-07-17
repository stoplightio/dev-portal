import { IIconProps } from '@stoplight/mosaic';
import * as React from 'react';

type SiteHeaderLink = {
  href: string;
  title?: string;
  icon?: IIconProps['icon'];
  img?: string;
};

type SiteHeaderProjectLink = {
  project: string;
  title?: string;
  icon?: IIconProps['icon'];
  img?: string;
};

type SiteHeaderMenu = {
  title: string;
  icon?: IIconProps['icon'];
  children: Array<SiteHeaderLink | SiteHeaderProjectLink>;
};

type SiteHeaderSearch = {
  type: 'search';
  placeholder?: string;
};

type SiteHeaderThemeSwitcher = {
  type: 'theme_switcher';
};

export type SiteHeaderItem =
  | SiteHeaderLink
  | SiteHeaderProjectLink
  | SiteHeaderMenu
  | SiteHeaderSearch
  | SiteHeaderThemeSwitcher;

type DevPortalSiteHeader = {
  left?: SiteHeaderItem[];
  middle?: SiteHeaderItem[];
  right?: SiteHeaderItem[];
};

type StatusPageConfig = {
  url: string;
};

type SiteFooterLink = {
  href: string;
  title?: string;
  icon?: IIconProps['icon'];
};

type DevPortalSiteFooter = {
  resources?: SiteFooterLink[];
  copyright?: string;
};

type DevPortalProject = {
  id: string;
  route: string;
};

type DevPortalTheme = {
  maxContentWidth?: number;
  minSidebarWidth?: number;
};

export type DevPortalProviderProps = {
  platformUrl?: string;
  workspaceId?: string;
  projects?: Record<string, DevPortalProject>;
  statusPage?: StatusPageConfig;
  siteHeader?: DevPortalSiteHeader;
  siteFooter?: DevPortalSiteFooter;
  theme?: DevPortalTheme;
  social?: {
    twitter?: string;
    google?: string;
    facebook?: string;
    github?: string;
    linkedIn?: string;
    rss?: string;
  };
};

export function isSiteHeaderLink(item: SiteHeaderItem): item is SiteHeaderLink {
  return !!(item && item.hasOwnProperty('href'));
}

export function isSiteHeaderProjectLink(item: SiteHeaderItem): item is SiteHeaderProjectLink {
  return !!(item && item.hasOwnProperty('project'));
}

export function isSiteHeaderMenu(item: SiteHeaderItem): item is SiteHeaderMenu {
  return !!(item && item.hasOwnProperty('children'));
}

export function isSiteHeaderSearch(item: SiteHeaderItem): item is SiteHeaderSearch {
  // @ts-expect-error
  return item['type'] === 'search';
}

export function isSiteHeaderThemeSwitcher(item: SiteHeaderItem): item is SiteHeaderThemeSwitcher {
  // @ts-expect-error
  return item['type'] === 'theme_switcher';
}

export const DevPortalContext = React.createContext<DevPortalProviderProps>({ platformUrl: 'https://stoplight.io' });

export const DevPortalProvider: React.FC<DevPortalProviderProps> = ({ children, ...value }) => {
  return <DevPortalContext.Provider value={value}>{children}</DevPortalContext.Provider>;
};
