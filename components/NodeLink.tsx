import { CustomLinkComponent } from '@stoplight/elements/components/MosaicTableOfContents/types';
import { Box } from '@stoplight/mosaic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const NodeLink: CustomLinkComponent = ({ className, to, children, hash }) => {
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: router.route,
        query: {
          ...router.query,
          nodeSlug: to,
        },
        hash,
      }}
      passHref
    >
      <Box as="a" textDecoration="no-underline" className={className}>
        {children}
      </Box>
    </Link>
  );
};
