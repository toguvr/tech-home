import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="beegin.tech" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="600" />
        <link rel="icon" href="/logolaranja.svg" />
        <link rel="canonical" href="https://tech.beegin.com.br/"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Muli"
        />
        {/* <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WRLBHML');
  </script> */}
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
