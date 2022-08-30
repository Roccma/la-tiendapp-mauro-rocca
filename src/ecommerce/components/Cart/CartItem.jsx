import React from 'react'
import { Grid, IconButton, ListItem, Typography } from '@mui/material'
import { DeleteRounded } from '@mui/icons-material'
import { ItemCount } from '../ItemDetail/ItemCount'

export const CartItem = ( { product, removeItem, step } ) => {
  const alignItems = step === 0 ? 'center' : 'top';
  const imgClassName = step === 0 ? 'cart-img' : 'cart-img-summary';
  return (
    <ListItem sx = {{ p: 0, mt: 4 }}>
      <Grid container>
          <Grid item
              xs = { 3 }>
                <img src = { product.item.images[0] } className={ imgClassName }></img>
          </Grid>
          <Grid item
            xs = { 6 }
            sx = {{ pl: 2 }}>  
              { step === 0 && 
                <Typography variant = "overline">
                  <img src = { product.item.owner.avatar }
                      className='cart-avatar-img' />
                  <span className='cart-span-owner'>{ product.item.owner.name }</span>
                </Typography>
              }
              <Typography variant = 'body1'
                          sx = {{
                            fontSize: 24
                          }}>
                          {
                            step === 2 &&
                            <small className='item-quantity-step-2'>{ product.quantity } x </small>
                          }
                          { product.item.name }
              </Typography>
              { step === 0 && 
                <ItemCount product = { product.item } initial = { product.quantity } page = 'cart'>
                  <span>{ product.item.stock } disponibles</span>
                </ItemCount>
              }
              { step === 2 &&
                <>
                  <Typography variant = "overline">
                    <img src = { product.item.owner.avatar }
                        className='cart-avatar-img mt-15' />
                    <span className='cart-span-owner mt-15'>{ product.item.owner.name }</span>
                  </Typography>
                  <Typography variant = 'body2' sx = {{ mb: 3 }}>
                    <strong>Celular:</strong> { product.item.owner.celular }
                    <br/><strong>E-mail:</strong> { product.item.owner.email }
                    <br/><strong>Instagram:</strong> { product.item.owner.instagram }
                    <br/><strong>Facebook:</strong> { product.item.owner.facebook }
                  </Typography>
                </>
              }
              
          </Grid>
          <Grid item
            xs = { 3 }
            sx = {{
              display: 'flex',
              alignItems,
              justifyContent: 'end'
            }}>
              <Typography color = 'primary'
                  sx = {{
                      fontWeight: 'bold',
                      fontSize: 24
                  }}>
                  $U { product.item.price * product.quantity }
              </Typography>
              {
                step === 0 &&
                <IconButton sx = {{ ml: 1 }} onClick = { () => removeItem( product.item.id ) }>
                  <DeleteRounded sx = {{ color: '#c5c2c2',
                                          fontSize: 28,
                                          ':hover' : {
                                            cursor: 'pointer',
                                            color: 'red'
                                          } }}/>
                </IconButton>
              }
          </Grid>
      </Grid>
    </ListItem>
  )
}
