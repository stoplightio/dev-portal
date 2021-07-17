import { Box, Flex, Icon } from '@stoplight/mosaic';
import React, { useContext } from 'react';

import { useStatus } from '../hooks/useStatus';
import { DevPortalContext } from './Provider';

export const Status = () => {
  const { statusPage } = useContext(DevPortalContext);
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
