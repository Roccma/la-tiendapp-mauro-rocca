import React from 'react'
import { Button, Card, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
import { ShoppingBagRounded } from '@mui/icons-material'

export const CartSummary = ( { subtotal, discountPrice, handleSubmitEndShop, step } ) => {

  const title = step === 0 ? 'Resumen' : 'Total a pagar';

  return (
    <Card variant="outlined" 
          sx = {{ width: '100%',
                  p: 3,
                  ml: 3 }}>
          <Typography variant = 'h5'   sx = {{ fontSize: 28 }}>{ title }</Typography>
          <hr />
          <Grid container sx = {{ mt: 3 }}>
            <Grid item xs = {7}>
              <Typography variant = 'body1'>Subtotal</Typography>
            </Grid>
            <Grid item xs = {5} align='end'>
              <Typography variant = 'body1'>$U { subtotal }</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs = {7}>
              <Typography variant = 'body2'>Descuento</Typography>
            </Grid>
            <Grid item xs = {5} align='end' color = '#04a308'>
              <Typography variant = 'body2'>-$U { discountPrice }</Typography>
            </Grid>
          </Grid>
          <Grid container sx = {{ mt: 1 }}>
            <Grid item xs = {7}>
              <Typography variant = 'h6'>Total</Typography>
            </Grid>
            <Grid item xs = {5} align='end'>
              <Typography variant = 'h6'>$U { subtotal - discountPrice }</Typography>
            </Grid>
          </Grid>
          {step === 0 &&
            <Button
                variant="contained"
                elevation = { 0 }
                sx = {{ color: 'white',
                        boxShadow: 0,
                        width: '100%',
                        mt: 4}}
                onClick = { handleSubmitEndShop }>
                <ShoppingBagRounded sx = {{ mr: 2 }}/>Finalizar compra
            </Button>
          } 
    </Card>
  )
}
