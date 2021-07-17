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
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';

import { BasePageProps } from '../plugin';
import { Footer } from '../plugin/components/Footer';
import { Search } from '../plugin/components/Search';
import { getLayout } from '../plugin/layouts/SiteLayout';
import { config } from '../stoplight.config';

type PageProps = BasePageProps & {};

export const getStaticProps: GetStaticProps<PageProps> = () => {
  return {
    props: {
      hideSearch: true,
      config,
    },
  };
};

const IndexPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Box>
    <Box bg="primary" color="on-primary" pb={24} pt={20}>
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

    <Container size="lg" px={10}>
      <HStack mt={20} justify="between" spacing={6}>
        <GettingStartedCard
          href="/docs/platform/ZG9jOjIwNjk2Mg-introduction-to-stoplight-platform"
          icon="rocket"
          color="danger"
          title="Get Started"
        />

        <GettingStartedCard
          href="/docs/platform/ZG9jOjU4NzU5NA-overview"
          icon="chart-network"
          color="warning"
          title="Setup an API program"
        />

        <GettingStartedCard
          href="/docs/platform/ZG9jOjIwMTI3Nw-overview"
          icon="pencil-ruler"
          color="success"
          title="Design an API"
        />
      </HStack>

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
        boxShadow={{ hover: 'lg' }}
        h={60}
        style={{ borderColor: color }}
        overflowX="hidden"
        overflowY="hidden"
      >
        <Flex align="center" justify="center" w={60} borderR={2} style={{ color, borderColor: color }}>
          <Icon icon={icon} size="6x" />
        </Flex>

        <Box flex={1} px={24} my="auto" pos="relative">
          <Box color="muted" fontSize="lg" textTransform="uppercase">
            {title}
          </Box>

          <Box fontSize="2xl">{description}</Box>

          <Box pos="absolute" style={{ backgroundColor: color }} />
        </Box>
      </Flex>
    </Link>
  );
};

const GettingStartedCard = ({
  href,
  icon,
  color,
  title,
}: {
  href: string;
  color: BackgroundColorVals;
  icon: IIconProps['icon'];
  title: string;
}) => {
  return (
    <Link href={href} passHref>
      <Flex
        as="a"
        align="center"
        flexDirection="col"
        justify="around"
        h={60}
        p={8}
        rounded="lg"
        boxShadow={{ hover: 'lg' }}
        w="full"
        style={{ maxWidth: 375, minWidth: 300 }}
        // @ts-expect-error
        color={{ default: `on-${color}`, hover: `on-${color}` }}
        bg={color}
      >
        <Box>
          <Icon icon={icon} size="6x" />
        </Box>

        <Box fontWeight="semibold" fontSize="2xl" mt={4} textAlign="center">
          {title}
        </Box>
      </Flex>
    </Link>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
