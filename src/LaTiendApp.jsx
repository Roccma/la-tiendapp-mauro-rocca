import React from 'react'
import { Typography } from '@mui/material'
import { MainTheme } from './theme/MainTheme'
import { AppRouter } from './router/AppRouter'

export const LaTiendaApp = () => {
  return (
    <>
      <MainTheme>
        <AppRouter />
      </MainTheme>
    </>
  )
}

