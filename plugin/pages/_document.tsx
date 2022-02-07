import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

import { DevPortalConfig } from '../components/Provider';
import { injectStyles } from '../utils/twind/document';

export type Constructor<T = object, S = object> = (new (...input: any[]) => T) & S;

export function withDevPortalDocument<P = {}, Base extends Constructor<Document<P>, typeof Document> = typeof Document>(
  config: DevPortalConfig,
  BaseDocument?: Base,
): Base {
  // @ts-expect-error
  return class DevPortalDocument extends (BaseDocument || Document) {
    static async getInitialProps(
      ctx: DocumentContext & {
        defaultGetInitialProps: (ctx: DocumentContext, options?: { nonce?: string }) => Promise<DocumentInitialProps>;
      },
    ) {
      injectStyles(ctx);

      return ctx.defaultGetInitialProps(ctx);
    }

    render() {
      return (
        <Html>
          <Head>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />

            <script
              src={`https://kit.fontawesome.com/${config.fontAwesome?.kitCode}.js`}
              crossOrigin="anonymous"
              data-auto-replace-svg="nest"
            ></script>
          </Head>

          <body>
            {/* <InitTheme /> */}
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  };
}
