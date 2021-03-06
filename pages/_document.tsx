import { Box, InitTheme, InlineStyles } from '@stoplight/mosaic';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

class CustomDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
          <script
            src="https://kit.fontawesome.com/112906ba2e.js"
            crossOrigin="anonymous"
            data-auto-replace-svg="nest"
          ></script>

          <InlineStyles />
        </Head>

        <Box
          as="body"
          bg="canvas"
          minH="screen"
          fontFamily="ui"
          fontSize="base"
          color="body"
          className="sl-antialiased sl-elements"
        >
          <InitTheme />
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}

export default CustomDocument;
