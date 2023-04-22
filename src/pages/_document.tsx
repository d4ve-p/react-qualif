import { ThemeContext } from '@/lib/theme_context'
import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from 'react'

export default function Document() {
  let theme = useContext(ThemeContext)
  return (
    <Html lang="en">
      <Head />
      <body className={`${theme.pageBackground} overflow-y-auto`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
