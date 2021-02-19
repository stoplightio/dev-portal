import { Box } from '@stoplight/mosaic';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { ErrorBoundary } from '../../../components/ErrorBoundary';
import { PageTransition } from '../../../components/PageTransition';
import { fetchNode } from '../../../handlers/node';
import { getLayout } from '../../../layouts/StoplightProjectLayout';

// @ts-expect-error : TODO need to fix the typings or wrap + re-export this component
const DocsContent = dynamic(() => import('@stoplight/elements/components/Docs').then(mod => mod.Docs), { ssr: false });

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export const getStaticProps: GetStaticProps<{
  node: ThenArg<ReturnType<typeof fetchNode>>;
}> = async ctx => {
  const { docsPath, projectSlug } = ctx.params;

  let node;
  try {
    node = await fetchNode({
      projectSlug: typeof projectSlug === 'string' ? projectSlug : projectSlug.join('/'),
      nodeUri: typeof docsPath === 'string' ? docsPath : docsPath.join('/'),
    });
  } catch (e) {
    // TODO: throw error with a code so we can distinguish not found from other errors
    console.error('docs.fetchNode.getStaticProps', e);
    return {
      notFound: true,
    };
  }

  return {
    // 1 min
    revalidate: 60,
    props: {
      node,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    // this generates static pages on demand, with re-build according to `revalidate` seconds prop above
    fallback: 'blocking',
  };
};

function DocsPage({ node }: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => console.info('DocsPage.mount'), []);
  console.info('DocsPage.render');

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  let elem;
  if (!node || router.isFallback) {
    elem = <Box>Loading...</Box>;
  } else {
    elem = (
      <Box p={10}>
        {/* @ts-expect-error : TODO let's make nodeType have a less strict typing (no enums) */}
        <DocsContent nodeType={node.type} nodeData={node.data} />
      </Box>
    );
  }

  return (
    <PageTransition id={node.id} key="main">
      <ErrorBoundary>{elem}</ErrorBoundary>
    </PageTransition>
  );
}

DocsPage.getLayout = getLayout;

export default DocsPage;
