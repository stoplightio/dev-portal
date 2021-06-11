import { Box, Flex, HStack, Icon, Input, Menu, MenuItem, NoSsr, Pressable } from '@stoplight/mosaic';
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
        // color={{ default: isActive ? 'on-primary' : undefined, hover: 'on-primary' }}
      >
        {children}
      </Box>
    </Link>
  );
};

const SiteHeader = React.memo(({ hideSearch }) => {
  // mosaic doesn't yet support `fak` (custom kit icons)
  // @ts-expect-error
  const icon = <Icon icon={['fak', 'stoplight']} />;
  const router = useRouter();

  console.info('SiteHeader.render');

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
              label="Reference"
              trigger={
                <Pressable>
                  <Box fontSize="lg" color={{ hover: 'canvas-200' }} py={2}>
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
                text={<SiteHeaderMenuLink to="/docs/api">Stoplight API</SiteHeaderMenuLink>}
                onClick={() => {
                  // TODO: This is a hack because the text prop doesn't allow filling the entire row. This there's a space to the right that's unclickable by the link
                  router.push('/docs/api');
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
