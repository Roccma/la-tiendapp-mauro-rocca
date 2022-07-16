import React from 'react'
import { Grid, Typography } from '@mui/material'
import { ItemCount } from './ItemCount';

export const ItemText = ( { name, description, category, price, stock } ) => {
  const avaibalityText = stock > 1 ? 'disponibles' : 'disponible';

  return (
    <>  
        <Typography variant = "overline" color = 'secondary'>Emprendimiento de { category }</Typography>
        <h1>{ name }</h1>
        <Typography sx = {{
            textAlign: 'justify'
        }}>{ description }</Typography>
        <Grid container>
            <Grid item
                sm = {6}>
                <Typography color = 'primary'
                    sx = {{
                        mt: 3,
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>
                    $U { price }
                </Typography>
                <Typography variant = "overline" color = 'secondary'>(Pesos uruguayos)</Typography>
            </Grid>
            <Grid item
                sm = {6}>
                <Typography sx = {{
                    mt: 4,
                    fontWeight: 'bold'  
                }} 
                variant = 'subtitle1'
                align = 'right'>Cantidad en stock:</Typography>
                <Typography 
                    align = 'right'
                    color = { stock > 0 && 'black' || 'error' }>
                        { stock > 0 && `${ stock } ${ avaibalityText }` || 'Sin stock actualmente' } 
                </Typography>
            </Grid>
        </Grid>
        <ItemCount 
            stock = { stock }
            initial = { 1 }/>            
    </>
  )
}
