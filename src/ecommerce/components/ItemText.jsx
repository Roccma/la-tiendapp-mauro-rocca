import React, { useState } from 'react'
import { Alert, Grid, Snackbar, Typography } from '@mui/material'
import { ItemCount } from './ItemCount';

export const ItemText = ( { name, description, category, price, stock } ) => {

  const [ quantity, setQuantity ] = useState( 1 );
  const [ open, setOpen ] = useState( false );
  
  const avaibalityText = stock > 1 ? 'disponibles' : 'disponible';
  

  const onAdd = ( quantitySelected ) => {
    setQuantity( quantitySelected );
    setOpen( !open );
  }

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
            initial = { quantity }
            onAdd = { onAdd }/>       
        <Snackbar open={open} autoHideDuration={5000} onClose= { () => { setOpen( !open ) } }>
            <Alert onClose={ () => { setOpen( !open ) } } 
                    severity="success" sx={{ width: '100%' }}>
                Has agregado { quantity } item{ quantity > 1 && 's' || '' } al carrito!
            </Alert>
        </Snackbar>     
    </>
  )
}
