import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import client from "@/apollo-client"
import {themes, ThemeContext} from '@/lib/theme_context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={themes.dark}>

      </ThemeContext.Provider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
