import '../styles.css';

import { Provider, subscribeTheme } from '@stoplight/mosaic';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import * as React from 'react';

import SEO from '../next-seo.config';

if (process.browser) {
  subscribeTheme();
}

const GlobalProgressBar = dynamic(() => import('../components/GlobalProgressBar').then(mod => mod.GlobalProgressBar), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  /** Keep an eye out for full remounts, we want to minimize those */
  React.useEffect(() => console.info('App.mount'), []);

  // @ts-expect-error
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <DefaultSeo {...SEO} />

      <Provider style={{ minHeight: '100vh' }}>{getLayout(<Component {...pageProps}></Component>)}</Provider>

      <GlobalProgressBar />
    </>
  );
}

export default App;
