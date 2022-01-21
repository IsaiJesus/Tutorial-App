import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from 'components/Layout';
import { SearchProvider } from 'context/SearchContext';

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap" rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet"
            integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}

export default MyApp;
