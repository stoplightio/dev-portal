import { getNodeContent, Node, NodeContentProps } from '@stoplight/elements-dev-portal';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Loading } from '../components/Loading';
import { NodeLink } from '../components/NodeLink';
import { NotFound } from '../components/NotFound';
import { PageTransition } from '../components/PageTransition';
import { getLayout as getStoplightProjectlayout } from '../layouts/StoplightProjectLayout';
import { LoadableDevPortalConfig, resolveConfig } from '../utils/config';
import { getParam } from '../utils/params';
import { BasePageProps } from './types';

const NodeContent = dynamic<NodeContentProps>(
  () => import('@stoplight/elements-dev-portal').then(mod => mod.NodeContent),
  {
    ssr: false,
  },
);

type PageProps = BasePageProps & {
  title: string;
  description?: string;
  projectSlug: string;
  branchSlug: string;
  nodeSlug: string;
  node?: Node;
};

export const docsPageStaticFuncs = ($config: LoadableDevPortalConfig) => {
  const getStaticProps: GetStaticProps<PageProps> = async ctx => {
    const config = await resolveConfig($config);
    const [projectSlug, branchSlug = ''] = getParam(ctx.params, 'projectBranchSlug').split(':');
    const projectId = config.projects ? config.projects[projectSlug]?.id : null;
    const nodeSlug = getParam(ctx.params, 'nodeSlug');

    let props: PageProps = {
      title: '',
      description: '',
      projectSlug,
      branchSlug,
      nodeSlug,
      config,
    };

    if (projectId && nodeSlug) {
      try {
        const node = await getNodeContent({
          platformUrl: config.platformUrl,
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
        console.error('Error fetching node, docs.fetchNode.getStaticProps', error);

        props = {
          title: 'Not Found',
          projectSlug,
          branchSlug,
          nodeSlug,
          config,
        };
      }
    }

    const redirect =
      props.node && props.node.slug !== nodeSlug
        ? {
            destination: props.node.slug,
            permanent: true,
          }
        : undefined;

    return {
      revalidate: 20,
      props,
      redirect,
    };
  };

  const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      // this generates static pages on demand, with re-build according to `revalidate` seconds prop above
      fallback: 'blocking',
    };
  };

  return { getStaticProps, getStaticPaths };
};

export function withDevPortalDocsPage(): React.FC<InferGetStaticPropsType<GetStaticProps<PageProps>>> {
  return DocsPage;
}

function DocsPage({ node, nodeSlug }: InferGetStaticPropsType<GetStaticProps<PageProps>>) {
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
    <PageTransition id={node?.id || ''} key="main">
      {elem}
    </PageTransition>
  );
}

DocsPage.getLayout = getStoplightProjectlayout;
