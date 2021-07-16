import {
  BackgroundColorVals,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IIconProps,
  VStack,
} from '@stoplight/mosaic';
import Link from 'next/link';
import React from 'react';

import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { getLayout } from '../layouts/SiteLayout';

export const getStaticProps = () => {
  return {
    props: {
      hideSearch: true,
    },
  };
};

const IndexPage = () => (
  <Box>
    <Box bg="primary" color="on-primary" pt={24} pb={60}>
      <Heading textAlign="center" size={1}>
        Welcome to the Stoplight Learning Center
      </Heading>

      <Box textAlign="center" fontSize="2xl" mt={3} mb={14}>
        A complete guide to designing and documenting APIs with Stoplight
      </Box>

      <Search
        renderTrigger={({ open }) => (
          <Flex
            onClick={open}
            mx="auto"
            h={10}
            border={2}
            borderColor="body"
            rounded
            bg="canvas"
            color="body"
            cursor="pointer"
            fontWeight="medium"
            style={{ maxWidth: 500 }}
          >
            <Flex flex={1} align="center" px={4}>
              Search all docs, guides, and tutorials
            </Flex>

            <Flex
              justify="center"
              align="center"
              w={24}
              color="canvas"
              // TODO: figure out what to use for a black background
              // @ts-expect-error
              bg="body"
            >
              Search
            </Flex>
          </Flex>
        )}
      />
    </Box>

    <Container size="lg">
      <Flex mt={-32} mb={32} justify="between">
        <GettingStartedCard
          href="/docs/platform/ZG9jOjIwNjk2Mg-introduction-to-stoplight-platform"
          icon="rocket"
          color="danger"
          title="Get started with Stoplight"
        >
          <Box
            pos="absolute"
            style={{
              backgroundColor: `rgba(255,255,255,0.2)`,
              clipPath: 'polygon(89% 43%, 80% 74%, 0 100%, 48% 45%)',
              height: '100%',
              width: '50%',
              left: 0,
            }}
          />
        </GettingStartedCard>

        <GettingStartedCard
          href="/docs/platform/ZG9jOjU4NzU5NA-overview"
          icon="chart-network"
          color="warning"
          title="Setup an API program"
        >
          <Box
            pos="absolute"
            style={{
              backgroundColor: `rgba(255,255,255,0.2)`,
              clipPath: 'polygon(100% 63%, 100% 100%, 50% 100%, 29% 35%)',
              height: '100%',
              width: '50%',
              right: 0,
            }}
          />
        </GettingStartedCard>

        <GettingStartedCard
          href="/docs/platform/ZG9jOjIwMTI3Nw-overview"
          icon="pencil-ruler"
          color="success"
          title="Design an API"
        >
          <Box
            pos="absolute"
            style={{
              backgroundColor: `rgba(255,255,255,0.2)`,
              clipPath: 'polygon(36% 15%, 0 50%, 0 0, 30% 0)',
              height: '100%',
              width: '100%',
              left: 0,
            }}
          />
        </GettingStartedCard>
      </Flex>

      <Box mt={24}>
        <Heading size={2} textAlign="center" mb={16}>
          Explore using Stoplight
        </Heading>

        <VStack spacing={12}>
          <ExploreCard
            color="#985DF6"
            icon="edit"
            href="/docs/studio"
            title="Studio"
            description="Create, prototype, and share OpenAPI descriptions and JSON Schemas using a visual editor."
          />

          <ExploreCard
            color="#31C48D"
            icon="users"
            href="/docs/platform/ZG9jOjE4ODEyMg-creating-a-workspace"
            title="Administration"
            description="Provide company-wide visibility to your APIs with flexible roles and permissions depending on your organization’s needs."
          />

          <ExploreCard
            color="#5496F7"
            icon="shapes"
            href="/docs/elements"
            title="Elements"
            description="Build beautiful, interactive API Docs with embeddable React or Web Components, powered by OpenAPI and Markdown."
          />

          <ExploreCard
            color="#A0AEC0"
            icon="database"
            href="/docs/prism"
            title="Prism"
            description="Turn any OpenAPI2/3 and Postman Collection file into an API server with mocking, transformations and validations."
          />

          <ExploreCard
            color="#F05252"
            icon="shield-check"
            href="/docs/spectral"
            title="Spectral"
            description="A flexible JSON/YAML linter for creating automated style guides, with baked in support for OpenAPI v2 & v3."
          />

          <ExploreCard
            color="#633112"
            icon="swatchbook"
            href="/docs/design-libraries"
            title="Design Libraries"
            description="Define a shared set of standardized components and promote reuse across all your APIs."
          />
        </VStack>
      </Box>
    </Container>

    <Container size="lg" px={10} mt={32}>
      <Box borderT py={16} mx="-px" px="px">
        <Footer />
      </Box>
    </Container>
  </Box>
);

const ExploreCard = ({
  href,
  color,
  icon,
  title,
  description,
}: {
  href: string;
  color: string;
  icon: IIconProps['icon'];
  title: string;
  description: string;
}) => {
  return (
    <Link href={href} passHref>
      <Flex
        as="a"
        border={2}
        rounded
        h={60}
        my={16}
        overflowX="hidden"
        overflowY="hidden"
        transform
        transitionDuration={300}
        translateX={{ hover: 2 }}
        translateY={{ hover: -2 }}
        style={{
          borderColor: color,
          // @ts-expect-error
          '--shadow-md': `-8px 8px 0 0 ${color}`,
        }}
        boxShadow={{
          hover: true,
        }}
      >
        <Flex align="center" justify="center" w={60} borderR={2} style={{ color, borderColor: color }}>
          <Icon icon={icon} size="6x" />
        </Flex>

        <Flex direction="col" justify="center" flex={1} px={24} my="auto" pos="relative" h="full">
          <Box color="muted" fontSize="lg" textTransform="uppercase">
            {title}
          </Box>

          <Box fontSize="2xl">{description}</Box>

          <Box
            pos="absolute"
            style={{
              backgroundColor: `${color}33`,
              clipPath: 'polygon(87% 57%, 0% 100%, 100% 100%)',
              height: '100%',
              width: '50%',
            }}
          />

          <Box
            pos="absolute"
            style={{
              backgroundColor: `${color}33`,
              clipPath: 'polygon(87% 57%, 0% 100%, 100% 100%)',
              height: '100%',
              width: '50%',
              transform: 'rotate(45deg)',
            }}
          />
        </Flex>
      </Flex>
    </Link>
  );
};

const GettingStartedCard: React.FC<{
  href: string;
  color: BackgroundColorVals;
  icon: IIconProps['icon'];
  title: string;
}> = ({ href, icon, color, title, children }) => {
  return (
    <Link href={href} passHref>
      <Flex
        as="a"
        align="center"
        pos="relative"
        flexDirection="col"
        justify="around"
        h={60}
        p={8}
        rounded="lg"
        // @ts-expect-error
        color={{ default: `on-${color}`, hover: `on-${color}` }}
        bg={color}
        transform
        transitionDuration={300}
        translateX={{ hover: 2 }}
        translateY={{ hover: -2 }}
        style={{
          width: '350px',
          // @ts-expect-error
          '--shadow-md': `-8px 8px 0 0 var(--color-text)`,
        }}
        boxShadow={{
          hover: true,
        }}
      >
        <Box>
          <Icon icon={icon} size="6x" />
        </Box>

        <Box fontWeight="semibold" fontSize="2xl" mt={4} textAlign="center">
          {title}
        </Box>

        {children}
      </Flex>
    </Link>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
