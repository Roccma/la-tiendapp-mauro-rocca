import React from 'react'
import { Grid } from '@mui/material'
import { ImagesCarousel } from '../ImagesCarousel'
import { ItemText } from './ItemText';
import { ItemOwnerData } from './ItemOwnerData';
import { ItemDues } from './ItemDues';
import { ItemDetailFooter } from './ItemDetailFooter';

export const ItemDetail = ( { product } ) => {
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
