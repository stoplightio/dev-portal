import { Box } from '@stoplight/mosaic';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { ErrorBoundary } from '../../../components/ErrorBoundary';
import { NodeContentProps } from '../../../components/NodeContent';
import { NodeLink } from '../../../components/NodeLink';
import { PageTransition } from '../../../components/PageTransition';
import { fetchNode } from '../../../handlers/node';
import { getLayout } from '../../../layouts/StoplightProjectLayout';

const NodeContent = dynamic<NodeContentProps>(
  () => import('../../../components/NodeContent').then(mod => mod.NodeContent),
  {
    ssr: false,
  },
);

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export const getStaticProps: GetStaticProps<{
  node: ThenArg<ReturnType<typeof fetchNode>>;
}> = async ctx => {
  const { nodeIdSlug = '', projectSlug = '' } = ctx.params;

  let node;
  try {
    node = await fetchNode({
      projectBranchSlug: typeof projectSlug === 'string' ? projectSlug : projectSlug?.join('/'),
      nodeIdSlug: typeof nodeIdSlug === 'string' ? nodeIdSlug : nodeIdSlug?.join('/'),
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
        <NodeContent node={node} Link={NodeLink} />
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
