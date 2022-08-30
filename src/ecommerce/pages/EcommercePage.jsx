import React from 'react'
import { Grid } from '@mui/material'
import { ImagesCarousel } from '../components'
import { ItemListContainer } from '../components'
import { EcommerceLayout } from '../layouts/EcommerceLayout'

export const EcommercePage = () => {
  const carouselSettings = {
    showThumbs : false,
    showStatus : false,
    infiniteLoop : true,
    interval : 5000,
    autoPlay : true
  };
  
  const images = [
    'https://i.ibb.co/bzCb5pf/slider-1-small.png',
    'https://i.ibb.co/BcQJgzn/slider-2-small.png',
    'https://i.ibb.co/nwsrjkH/slider-3-small.png'
  ];

  return (
    <EcommerceLayout>
        <ImagesCarousel settings={ carouselSettings } images = { images } />
        <Grid
        container
        sx = {{
            maxWidth: 1280,
            m: 'auto',
            mt: 5
        }}>
          <ItemListContainer title = "Los destacados" />
        </Grid>
    </EcommerceLayout>
  )
}
