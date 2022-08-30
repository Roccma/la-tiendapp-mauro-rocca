import React, { useState } from 'react'
import { Card, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ArrowForwardIosRounded } from '@mui/icons-material'
import Notiflix from 'notiflix';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useCartContext } from '../../../context/CartProvider';
import { generalSettings } from '../../../helpers';

export const CartDiscountCoupon = () => {

  const [ coupon, setCoupon ] = useState("");

  const { changeDiscount } = useCartContext();

  const handleClick = () => {
    Notiflix.Loading.hourglass('Verificando cupón', {
      svgColor: '#FF9900'
    });
    const db = getFirestore();
    const queryCoupons = collection(db, 'discount_coupons');
    const selectedCoupon = query( queryCoupons, where( 'name', '==', coupon ) );
    getDocs( selectedCoupon )
        .then( result => {
          if( result.docs.length === 0 ){
            Notiflix.Notify.failure("No se ha encontrado el cupón", generalSettings);
          }
          else{
            Notiflix.Notify.success("Se ha aplicado el cupón", generalSettings);
            changeDiscount( result.docs[0].data().discount );
          }
        } )
        .catch( error => Notiflix.Notify.failure( error.message, generalSettings ))
        .finally(
          () => {
            Notiflix.Loading.remove();
          }
        )
  }

  const handleChange = ( event ) => {
    setCoupon( event.target.value );
  }

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
                <TextField 
                  label="¿Tienes uno? Ingrésalo aquí" 
                  variant="outlined"
                  onChange = { handleChange } 
                  fullWidth/>
            </Grid>
            <Grid item xs = { 2 }>
                <IconButton  
                  color = 'primary' 
                  sx = {{ marginTop: '5px', marginLeft: '15px' }}
                  onClick = { handleClick }>
                    <ArrowForwardIosRounded />
                </IconButton>
            </Grid>
          </Grid>
          
    </Card>
  )
}
