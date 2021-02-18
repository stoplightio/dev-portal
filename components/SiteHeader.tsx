import { Box, Container, Flex, HStack, Icon, NoSsr } from '@stoplight/mosaic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { usePrefetchOnHover } from '../hooks';
import { ThemeSwitcher } from './ThemeSwitcher';

const SiteHeaderLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const router = useRouter();

  const currentPath = router.asPath;
  const isActive = currentPath === to || currentPath.startsWith(to);

  return (
    <Link href={to} prefetch={false}>
      <a {...usePrefetchOnHover(to)} className="sl-no-focus-ring">
        <Box
          fontSize="lg"
          color={isActive ? undefined : { default: 'muted', hover: 'primary' }}
          fontWeight={isActive ? 'semibold' : undefined}
          py={2}
        >
          {children}
        </Box>
      </a>
    </Link>
  );
};

const SiteHeader = React.memo(() => {
  // mosaic doesn't yet support `fak` (custom kit icons)
  // @ts-expect-error
  const icon = <Icon icon={['fak', 'stoplight']} />;

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
            <SiteHeaderLink to="/docs">Docs</SiteHeaderLink>
            <SiteHeaderLink to="/guides">Guides</SiteHeaderLink>
            <SiteHeaderLink to="/reference">Reference</SiteHeaderLink>
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
