import React, { useState } from 'react'
import { Alert, Grid, Snackbar } from '@mui/material'
import { ImagesCarousel } from '../ImagesCarousel'
import { ItemText } from './ItemText';
import { ItemOwnerData } from './ItemOwnerData';
import { ItemDues } from './ItemDues';
import { ItemDetailFooter } from './ItemDetailFooter';
import { ItemCount } from './ItemCount';
import { ItemContinueShop } from './ItemContinueShop';

export const ItemDetail = ( { product } ) => {

  const [ quantity, setQuantity ] = useState( 1 );
  const [ open, setOpen ] = useState( false );
  const [ addedToCart, setAddedToCart ] = useState( false );

  const onAdd = ( quantitySelected ) => {
    if( quantitySelected <= product.stock ){
      setQuantity( quantitySelected );
      setOpen( !open );
      setAddedToCart( true );
    }
  }

  let carouselSettings = {
      showThumbs : false,
      showStatus : true,
      infiniteLoop : false,
      autoPlay : false
    };
  
  if(!product) return <img src = '/assets/error404.png' className='img-not-found'/>;
  
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
                    stock = { product.stock }
                    initial = { quantity }
                    onAdd = { onAdd }/> 
              }
              
              <Snackbar open={open} autoHideDuration={5000} onClose= { () => { setOpen( !open ) } }>
                  <Alert onClose={ () => { setOpen( !open ) } } 
                          severity="success" sx={{ width: '100%' }}>
                      Has agregado { quantity } item{ quantity > 1 && 's' || '' } al carrito!
                  </Alert>
              </Snackbar> 
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
