import { Provider, subscribeTheme } from '@stoplight/mosaic';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
  React.useEffect(() => console.info('mount: App'), []);

  // @ts-expect-error
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <DefaultSeo {...SEO} />

      <Provider>
        {getLayout(<Component {...pageProps}></Component>)}

        <GlobalProgressBar />
      </Provider>
    </>
  );
}

export default App;
