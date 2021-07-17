import { Box, Flex, Icon } from '@stoplight/mosaic';
import React from 'react';

import { useConfig } from '../hooks/useConfig';
import { useStatus } from '../hooks/useStatus';

export const Status = () => {
  const { statusPage } = useConfig();
  const url = statusPage?.url;
  const status = useStatus(url);

  if (!url) return null;

  return (
    <Box as="a" href="https://status.stoplight.io" target="_blank">
      <Flex px={2} py={1} align="center" bg="canvas" border borderColor={{ hover: 'input' }}>
        <Box color="body">Status:</Box>
        <Box color={status.color} mx={1} fontSize="sm">
          <Icon icon={['fas', 'circle']} />
        </Box>
        <Box color={status.color} fontWeight="medium">
          {status.description}
        </Box>
      </Flex>
    </Box>
  );
};
