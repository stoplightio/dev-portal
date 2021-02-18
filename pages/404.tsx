import { Box, Flex, Heading, VStack } from '@stoplight/mosaic';
import React from 'react';

import { SEO } from '../components/SEO';
import { SiteLayout } from '../layouts/SiteLayout';

const NotFoundPage = () => (
  <Flex align="center" justify="center" flexGrow>
    <SEO title="404: Not found" description="Page not found" />
    <VStack spacing={4} align="center">
      <Heading size={1}>Not Found</Heading>
      <Box as="p">Could not find what you are looking for</Box>
    </VStack>
  </Flex>
);

NotFoundPage.getLayout = page => <SiteLayout>{page}</SiteLayout>;

export default NotFoundPage;
