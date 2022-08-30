import React, { useState } from 'react'
import { Alert, Grid, Snackbar } from '@mui/material'
import { ImagesCarousel } from '../ImagesCarousel'
import { ItemText } from './ItemText';
import { ItemOwnerData } from './ItemOwnerData';
import { ItemDues } from './ItemDues';
import { ItemDetailFooter } from './ItemDetailFooter';
import { ItemCount } from './ItemCount';
import { ItemContinueShop } from './ItemContinueShop';
import { useCartContext } from '../../../context/CartProvider';
import Notiflix from 'notiflix';
import { generalSettings } from '../../../helpers';

export const ItemDetail = ( { product } ) => {

  const [ quantity, setQuantity ] = useState( 1 );
  // const [ open, setOpen ] = useState( false );
  const [ addedToCart, setAddedToCart ] = useState( false );

  const { addItem } = useCartContext();

  const onAdd = ( quantitySelected ) => {
    if( quantitySelected <= product.stock ){
      setQuantity( quantitySelected );
      //setOpen( !open );
      try{
        addItem( product, quantitySelected );
        setAddedToCart( true );
      }
      catch( error ){
        Notiflix.Notify.failure( error, generalSettings );
      }
    }
  }

  let carouselSettings = {
      showThumbs : false,
      showStatus : true,
      infiniteLoop : false,
      autoPlay : false
    };
  
  if(!product) return <img src = 'https://i.ibb.co/3sY8DGL/error404.png' className='img-not-found'/>;
  
  if( product && product.images.length === 1 ) {
    carouselSettings = {
      ...carouselSettings,
      showStatus: false,
      showIndicators: false
    }
  }
  
  return (
    <>
      <Grid
        container
        sx = {{
            maxWidth: 1280,
            m: 'auto'
        }}>
          <Grid item
            sx = {{
              mt: 5,
              pl: 5
            }}
            sm = {6}>
              <ImagesCarousel 
                  settings = { carouselSettings }
                  images = { product.images }
                  applyStyles = { true }/>
          
          </Grid>
          <Grid item
              sx = {{
                  mt: 5,
                  pl: 5,
                  pr: 5
              }}
              sm = {6}>
              <ItemText 
                  { ...product }/>
              
              { 
                addedToCart  
                && <ItemContinueShop /> 
                || <ItemCount 
                    product = { product }
                    initial = { quantity }
                    onAdd = { onAdd }/> 
              }
          </Grid>
      </Grid>
      <Grid
        container
        sx = {{
            maxWidth: 1280,
            m: 'auto'
        }}>
        <Grid item
            sx = {{
              mt: 3,
              pl: 5
            }}
            sm = {6}>
            <ItemOwnerData owner = { product.owner }/>
        </Grid> 
        <Grid item
            sx = {{
              mt: 3,
              pl: 5,
              pr: 5
            }}
            sm = {6}>
            <ItemDues 
                max_dues={ product.max_dues }
                price = { product.price } />
        </Grid>   
      </Grid>
      <Grid container
        sx = {{
          maxWidth: 1280,
          m: 'auto'
        }}>
        <ItemDetailFooter />
      </Grid>
    </> 
  )
}
