import { tw } from '@stoplight/mosaic';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import { createElement, Fragment } from 'react';
import { extract } from 'twind';

export const injectStyles = (
  ctx: DocumentContext & {
    defaultGetInitialProps: (ctx: DocumentContext, options?: { nonce?: string }) => Promise<DocumentInitialProps>;
  },
) => {
  const defaultGetInitialProps = ctx.defaultGetInitialProps.bind(ctx);

  ctx.defaultGetInitialProps = async (ctx, options: { nonce?: string } = {}) => {
    const props = await defaultGetInitialProps(ctx, options);

    const { html, css } = extract(props.html, tw);

    const styles = createElement(
      Fragment,
      null,
      createElement('style', {
        'data-twind': '',
        nonce: options.nonce,
        dangerouslySetInnerHTML: {
          __html: css,
        },
      }),
      props.styles,
    );

    return { ...props, html, styles };
  };
};
