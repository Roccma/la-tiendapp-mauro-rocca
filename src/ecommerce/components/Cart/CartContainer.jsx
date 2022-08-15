import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { CartItemsList } from './CartItemsList'
import { CartSummary } from './CartSummary'
import { CartNoItems } from './CartNoItems'
import { CartStepper } from './CartStepper'
import { CartDiscountCoupon } from './CartDiscountCoupon'
import { useCartContext } from '../../../context/CartProvider'
import Notiflix from 'notiflix'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

export const CartContainer = () => {

  const [ total, setTotal ] = useState(0);

  const { cartItems, lastUpdate } = useCartContext();

  const [ buyer, setBuyer ] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    confirmEmail: '',
    conditionsAccepted: false
  });

  const [shopId, setShopId] = useState(null);

  const onSubmitEndShop = ( { name, lastname, phone, email, confirmEmail, conditionsAccepted } ) => {
    const regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if( name === '' ){
      Notiflix.Notify.failure('Debes completar el nombre para seguir');
      return;
    }
    if( lastname === '' ){
      Notiflix.Notify.failure('Debes completar el apellido para seguir');
      return;
    }
    if( phone === '' ){
      Notiflix.Notify.failure('Debes completar número de teléfono para seguir');
      return;
    }
    if( email === '' ){
      Notiflix.Notify.failure('Debes completar el e-mail para seguir');
      return;
    }
    if( confirmEmail === '' ){
      Notiflix.Notify.failure('Debes completar la confirmación de e-mail para seguir');
      return;
    }
    if( !regex.test( email ) ){
      Notiflix.Notify.failure('El formato del e-mail es incorrecto');
      return;
    }
    if( !regex.test( confirmEmail ) ){
      Notiflix.Notify.failure('El formato de la confirmación del e-mail es incorrecto');
      return;
    }
    if( email !== confirmEmail ){
      Notiflix.Notify.failure('El e-mail y su confirmación no coinciden');
      return;
    }
    if( !conditionsAccepted ){
      Notiflix.Notify.failure('Debes aceptar los términos y condiciones para continuar');
      return;
    }
    
    Notiflix.Loading.hourglass('Generando usuario', {
      svgColor: '#FF9900'
    });

    const order = {
      buyer,
      date: new Date(),
      total
    };

    order.items = cartItems.map( 
      item => {
        return {
          id: item.item.id,
          name: item.item.name,
          price: item.item.price,
          quantity: item.quantity
        }
      }
    )

    const db = getFirestore();
    const queryOrders = collection(db, 'orders');
    addDoc(queryOrders, order)
      .then( resp => {
        setShopId( resp.id );
        Notiflix.Loading.remove();
      } )
  }

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
              { shopId && <Typography variant='bpdy1' sx = {{ color: 'gray' }}>ID: { shopId }</Typography> }
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
            <CartSummary 
              buyer = { buyer } 
              setBuyer = { setBuyer }
              total = { total }
              onSubmitEndShop = { onSubmitEndShop } />
            <CartDiscountCoupon />
        </Grid>
      </Grid> 
    </> )
    ||
    <CartNoItems />
  )
}
