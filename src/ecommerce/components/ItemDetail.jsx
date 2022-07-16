import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ImagesCarousel } from './ImagesCarousel'
import { ItemText } from './ItemText';

export const ItemDetail = () => {
    const carouselSettings = {
        showThumbs : false,
        showStatus : false,
        infiniteLoop : false,
        autoPlay : false
      };
      
    const images = [
      '/assets/pizza_1.png',
      '/assets/pizza_2.jpg',
      '/assets/pizza_3.jpg',
      '/assets/pizza_4.jfif'
    ];

    const itemText = {
        name :  "Pizza ba-con-chedar",
        description : "Porque la creatividad está a la orden del día. La mejor pizza con Bacon (Panceta para los que no saben english) y Queso cheddar que vas a encontrar! Dejate de joder con restaurantes finos, pedinos que encima te la llevamos al toque y disfrutás de una rica pizza! Qué más querés?",
        category : 'Comida',
        price: 350,
        stock: 5
    };
    
  return (
    <>
        <Grid item
        sx = {{
            mt: 5
        }}
        sm = {6}>
            <ImagesCarousel 
                settings = { carouselSettings }
                images = { images }
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
                {...itemText}/>
        </Grid>
    </>
    
  )
}
