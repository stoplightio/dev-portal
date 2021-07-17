import { DevPortalProvider } from '@stoplight/elements-dev-portal';
import { Provider as MosaicProvider, subscribeTheme, useIconStore } from '@stoplight/mosaic';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { DevPortalProvider as DevPortalProvider2 } from '../components/Provider';
import SEO from '../next-seo.config';
import { BasePageProps } from './types';

if (process.browser) {
  subscribeTheme();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

// @ts-expect-error
const GlobalProgressBar = dynamic(() => import('../components/GlobalProgressBar').then(mod => mod.GlobalProgressBar), {
  ssr: false,
});

const NextMosaicLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  function NextMosaicLink({ href, ...props }, ref) {
    return (
      <Link href={href || ''}>
        <a {...props} ref={ref} />
      </Link>
    );
  },
);

type DevPortalAppProps = AppProps;

export function withDevPortalApp(): React.FC<DevPortalAppProps> {
  return App;
}

function App({ Component, pageProps: _pageProps }: AppProps) {
  const pageProps: BasePageProps = _pageProps;

  /** Keep an eye out for full remounts, we want to minimize those */
  React.useEffect(() => console.info('App.mount'), []);

  // @ts-expect-error
  const getLayout = Component.getLayout || (page => page);

  // Use light icons by default (in areas where specific icon set is not requested)
  // https://mosaic.vercel.app/docs/media/icon#changing-the-default-icon-style
  const setDefaultStyle = useIconStore(ic => ic.setDefaultStyle);
  React.useEffect(() => {
    setDefaultStyle('fal');
  }, [setDefaultStyle]);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <DefaultSeo {...SEO} />

      <DevPortalProvider2 {...pageProps.config}>
        <QueryClientProvider client={queryClient}>
          <DevPortalProvider>
            <MosaicProvider
              style={{ minHeight: '100vh' }}
              componentOverrides={{
                Link: NextMosaicLink,
              }}
            >
              {getLayout(<Component {...(pageProps as any)}></Component>, pageProps)}
            </MosaicProvider>
          </DevPortalProvider>
        </QueryClientProvider>
      </DevPortalProvider2>

      <GlobalProgressBar />
    </>
  );
}
