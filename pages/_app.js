import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-WRLBHML',
      dataLayer: {
        pageTitle: document.title,
      },
    };

    if (window.location.origin === 'https://web.tech.beegin.com.br') {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/shared.jpg" />
        <meta name="twitter:image" content="/shared.jpg" />

        <meta property="og:site_name" content="beegin.tech" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="600" />
        <link rel="icon" href="/logolaranja.svg" />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Muli"
        />

        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRLBHML"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default MyApp;
