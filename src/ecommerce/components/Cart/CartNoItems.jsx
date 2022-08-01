import React from 'react'
import { RemoveShoppingCartRounded } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const CartNoItems = () => {
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
            <RemoveShoppingCartRounded color = 'primary' sx = {{ fontSize: 120, mb: 3 }}/>
        </Grid>
        <Grid item xs = { 12 }>
            <Typography color = 'primary' variant = 'h4' align = 'center'>Sin resultados</Typography>
            <Typography color = 'primary' variant = 'h5' align = 'center'>No tienes productos en tu carrito</Typography>
        </Grid>
    </Grid>
  )
}
