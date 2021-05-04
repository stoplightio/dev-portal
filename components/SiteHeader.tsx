import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Input,
  Menu,
  MenuItem,
  NoSsr,
  Pressable,
  useModalState,
} from '@stoplight/mosaic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { usePrefetchOnHover } from '../hooks';
import { useWorkspaceNodes } from '../hooks/useWorkspaceNodes';
import { SearchResult } from '../interfaces/searchResult';
import { projectIdBySlug } from '../utils/projects';
import { Search } from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';

const SiteHeaderLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const router = useRouter();

  const currentPath = router.asPath;
  const isActive = currentPath === to || currentPath.startsWith(to);

  return (
    <Link href={to} prefetch={false} passHref>
      <Box as="a" {...usePrefetchOnHover(to)} noFocusRing textDecoration="no-underline">
        <Box
          fontSize="lg"
          color={isActive ? undefined : { default: 'muted', hover: 'primary' }}
          fontWeight={isActive ? 'semibold' : undefined}
          py={2}
        >
          {children}
        </Box>
      </Box>
    </Link>
  );
};

const SiteHeaderMenuLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const router = useRouter();

  const currentPath = router.asPath;
  const isActive = currentPath === to || currentPath.startsWith(to);

  return (
    <Link href={to} prefetch={false} passHref>
      <Box
        as="a"
        {...usePrefetchOnHover(to)}
        noFocusRing
        textDecoration="no-underline"
        fontWeight={isActive ? 'semibold' : undefined}
        color={{ default: isActive ? 'primary' : undefined, hover: 'on-primary' }}
      >
        {children}
      </Box>
    </Link>
  );
};

const SiteHeaderSearch = () => {
  const router = useRouter();
  const { isOpen, open, close } = useModalState();
  const [search, setSearch] = React.useState('');
  const { data } = useWorkspaceNodes({
    search,
    projectIds: Object.values(projectIdBySlug),
    workspaceId: process.env.NEXT_PUBLIC_WORKSPACE_ID,
    hostname: process.env.NEXT_PUBLIC_HOSTNAME,
  });

  const onClick = (searchResult: SearchResult) => {
    router.push(`/docs/${searchResult.project_slug}/${searchResult.slug}`);
    close();
  };

  return (
    <>
      <Input placeholder="Search..." onClick={open} />
      <Search
        search={search}
        searchResults={data}
        onSearch={setSearch}
        isOpen={isOpen}
        onClose={close}
        onClick={onClick}
      />
    </>
  );
};

const SiteHeader = React.memo(() => {
  // mosaic doesn't yet support `fak` (custom kit icons)
  // @ts-expect-error
  const icon = <Icon icon={['fak', 'stoplight']} />;
  const router = useRouter();

  console.info('SiteHeader.render');

  return (
    <Flex as="header" alignItems="center" borderB style={{ height: 70 }}>
      <Container as={Flex} size="xl">
        <HStack flexGrow spacing={6}>
          <Link href="/" prefetch={false}>
            <a {...usePrefetchOnHover('/')} className="sl-no-focus-ring">
              <Box fontSize="4xl" mt={-0.5}>
                {icon}
              </Box>
            </a>
          </Link>

          <HStack spacing={4}>
            <SiteHeaderLink to="/docs/platform">Docs</SiteHeaderLink>
            <SiteHeaderLink to="/guides">Guides</SiteHeaderLink>

            <Menu
              label="Reference"
              trigger={
                <Pressable>
                  <Box fontSize="lg" color={{ default: 'muted', hover: 'primary' }} py={2}>
                    Reference
                  </Box>
                </Pressable>
              }
            >
              <MenuItem
                text={<SiteHeaderMenuLink to="/docs/spectral">Styleguides with Spectral</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/spectral');
                }}
              />

              <MenuItem
                text={<SiteHeaderMenuLink to="/docs/prism">Mock with Prism</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/prism');
                }}
              />

              <MenuItem
                text={<SiteHeaderMenuLink to="/docs/elements">Docs with Elements</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/elements');
                }}
              />

              <MenuItem
                text={<SiteHeaderMenuLink to="/docs/cli">Stoplight CLI</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/cli');
                }}
              />

              <MenuItem
                text={<SiteHeaderMenuLink to="/docs/studio-demo">Studio Demo</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/studio-demo');
                }}
              />
            </Menu>

            <SiteHeaderSearch />
          </HStack>
        </HStack>

        <HStack spacing={4}>
          <SiteHeaderLink to="https://stoplight.io/blog">Blog</SiteHeaderLink>
          <SiteHeaderLink to="/support">Support</SiteHeaderLink>
          <SiteHeaderLink to="https://stoplight.io/welcome">Sign In</SiteHeaderLink>
          <NoSsr>
            <ThemeSwitcher />
          </NoSsr>
        </HStack>
      </Container>
    </Flex>
  );
});

export default SiteHeader;
