import { Container, Heading } from '@stoplight/mosaic';

import { getLayout } from '../layouts/SiteLayout';

const IndexPage = () => (
  <Container size="xl" pt={10}>
    <Heading size={1}>Landing Page</Heading>
  </Container>
);

IndexPage.getLayout = getLayout;

export default IndexPage;
