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
        <link rel="icon" href="/logolaranja.svg" />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Muli"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
