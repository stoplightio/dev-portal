import {
  Box,
  Flex,
  HStack,
  Icon,
  IIconProps,
  Input,
  Link,
  Menu,
  MenuActionItem,
  MenuItems,
  NoSsr,
  Pressable,
} from '@stoplight/mosaic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { usePrefetchOnHover } from '../hooks';
import { useConfig } from '../hooks/useConfig';
import { MAX_CONTENT_WIDTH } from '../utils/constants';
import {
  isSiteHeaderLink,
  isSiteHeaderMenu,
  isSiteHeaderProjectLink,
  isSiteHeaderSearch,
  isSiteHeaderThemeSwitcher,
  SiteHeaderItem,
} from './Provider';
import { Search } from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';

const SiteHeaderLink = ({
  to,
  children,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  icon?: IIconProps['icon'];
}) => {
  const router = useRouter();

  const currentPath = router.asPath;
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  const isAbsolute = to.startsWith('http');
  const prefetchProps = usePrefetchOnHover(to);

  return (
    <HStack
      as={Link}
      {...(isAbsolute ? {} : prefetchProps)}
      href={to}
      spacing={3}
      noFocusRing
      textDecoration="no-underline"
      py={2}
      fontSize="lg"
      target={isAbsolute ? '_blank' : undefined}
    >
      {icon && <Icon icon={icon} size="2x" />}
      {children && (
        <Box
          color={isActive ? undefined : { default: 'on-primary', hover: 'canvas-200' }}
          fontWeight={isActive ? 'semibold' : undefined}
        >
          {children}
        </Box>
      )}
    </HStack>
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
    id: title || '',
    title: title || '',
    isActive,
    href,
    icon,
  };
};

export type SiteHeaderProps = { hideSearch?: boolean };

export const SiteHeader = React.memo(({ hideSearch }: SiteHeaderProps) => {
  const { siteHeader = {}, theme } = useConfig();

  console.info('SiteHeader.render');

  return (
    <Box as="header" alignItems="center" bg="primary" color="on-primary">
      <Flex mx="auto" px={5} style={{ height: 70, maxWidth: theme?.maxContentWidth || MAX_CONTENT_WIDTH }}>
        <HStack flexGrow spacing={6} style={{ flexBasis: 0 }}>
          <SiteHeaderItems items={siteHeader.left} hideSearch={hideSearch} />
        </HStack>

        <HStack spacing={6}>
          <SiteHeaderItems items={siteHeader.middle} hideSearch={hideSearch} />
        </HStack>

        <HStack flexGrow justifyContent="end" spacing={6} style={{ flexBasis: 0 }}>
          <SiteHeaderItems items={siteHeader.right} hideSearch={hideSearch} />
        </HStack>
      </Flex>
    </Box>
  );
});

function SiteHeaderItems({ items, hideSearch }: { items?: SiteHeaderItem[]; hideSearch?: boolean }) {
  const { projects = {} } = useConfig();
  const router = useRouter();
  const currentPath = router.asPath;

  const itemElems = items?.map((item, key) => {
    if (isSiteHeaderLink(item) || isSiteHeaderProjectLink(item)) {
      let href = '';
      if (isSiteHeaderProjectLink(item)) {
        href = projects[item.project]?.route;
        if (!href) {
          console.warn(`Site header menu reference to invalid project ${item.project}`);
        }
      } else {
        href = item.href;
      }

      return (
        <SiteHeaderLink key={key} to={href} icon={item.icon}>
          {item.title}
        </SiteHeaderLink>
      );
    }

    if (isSiteHeaderMenu(item)) {
      const referenceMenuItems: MenuItems = item.children.map(c => {
        if (isSiteHeaderProjectLink(c)) {
          const { project, ...rest } = c;

          const href = projects[project]?.route;
          if (!href) {
            console.warn(`Site header menu reference to invalid project ${project}`);
          }

          return siteHeaderMenuLink({ ...rest, href, currentPath });
        }

        return siteHeaderMenuLink({ ...c, currentPath });
      });

      return (
        <Menu
          key={key}
          aria-label={item.title}
          size="lg"
          items={referenceMenuItems}
          renderTrigger={
            <Pressable>
              <Box fontSize="lg" color={{ hover: 'canvas-200' }} py={2} cursor="auto">
                {item.title}
              </Box>
            </Pressable>
          }
        />
      );
    }

    if (!hideSearch && isSiteHeaderSearch(item)) {
      return (
        <NoSsr key={key}>
          <Search
            renderTrigger={({ open }) => <Input onClick={open} placeholder={item.placeholder || 'Search...'} />}
          />
        </NoSsr>
      );
    }

    if (isSiteHeaderThemeSwitcher(item)) {
      return (
        <NoSsr key={key}>
          <ThemeSwitcher />
        </NoSsr>
      );
    }
  });

  return <>{itemElems}</>;
}
