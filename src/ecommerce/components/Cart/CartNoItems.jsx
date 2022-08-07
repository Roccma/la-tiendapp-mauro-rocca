import React from 'react'
import { RemoveShoppingCartRounded, ShoppingBagRounded } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const CartNoItems = () => {

  const navigate = useNavigate();

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
            <Button
              variant="outlined"
              elevation = { 0 }
              sx = {{ boxShadow: 0,
                      width: '100%',
                      mt: 7}}
                      onClick = { () => navigate('/') }>
              <ShoppingBagRounded sx = {{ mr: 2 }}/>Ir a comprar
             </Button>
        </Grid>
    </Grid>
  )
}
