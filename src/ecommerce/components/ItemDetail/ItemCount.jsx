import React, { useState } from 'react'
import { AddShoppingCartRounded } from '@mui/icons-material'
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material'
import { useCartContext } from '../../../context/CartProvider';

export const ItemCount = ({ product, initial, onAdd, page = 'detail', children }) => {

    const [ quantity, setQuantity ] = useState( initial );

    const { addItem } = useCartContext();
    
    const mt = page === 'detail' ? 1 : 0;
    const size = page === 'detail' ? 6 : 12;

    const handleAdd = () => {
        setQuantity( quantity + 1 );

        if( page === 'cart' ){
            try{
                addItem( product, 1 );
            }
            catch( error ){
                Notiflix.Notify.failure( error );
            }
        }
    }

    const handleRemove = () => {
        setQuantity( quantity - 1 );
        
        if( page === 'cart' ){
            try{
                addItem( product, -1 );
            }
            catch( error ){
                Notiflix.Notify.failure( error );
            }
        }
    }

    return (
        <Grid container
            sx = {{ mt: 5 }}
            direction = 'row'>
            
            <Grid item
                sm = { size }
                sx = {{ mt }}>
                { page === 'detail' &&  <Typography sx = {{ fontWeight: 'bold' }} variant = 'subtitle1'>¿Cuántas unidades querés?</Typography> }
                <div className={ product.stock > 0 && 'quantity-enabled' || 'quantity-disabled' }>
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
                        onClick = { handleRemove }>
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
                        disabled = { quantity >= product.stock }
                        onClick = { handleAdd }>
                            +
                    </Button>
                </div>
                <span className = "cart-stock-item">{ children }</span>
            </Grid>
            { page === 'detail' && 
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
                                boxShadow: 0,
                                width: '100%',
                                ml: 3}}
                        disabled = { product.stock < 1 }
                        onClick = { () => onAdd( quantity ) }>
                        <AddShoppingCartRounded sx = {{ mr: 2 }}/>Agregar al carrito
                    </Button>
                    
                </Grid>
            }

        </Grid>
  )
}
