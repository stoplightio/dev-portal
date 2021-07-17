import * as React from 'react';

import { DevPortalSiteFooter, DevPortalSiteFooterProps } from '../plugin';

export function SiteFooter(props: DevPortalSiteFooterProps) {
  /**
   * You have access to the entire config, should you wish to re-create the entire site footer rather than use the built
   * in <DevPortalSiteFooter /> component
   */
  // const { siteFooter } = useDevPortalConfig();

  return (
    <>
      {/* Render the standard site footer */}
      <DevPortalSiteFooter {...props} />

      {/* You could render additional content around the default site header */}
    </>
  );
}
