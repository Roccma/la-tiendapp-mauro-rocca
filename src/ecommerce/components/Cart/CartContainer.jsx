import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { CartItemsList } from './CartItemsList'
import { CartSummary } from './CartSummary'
import { CartNoItems } from './CartNoItems'
import { CartStepper } from './CartStepper'
import { CartDiscountCoupon } from './CartDiscountCoupon'
import { useCartContext } from '../../../context/CartProvider'

export const CartContainer = () => {

  const [ total, setTotal ] = useState(0);

  const { cartItems, lastUpdate } = useCartContext();

  useEffect(
    () => {
      calculateTotal();
    },
    [ lastUpdate ]
  );

  const calculateTotal = () => {
    let subtotal = 0;
    cartItems.forEach(
      item => subtotal += ( item.item.price * item.quantity )
    );
    setTotal( subtotal );
  }

  return (
    cartItems.length > 0 &&
    ( <>
      <Grid container
            sx = {{
                maxWidth: 1140,
                m: 'auto',
                mt: 5,
                mb: 5
            }}>
            <Grid item sm = { 5 }>
              <Typography variant = 'h4'>Tu carrito</Typography>
            </Grid>
            <Grid item sm = { 7 }>
              <CartStepper />
            </Grid>
      </Grid>
      <Grid container
        sx = {{ maxWidth: 1140,
                m: 'auto' }}>
        <Grid item
          sm = { 8 }>
            <CartItemsList />
        </Grid>
        <Grid item
          sm = { 4 }>
            <CartSummary total = { total }/>
            <CartDiscountCoupon />
        </Grid>
      </Grid> 
    </> )
    ||
    <CartNoItems />
  )
}
