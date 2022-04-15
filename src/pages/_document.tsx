import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { createStitches } from '@stitches/react';

export const { getCssText } = createStitches();

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
