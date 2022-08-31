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
import { CartClientForm } from './CartClientForm'
import { generalSettings } from '../../../helpers'
import { CartConfirm } from './CartConfirm'

export const CartContainer = () => {

  const [ subtotal, setSubtotal ] = useState(0);
  const [ discountPrice, setDiscountPrice ] = useState(0);

  const { cartItems, lastUpdate, discount, step, changeStep, clear } = useCartContext();

  const [ items, setItems ] = useState( localStorage.getItem( 'items' ) ? JSON.parse( localStorage.getItem( 'items' ) ) : [] );

  const [shopId, setShopId] = useState( localStorage.getItem( 'shopId' ) ? localStorage.getItem( 'shopId' ) : null );

  const handleSubmitEndShop = () => {
    changeStep( step + 1 );
  }


  const handleGoToPay = ( buyer ) => {
    const { name, lastname, phone, email, confirmEmail, conditionsAccepted } = buyer;
    const regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if( name === '' ){
      Notiflix.Notify.failure('Debes completar el nombre para seguir', generalSettings);
      return;
    }
    if( lastname === '' ){
      Notiflix.Notify.failure('Debes completar el apellido para seguir', generalSettings);
      return;
    }
    if( phone === '' ){
      Notiflix.Notify.failure('Debes completar número de teléfono para seguir', generalSettings);
      return;
    }
    if( email === '' ){
      Notiflix.Notify.failure('Debes completar el e-mail para seguir', generalSettings);
      return;
    }
    if( confirmEmail === '' ){
      Notiflix.Notify.failure('Debes completar la confirmación de e-mail para seguir', generalSettings);
      return;
    }
    if( !regex.test( email ) ){
      Notiflix.Notify.failure('El formato del e-mail es incorrecto', generalSettings);
      return;
    }
    if( !regex.test( confirmEmail ) ){
      Notiflix.Notify.failure('El formato de la confirmación del e-mail es incorrecto', generalSettings);
      return;
    }
    if( email !== confirmEmail ){
      Notiflix.Notify.failure('El e-mail y su confirmación no coinciden', generalSettings);
      return;
    }
    if( !conditionsAccepted ){
      Notiflix.Notify.failure('Debes aceptar los términos y condiciones para continuar', generalSettings);
      return;
    }
    
    Notiflix.Loading.hourglass('Finalizando compra', {
      svgColor: '#FF9900'
    });
    
    const order = {
      buyer,
      date: new Date(),
      total: subtotal - discountPrice
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
    );

    const db = getFirestore();
    const queryOrders = collection(db, 'orders');
    addDoc(queryOrders, order)
      .then( resp => {
        setShopId( resp.id );
        setItems( cartItems );
        localStorage.setItem( 'shopId', resp.id );
        localStorage.setItem( 'items', JSON.stringify( cartItems ) );
        clear();
        changeStep( step + 1 );
        Notiflix.Loading.remove();
      } );
  }

  useEffect(
    () => {
      if( cartItems.length > 0 )
        calculateTotal();
    },
    [ lastUpdate ]
  );

  const calculateTotal = () => {
    let subtotal = 0;
    cartItems.forEach(
      item => subtotal += ( item.item.price * item.quantity )
    );
    setSubtotal( subtotal );
    setDiscountPrice( ( subtotal * discount ).toFixed(2) );
  }

  const handleGoBackStep = () => {
    changeStep( step - 1 );
  }

  return (
    ( cartItems.length > 0 || step !== 0 ) &&
    ( <>
      <Grid container
            sx = {{
                maxWidth: 1140,
                m: 'auto',
                mt: 5
            }}>
            <Grid item sm = { 5 }>
              <Typography variant = 'h4'>Tu carrito</Typography>
            </Grid>
            <Grid item sm = { 7 }>
              <CartStepper />
            </Grid>
      </Grid>
        {
          step === 0 &&
          <Grid container
            sx = {{ maxWidth: 1140,
                  m: 'auto', 
                  mt: 5 }}>
              <Grid item
                sm = { 8 }>
                  <CartItemsList />
              </Grid>
              <Grid item
                sm = { 4 }>
                  <CartSummary 
                    subtotal = { subtotal }
                    discountPrice = { discountPrice }
                    handleSubmitEndShop = { handleSubmitEndShop }
                    step = { step } />
                  <CartDiscountCoupon />
              </Grid>
            </Grid>
        }
        {
          step === 1 && 
            <Grid container
              sx = {{ maxWidth: 600,
                    m: 'auto',
                    mt: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    height: '100%' }}>
                  <CartClientForm 
                    handleGoBackStep = { handleGoBackStep }
                    handleGoToPay = { handleGoToPay }
                    />
            </Grid>
          
        }
        {
          step === 2 &&
          <Grid container
            sx = {{ maxWidth: 1140,
                  m: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 9 }}>
                <CartConfirm 
                  shopId = { shopId }
                  items = { items }
                  subtotal = { subtotal }
                  discountPrice = { discountPrice } />
          </Grid>
        }
    </> )
    ||
    <CartNoItems />
  )
}
