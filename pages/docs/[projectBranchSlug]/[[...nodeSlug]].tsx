import { getNodeContent, Node, NodeContentProps } from '@stoplight/elements-dev-portal';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Loading } from '../../../components/Loading';
import { NodeLink } from '../../../components/NodeLink';
import { NotFound } from '../../../components/NotFound';
import { PageTransition } from '../../../components/PageTransition';
import { getLayout as getStoplightProjectlayout } from '../../../layouts/StoplightProjectLayout';
import { getParam } from '../../../utils/params';
import { getProjectIdFromSlug } from '../../../utils/projects';

const NodeContent = dynamic<NodeContentProps>(
  () => import('@stoplight/elements-dev-portal').then(mod => mod.NodeContent),
  {
    ssr: false,
  },
);

type PageProps = {
  title: string;
  description?: string;
  projectSlug: string;
  branchSlug: string;
  nodeSlug: string;
  node?: Node;
};

export const getStaticProps: GetStaticProps<PageProps> = async ctx => {
  const [projectSlug, branchSlug = ''] = getParam(ctx.params, 'projectBranchSlug').split(':');
  const projectId = getProjectIdFromSlug(projectSlug);
  const nodeSlug = getParam(ctx.params, 'nodeSlug');

  let props: PageProps = {
    title: '',
    description: '',
    projectSlug,
    branchSlug,
    nodeSlug,
  };

  if (nodeSlug) {
    try {
      const node = await getNodeContent({
        projectId,
        branchSlug,
        nodeSlug,
      });

      props = {
        ...props,
        title: node.title,
        description: node.summary,
        node,
      };
    } catch (error) {
      // TODO: throw error with a code so we can distinguish not found from other errors
      console.error('docs.fetchNode.getStaticProps');
      props = {
        title: 'Not Found',
        projectSlug,
        branchSlug,
        nodeSlug,
      };
    }
  }

  return {
    revalidate: 60,
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    // this generates static pages on demand, with re-build according to `revalidate` seconds prop above
    fallback: 'blocking',
  };
};

function DocsPage({ node, nodeSlug }: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => console.info('DocsPage.mount'), []);
  console.info('DocsPage.render');

  let elem;
  const router = useRouter();
  if (router.isFallback || !nodeSlug) {
    elem = <Loading />;
  } else if (!node) {
    elem = <NotFound />;
  } else {
    elem = <NodeContent node={node} Link={NodeLink} />;
  }

  return (
    <PageTransition id={node?.id} key="main">
      {elem}
    </PageTransition>
  );
}

DocsPage.getLayout = getStoplightProjectlayout;

export default DocsPage;
