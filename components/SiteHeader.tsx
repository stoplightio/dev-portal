import { Box, Flex, HStack, Icon, Input, Menu, MenuActionItem, MenuItems, NoSsr, Pressable } from '@stoplight/mosaic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { usePrefetchOnHover } from '../hooks';
import { MAX_CONTENT_WIDTH } from '../utils/constants';
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
          color={isActive ? undefined : { default: 'on-primary', hover: 'canvas-200' }}
          fontWeight={isActive ? 'semibold' : undefined}
          py={2}
        >
          {children}
        </Box>
      </Box>
    </Link>
  );
};

const siteHeaderMenuLink = ({
  currentPath,
  href,
  title,
  icon,
}: {
  currentPath: string;
  href: string;
  title?: string;
  icon?: MenuActionItem['icon'];
}): MenuActionItem => {
  const isActive = currentPath === href || currentPath.startsWith(href);

  return {
    id: title,
    title,
    isActive,
    href,
    icon,
  };
};

const SiteHeader = React.memo(({ hideSearch }: { hideSearch?: boolean }) => {
  // mosaic doesn't yet support `fak` (custom kit icons)
  // @ts-expect-error
  const icon = <Icon icon={['fak', 'stoplight']} />;
  const router = useRouter();
  const currentPath = router.asPath;

  console.info('SiteHeader.render');

  const referenceMenuItems: MenuItems = [
    siteHeaderMenuLink({
      title: 'Styleguides with Spectral',
      href: '/docs/spectral',
      icon: ['fal', 'clipboard-list-check'],
      currentPath,
    }),
    siteHeaderMenuLink({
      title: 'Mock with Prism',
      href: '/docs/prism',
      currentPath,
      icon: ['fal', 'server'],
    }),
    siteHeaderMenuLink({
      title: 'Docs with Elements',
      href: '/docs/elements',
      currentPath,
      icon: ['fal', 'puzzle-piece'],
    }),
    siteHeaderMenuLink({ title: 'Stoplight API', href: '/docs/api', currentPath, icon: ['fal', 'bolt'] }),
    siteHeaderMenuLink({
      title: 'Studio Demo',
      href: '/docs/studio-demo',
      currentPath,
      icon: ['fal', 'paint-brush'],
    }),
  ];

  return (
    <Box as="header" alignItems="center" bg="primary" color="on-primary">
      <Flex mx="auto" px={4} style={{ height: 70, maxWidth: MAX_CONTENT_WIDTH }}>
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
              aria-label="Reference"
              size="lg"
              items={referenceMenuItems}
              renderTrigger={
                <Pressable>
                  <Box fontSize="lg" color={{ hover: 'canvas-200' }} py={2}>
                    Reference
                  </Box>
                </Pressable>
              }
            />

            {!hideSearch && <Search renderTrigger={({ open }) => <Input onClick={open} placeholder="Search..." />} />}
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
      </Flex>
    </Box>
  );
});

export default SiteHeader;
