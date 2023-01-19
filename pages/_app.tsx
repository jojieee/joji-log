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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&family=Viga&display=swap'
          rel='stylesheet'
        />
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
