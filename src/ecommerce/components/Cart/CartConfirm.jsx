import { CheckCircleRounded } from '@mui/icons-material'
import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'

export const CartConfirm = ( { shopId, items, subtotal, discountPrice } ) => {
  return (
    <>
        <Grid item xs = { 12 } align = 'center'>
            <CheckCircleRounded 
                className='success-advice'
                sx = {{
                    fontSize: 90,
                    display: 'block'
                }}/>
        </Grid>
        <Grid item xs = { 12 } align = 'center'>
            <Typography variant = 'h5' sx = {{ display: 'block', mt: 3 }} className='success-advice'>Tu compra se ha efectuado con éxito</Typography>
            <Typography variant = 'h5' sx = {{ display: 'block', mt: 1 }} className='success-advice'>ID: <strong>{ shopId }</strong></Typography>
        </Grid>
        <Grid item xs = { 12 } align = 'center' sx = {{ mt: 8 }}>
            <Typography variant = 'h6'>Aquí está el resumen de tu compra</Typography>
            <Typography variant = 'body2'>Debes comunicarte con los vendedores para coordinar el pago</Typography>
        </Grid>
        <Grid container xs = { 12 } sx = {{ mt: 8 }}>
            <Grid item sm = { 7 }>
                <Card variant="outlined" 
                    sx = {{ width: '100%',
                            p: 3,
                            mr: 3,
                            mb: 5 }}>
                    <Grid item xs = { 12 }>
                        <Typography variant = 'h5' sx = {{ fontSize: 28 }}>Productos</Typography>
                        <hr/>
                    </Grid>
                    {
                        items.map(
                            item => (
                                <CartItem product = { item } step = { 2 }/>
                            )
                        )
                    }

                </Card>
            </Grid>
            <Grid item sm = { 5 }>
                {/* <Card variant="outlined" 
                    sx = {{ width: '100%',
                            p: 3,
                            ml: 3 }}>
                    
                </Card> */}
                <CartSummary step = { 2 } subtotal = { subtotal } discountPrice = { discountPrice } />
            </Grid>
        </Grid>
    </>
  )
}
