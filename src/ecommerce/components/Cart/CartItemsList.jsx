import React from 'react'
import { Button, Card, Grid, List, Typography } from '@mui/material'
import { CartItem } from './CartItem'
import { useCartContext } from '../../../context/CartProvider'
import { DeleteSweepRounded } from '@mui/icons-material'

export const CartItemsList = () => {

  const { cartItems, removeItem, clear, step } = useCartContext();
  return (
    <Card variant="outlined" 
          sx = {{ width: '100%',
                  p: 3,
                  mr: 3 }}>
          <Grid container>
            <Grid item xs = { 10 }>
              <Typography variant = 'h5' sx = {{ fontSize: 28 }}>Productos</Typography>
            </Grid>
            <Grid item xs = { 2 } align = 'end'>
              <Button variant='text' 
                      color='error' 
                      onClick = { clear }
                      sx = {{ position: 'relative', 
                              right: 0, 
                              fontSize: 16 }}>
                <DeleteSweepRounded sx = {{ position: 'relative', 
                                            mr: 1, 
                                            bottom: '2px' }}/> Vaciar
              </Button>
            </Grid>
          </Grid>
          <hr />
          <List>
            { 
              cartItems.map(
                product => (
                  <CartItem key = { product.item.id } product = { product } removeItem = { removeItem } step = { step }/>
                )
              )
            }
            
          </List>
    </Card>
  )
}
