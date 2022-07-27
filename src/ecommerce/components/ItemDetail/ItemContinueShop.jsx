import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { ShoppingBagRounded, ShoppingCartCheckoutRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const ItemContinueShop = () => {
  
  const navigate = useNavigate();

  return (
    <Grid container
            sx = {{ mt: 5 }}
            direction = 'row'>
            <Typography sx = {{ fontWeight: 'bold', mt: 1 }} variant = 'subtitle1'>Producto agregado al carrito ¿Qué deseas hacer a continuación?</Typography>
            <Grid item
                sm = {6}
                align='left'
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Button
                    variant="outlined"
                    elevation = { 0 }
                    sx = {{ boxShadow: 0,
                            width: '100%',
                            mr: 3}}
                            onClick = { () => navigate('/') }>
                    <ShoppingBagRounded sx = {{ mr: 2 }}/>Continuar comprando
                </Button>
            </Grid>
            <Grid item
                sm = {6}
                align='right'
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button
                    variant="contained"
                    elevation = { 0 }
                    sx = {{ color: 'white',
                            boxShadow: 0,
                            width: '100%',
                            ml: 3}}
                    onClick = { () => navigate('/cart') }>
                    <ShoppingCartCheckoutRounded sx = {{ mr: 2 }}/>Finalizar compra
                </Button>
                
            </Grid>

        </Grid>
  )
}
