import React from 'react';

import { NotFound } from '../components/NotFound';
import { SEO } from '../components/SEO';
import { SiteLayout } from '../layouts/SiteLayout';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" description="Page not found" />
    <NotFound />
  </>
);

NotFoundPage.getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default NotFoundPage;
