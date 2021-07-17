import { IIconProps } from '@stoplight/mosaic';
import * as React from 'react';

import type { SiteFooterProps } from './SiteFooter';
import type { SiteHeaderProps } from './SiteHeader';

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

export type DevPortalSiteHeader = {
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

export type DevPortalSiteFooter = {
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

type FontAwesomeConfig = {
  kitCode: string;
  defaultIconStyle?: 'fas' | 'far' | 'fal' | 'fad';
};

export type CustomComponents = {
  siteHeader?: React.ComponentType<SiteHeaderProps>;
  siteFooter?: React.ComponentType<SiteFooterProps>;
};

export type DevPortalConfig = {
  platformUrl?: string;
  workspaceId?: string;
  projects?: Record<string, DevPortalProject>;
  statusPage?: StatusPageConfig;
  fontAwesome?: FontAwesomeConfig;
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

export type DevPortalProviderProps = DevPortalConfig & {
  customComponents?: CustomComponents;
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
