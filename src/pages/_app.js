import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
