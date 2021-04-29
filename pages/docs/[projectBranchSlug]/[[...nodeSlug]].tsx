import { Box } from '@stoplight/mosaic';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { ErrorBoundary } from '../../../components/ErrorBoundary';
import { NodeContentProps } from '../../../components/NodeContent';
import { NodeLink } from '../../../components/NodeLink';
import { NotFound } from '../../../components/NotFound';
import { PageTransition } from '../../../components/PageTransition';
import { SEO } from '../../../components/SEO';
import { fetchNode, Node } from '../../../handlers/node';
import { fetchProject, Project } from '../../../handlers/project';
import { getLayout as getStoplightProjectlayout } from '../../../layouts/StoplightProjectLayout';
import { getParam } from '../../../utils/params';

const NodeContent = dynamic<NodeContentProps>(
  () => import('../../../components/NodeContent').then(mod => mod.NodeContent),
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
  const nodeSlug = getParam(ctx.params, 'nodeSlug');

  let project: Project;
  try {
    project = await fetchProject(projectSlug);
  } catch (error) {
    console.error('docs.fetchProject.getStaticProps');
    // Show not found page if project doesn't exist
    return {
      notFound: true,
    };
  }

  let props: PageProps = {
    title: project?.name || '',
    description: project?.description || '',
    projectSlug,
    branchSlug,
    nodeSlug,
  };

  if (nodeSlug) {
    try {
      const node = await fetchNode({
        projectSlug,
        branchSlug,
        nodeSlug,
      });

      props = {
        ...props,
        title: node.title,
        description: node.summary,
        node,
      };
    } catch (e) {
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

function DocsPage({ node, title, description }: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => console.info('DocsPage.mount'), []);
  console.info('DocsPage.render');

  const router = useRouter();

  let elem;
  if (router.isFallback) {
    elem = <Box>Loading...</Box>;
  } else if (!node) {
    elem = <NotFound />;
  } else {
    elem = <NodeContent node={node} Link={NodeLink} />;
  }

  return (
    <PageTransition id={node?.id} key="main">
      <SEO title={title} description={description} />
      <ErrorBoundary>{elem}</ErrorBoundary>
    </PageTransition>
  );
}

DocsPage.getLayout = getStoplightProjectlayout;

export default DocsPage;
