import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gift Store - Find a gift for your wife or girlfriend.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
