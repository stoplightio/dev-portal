import { Box, Flex, Icon } from '@stoplight/mosaic';
import React from 'react';

import { useStatus } from '../hooks/useStatus';

export const Status = () => {
  const status = useStatus();

  return (
    <Box as="a" href="https://status.stoplight.io" target="_blank">
      <Flex px={2} py={1} align="center" bg="canvas" border>
        <Box color="body">Status:</Box>
        <Box color={status.color} mx={1}>
          <Icon icon="circle" />
        </Box>
        <Box color={status.color}>{status.description}</Box>
      </Flex>
    </Box>
  );
};
