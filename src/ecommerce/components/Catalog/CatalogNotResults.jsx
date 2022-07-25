import React from 'react'
import { ManageSearchRounded } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const CatalogNotResults = () => {
  return (
    <Grid
      container
      spacing = {0}
      direction = 'column'
      alignItems= 'center'
      justifyContent= 'center'
      sx = {{ minHeight: 'calc(100vh - 110px)',
              borderRadius: 3}}>
        <Grid item xs = { 12 }>
            <ManageSearchRounded color = 'primary' sx = {{ fontSize: 120, mb: 3 }}/>
        </Grid>
        <Grid item xs = { 12 }>
            <Typography color = 'primary' variant = 'h4' align = 'center'>Sin resultados</Typography>
            <Typography color = 'primary' variant = 'h5' align = 'center'>Prueba cambiando los parámetros de búsqueda</Typography>
        </Grid>
    </Grid>
  )
}
