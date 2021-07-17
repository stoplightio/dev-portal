import * as React from 'react';

import { DevPortalSiteHeader, DevPortalSiteHeaderProps } from '../plugin';

export function SiteHeader(props: DevPortalSiteHeaderProps) {
  /**
   * You have access to the entire config, should you wish to re-create the entire site header rather than use the built
   * in <DevPortalSiteHeader /> component
   */
  // const { siteHeader } = useDevPortalConfig();

  return (
    <>
      {/* Render the standard site header */}
      <DevPortalSiteHeader {...props} />

      {/* You could render additional content around the default site header */}
    </>
  );
}
