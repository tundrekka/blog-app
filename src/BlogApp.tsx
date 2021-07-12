import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'theme/GlobalStyle'
import { getTheme } from 'theme/theme'
import { AppRouter } from 'router/AppRouter'
import { useState } from 'react'
import { useEffect } from 'react'
export const BlogApp: React.FC = () => {
   const [themeMode, setThemeMode] = useState<string>('dark')

   useEffect(() => {
      if (localStorage.getItem('themeMode')) {
         const theme = localStorage.getItem('themeMode') || 'dark'
         setThemeMode( theme )
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('themeMode', themeMode)
   }, [themeMode])

   return (
      <ThemeProvider theme={() => getTheme(themeMode)}>
         <GlobalStyle />
         <AppRouter setThemeMode={setThemeMode} />
      </ThemeProvider>
   )
}
