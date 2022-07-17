import React, { useState } from 'react'
import { AddShoppingCartRounded } from '@mui/icons-material'
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [ quantity, setQuantity ] = useState( initial );
    
    return (
        <Grid container
            sx = {{ mt: 5 }}
            direction = 'row'>
            
            <Grid item
                sm = {6}
                sx = {{ mt: 1 }}>
                <Typography sx = {{
                   fontWeight: 'bold'  
               }} 
               variant = 'subtitle1'>¿Cuántas unidades querés?</Typography>
                <div className={ stock > 0 && 'quantity-enabled' || 'quantity-disabled' }>
                    <Button
                        variant="contained"
                        elevation = { 0 }
                        sx = {{ color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                                border: 0,
                                p: 2,
                                maxWidth: '30px', 
                                maxHeight: '30px', 
                                minWidth: '30px', 
                                minHeight: '30px',
                                boxShadow: 0}}
                        disabled = { quantity < 2 }
                        onClick = { () => { setQuantity( quantity - 1 ) } }>
                            -
                    </Button>
                    <span className='item-quantity'>{ quantity }</span>
                    <Button
                        variant="contained"
                        elevation = { 0 }
                        sx = {{ color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold',
                                border: 0,
                                p: 2,
                                maxWidth: '30px', 
                                maxHeight: '30px', 
                                minWidth: '30px', 
                                minHeight: '30px',
                                boxShadow: 0}}
                        disabled = { quantity >= stock }
                        onClick = { () => setQuantity( quantity + 1 ) }>
                            +
                    </Button>
                </div>
            </Grid>
            <Grid item
                sm = {6}
                align='right'
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end">
                <Button
                    variant="contained"
                    elevation = { 0 }
                    sx = {{ color: 'white',
                            boxShadow: 0}}
                    disabled = { stock < 1 }
                    onClick = { () => onAdd( quantity ) }>
                    <AddShoppingCartRounded sx = {{ mr: 2 }}/>Agregar al carrito
                </Button>
                
            </Grid>

        </Grid>
  )
}
