import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { withDevPortalApp } from '../plugin';
import { config } from '../stoplight.config';

export default withDevPortalApp(config, {
  // You can provide customized components for certain areas of the layout
  siteHeader: SiteHeader,
  siteFooter: SiteFooter,
});
