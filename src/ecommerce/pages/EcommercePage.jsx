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
    'assets/slider_1_small.png',
    'assets/slider_2_small.png',
    'assets/slider_3_small.png'
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
          <ItemListContainer title = "Los más comprados" />
        </Grid>
    </EcommerceLayout>
  )
}
