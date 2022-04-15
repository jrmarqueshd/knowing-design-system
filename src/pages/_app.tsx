import Head from 'next/head';
import { useEffect } from 'react';
import globalStyles from 'styles/global';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <>
      <Head>
        <title>Stitches is awesome</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
