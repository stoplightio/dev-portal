import { Box } from '@stoplight/mosaic';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import { ErrorBoundary } from '../../components/ErrorBoundary';
import { PageTransition } from '../../components/PageTransition';
import { fetchArticle } from '../../handlers/article';
import { getLayout } from '../../layouts/StoplightProjectLayout';

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export const getStaticProps: GetStaticProps<{
  article: ThenArg<ReturnType<typeof fetchArticle>>;
}> = async ctx => {
  const { docsPath } = ctx.params;

  let article;
  try {
    article = await fetchArticle(docsPath);
  } catch (e) {
    // TODO: throw error with a code so we can distinguish not found from other errors
    console.error('docs.fetchArticle.getStaticProps', e);
    return {
      notFound: true,
    };
  }

  return {
    // 1 hour
    revalidate: 60 * 60,
    props: {
      article,
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

function DocsPage({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => console.info('DocsPage.mount'), []);
  console.info('DocsPage.render');

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  let elem;
  if (!article || router.isFallback) {
    elem = <Box>Loading...</Box>;
  } else {
    elem = <Box>{article.content}</Box>;
  }

  return (
    <PageTransition id={article.id} key="main">
      <ErrorBoundary>{elem}</ErrorBoundary>
    </PageTransition>
  );
}

DocsPage.getLayout = getLayout;

export default DocsPage;
