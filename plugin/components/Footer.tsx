import { Box, Flex, HStack, Icon, IIconProps, Link, VStack } from '@stoplight/mosaic';
import React, { useContext } from 'react';

import { DevPortalContext } from './Provider';
import { Status } from './Status';

export const Footer = () => {
  // @ts-expect-error: mosaic doesn't yet support `fak` (custom kit icons)
  const logo = <Icon icon={['fak', 'stoplight']} size="2x" />;

  const { siteFooter, social } = useContext(DevPortalContext);

  const resourceElems = siteFooter?.resources?.map((r, key) => {
    return (
      <SiteFooterLink key={key} to={r.href} icon={r.icon}>
        {r.title}
      </SiteFooterLink>
    );
  });

  const copyright = siteFooter?.copyright;

  return (
    <VStack spacing={4}>
      {resourceElems?.length ? (
        <HStack spacing={6} flexWrap>
          {resourceElems}
        </HStack>
      ) : null}

      <Flex align="center">
        {copyright && (
          <Box flexGrow style={{ flexBasis: 0 }} color="muted">
            {copyright}
          </Box>
        )}

        <HStack spacing={4} style={{ flexBasis: 0 }}>
          {social?.twitter && <SiteFooterLink to={social.twitter} icon={['fab', 'twitter']} />}
          {social?.google && <SiteFooterLink to={social.google} icon={['fab', 'google']} />}
          {social?.facebook && <SiteFooterLink to={social.facebook} icon={['fab', 'facebook']} />}
          {social?.github && <SiteFooterLink to={social.github} icon={['fab', 'github']} />}
          {social?.linkedIn && <SiteFooterLink to={social.linkedIn} icon={['fab', 'linkedin']} />}
          {social?.rss && <SiteFooterLink to={social.rss} icon={['fas', 'rss']} />}
        </HStack>

        <Flex flexGrow justifyContent="end" style={{ flexBasis: 0 }}>
          <Status />
        </Flex>
      </Flex>
    </VStack>
  );
};

function SiteFooterLink({ to, children, icon }: { to: string; children?: React.ReactNode; icon?: IIconProps['icon'] }) {
  const isAbsolute = to.startsWith('http');

  return (
    <HStack
      as={Link}
      href={to}
      spacing={3}
      textDecoration="no-underline"
      target={isAbsolute ? '_blank' : undefined}
      color={{ hover: 'primary' }}
    >
      {icon && <Icon icon={icon} size="lg" />}
      {children}
    </HStack>
  );
}
