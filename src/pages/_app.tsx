import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project start to work with Typescript, next and TDD"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
