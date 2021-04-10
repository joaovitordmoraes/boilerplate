import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate - Next.Js</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, Next.Js and Styled Components."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
