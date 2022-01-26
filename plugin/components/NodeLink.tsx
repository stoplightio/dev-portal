import { CustomLinkComponent } from '@stoplight/elements-core';
import { Box } from '@stoplight/mosaic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { usePrefetchOnHover } from '../hooks';

export const NodeLink: CustomLinkComponent = ({ className, to, children }) => {
  const router = useRouter();

  const prefetchProps = usePrefetchOnHover(to);

  return (
    <Link
      href={{
        pathname: router.route,
        query: {
          ...router.query,
          nodeSlug: to,
        },
      }}
      prefetch={false}
      passHref
    >
      <Box as="a" {...prefetchProps} textDecoration="no-underline" className={className}>
        {children}
      </Box>
    </Link>
  );
};
