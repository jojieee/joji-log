import GlobalStyle from '@/src/styles/GlobalStyle'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/src/styles/theme'
import LayoutMain from '../src/components/Layout/LayoutMain/LayoutMain'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>조지의 블로그</title>
        <meta name='description' content='joji blog' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='public/favicon.ico' />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <LayoutMain>
          <Component {...pageProps} />
        </LayoutMain>
      </ThemeProvider>
    </>
  )
}
