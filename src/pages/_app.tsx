import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import client from "@/apollo-client"
import {themes, ThemeContext} from '@/lib/theme_context'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.dark);
  
  function toggleTheme() {
    console.log("a");
    if(theme === themes.dark) setTheme(themes.light)
    else setTheme(themes.dark);
  }
  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ApolloProvider>
  )
}
