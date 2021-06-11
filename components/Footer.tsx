import { Box, Container, Flex, Icon } from '@stoplight/mosaic';
import React from 'react';

import { Status } from './Status';

export const Footer = () => {
  // @ts-expect-error: mosaic doesn't yet support `fak` (custom kit icons)
  const logo = <Icon icon={['fak', 'stoplight']} size="2x" />;

  return (
    <Box borderT py={16}>
      <Container size="lg">
        <Flex flexWrap>
          <Box as="a" href="https://roadmap.stoplight.io" target="_blank" mr={6}>
            Roadmap
          </Box>

          <Box as="a" href="mailto:support@stoplight.io" target="_blank" mr={6}>
            Contact Us
          </Box>

          <Box as="a" href="https://stoplight.io/privacy/" target="_blank" mr={6}>
            Privacy Policy
          </Box>

          <Box as="a" href="https://stoplight.io/terms/" target="_blank" mr={6}>
            Terms of Service
          </Box>
        </Flex>

        <Box mt={10}>
          <Box as="a" href="https://stoplight.io" target="_blank">
            <Flex align="center">
              {logo}
              <Box ml={2} fontSize="2xl">
                Stoplight
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex align="center" justify="between">
          <Box as="a" href="https://stoplight.io" target="_blank">
            <Box fontSize="sm" mt={1}>
              Copyright © {new Date().getFullYear()} Stoplight. All rights reserved.
            </Box>
          </Box>

          <Flex align="center" justify="between" w={32}>
            <Box as="a" href="https://twitter.com/stoplightio" target="_blank">
              <Icon icon={['fab', 'twitter']} size="lg" />
            </Box>

            <Box as="a" href="https://github.com/stoplightio" target="_blank">
              <Icon icon={['fab', 'github']} size="lg" />
            </Box>

            <Box as="a" href="https://www.linkedin.com/company/stoplight" target="_blank">
              <Icon icon={['fab', 'linkedin']} size="lg" />
            </Box>

            <Box as="a" href="https://stoplight.io/rss/index.xml" target="_blank">
              <Icon icon="rss" size="lg" />
            </Box>
          </Flex>

          <Status />
        </Flex>
      </Container>
    </Box>
  );
};
