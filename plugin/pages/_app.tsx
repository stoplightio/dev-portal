import { DevPortalProvider } from '@stoplight/elements-dev-portal';
import { Box, Provider as MosaicProvider, useIconStore } from '@stoplight/mosaic';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { DefaultSeo } from 'next-seo';
import * as React from 'react';

import { CustomComponents, DevPortalConfig, DevPortalProvider as DevPortalProvider2 } from '../components/Provider';
import SEO from '../next-seo.config';
import { BasePageProps } from './types';

type DevPortalAppProps = AppProps;

// @ts-expect-error
const GlobalProgressBar = dynamic(() => import('../components/GlobalProgressBar').then(mod => mod.GlobalProgressBar), {
  ssr: false,
});

const NextMosaicLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  function NextMosaicLink({ href, ...props }, ref) {
    return (
      <Link href={href || ''} prefetch={false}>
        <a {...props} ref={ref} />
      </Link>
    );
  },
);

export function withDevPortalApp(_config: DevPortalConfig, customComponents?: CustomComponents) {
  return function App({ Component, pageProps: _pageProps }: DevPortalAppProps) {
    const pageProps: BasePageProps = _pageProps;
    const { platformUrl, ...devPortalConfig } = Object.assign({}, _config, pageProps.config || {});

    /** Keep an eye out for full remounts, we want to minimize those */
    React.useEffect(() => console.info('App.mount'), []);

    // @ts-expect-error
    const getLayout = Component.getLayout || (page => page);

    // Use light icons by default (in areas where specific icon set is not requested)
    // https://mosaic.vercel.app/docs/media/icon#changing-the-default-icon-style
    const setDefaultStyle = useIconStore(ic => ic.setDefaultStyle);
    const defaultIconStyle = devPortalConfig.fontAwesome?.defaultIconStyle;
    React.useEffect(() => {
      if (defaultIconStyle) {
        setDefaultStyle(defaultIconStyle);
      }
    }, [setDefaultStyle, defaultIconStyle]);

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>

        <DefaultSeo {...SEO} />

        <DevPortalProvider2 {...devPortalConfig} customComponents={customComponents}>
          <Box
            as={MosaicProvider}
            bg="canvas"
            minH="screen"
            fontFamily="ui"
            fontSize="base"
            color="body"
            componentOverrides={{
              Link: NextMosaicLink,
            }}
          >
            <DevPortalProvider platformUrl={platformUrl}>
              {getLayout(<Component {...(pageProps as any)} />, pageProps)}
            </DevPortalProvider>
          </Box>
        </DevPortalProvider2>

        <GlobalProgressBar />
      </>
    );
  };
}
