import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

export const MainTheme = ( {children} ) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
