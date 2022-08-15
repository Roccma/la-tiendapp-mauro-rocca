import React from 'react'
import { Card, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ArrowForwardIosRounded } from '@mui/icons-material'

export const CartDiscountCoupon = () => {
  return (
    <Card variant="outlined" 
            sx = {{ width: '100%',
                    p: 3,
                    ml: 3,
                    mt: 3,
                    mb: 5 }}>
          <Typography variant = 'h5' sx = {{ fontSize: 28 }}>Cupón de descuento</Typography>
          <hr />
          <Grid container sx = {{ mt: 3 }}>
            <Grid item xs = { 10 }>
                <TextField label="¿Tienes uno? Ingrésalo aquí" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs = { 2 }>
                <IconButton color = 'primary' sx = {{ marginTop: '5px', marginLeft: '15px' }}>
                    <ArrowForwardIosRounded />
                </IconButton>
            </Grid>
          </Grid>
          
    </Card>
  )
}
