import { Box, Flex, HStack, NoSsr } from '@stoplight/mosaic';
import * as React from 'react';

import { SEO } from './SEO';
// import { Sidebar } from './Sidebar';
import { ThemeSwitcher } from './ThemeSwitcher';

interface PageContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  sidebar?: boolean;
}

export function PageContainer(props: PageContainerProps) {
  const { title, description, children, sidebar = true } = props;

  return (
    <>
      <SEO title={title} description={description} />

      <Flex minH="screen">
        {/* {sidebar && <Sidebar />} */}

        <NoSsr>
          <HStack as="header" pos="fixed" style={{ top: 10, right: 15 }} spacing={2}>
            <ThemeSwitcher />
          </HStack>
        </NoSsr>

        <Box as="main" w="full">
          {children}
        </Box>
      </Flex>
    </>
  );
}
