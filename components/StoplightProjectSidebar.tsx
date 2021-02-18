import { Box } from '@stoplight/mosaic';
import Link from 'next/link';
import * as React from 'react';

const toc = [
  { id: 'a', name: 'Article a' },
  { id: 'b', name: 'Article b' },
  { id: 'c', name: 'Article c' },
];

export type StoplightProjectSidebarProps = {};

export const StoplightProjectSidebar = React.memo((props: StoplightProjectSidebarProps) => {
  // TODO: I suggest using hook from elements to grab table of contents data on the client here
  // NextJS does not have good support for this sort of persistent layout data fetching in SSR
  // We can build a really pretty skeleton ui to make this less painful - it won't harm SEO or anything

  console.log('StoplightProjectSidebar.render');

  return (
    <Box flexGrow h="full">
      {toc?.map(x => (
        <Link key={x.id} href={`/docs/${x.id}`}>
          <a>
            <Box>{x.name}</Box>
          </a>
        </Link>
      ))}
    </Box>
  );
});
