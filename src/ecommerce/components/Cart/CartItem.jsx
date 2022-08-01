import React from 'react'
import { Grid, IconButton, ListItem, Typography } from '@mui/material'
import { DeleteRounded } from '@mui/icons-material'
import { ItemCount } from '../ItemDetail/ItemCount'

export const CartItem = ( { product, removeItem } ) => {
  return (
    <ListItem sx = {{ p: 0, mt: 4 }}>
      <Grid container>
          <Grid item
              xs = { 3 }>
                <img src = { product.item.images[0] } className='cart-img'></img>
          </Grid>
          <Grid item
            xs = { 6 }
            sx = {{ pl: 2 }}>
              <Typography variant = "overline">
                <img src = { product.item.owner.avatar }
                    className='cart-avatar-img' />
                <span className='cart-span-owner'>{ product.item.owner.name }</span>
              </Typography>
              <Typography variant = 'body1'
                          sx = {{
                            fontSize: 24
                          }}>
                          { product.item.name }
              </Typography>
              <ItemCount product = { product.item } initial = { product.quantity } page = 'cart'>
                <span>{ product.item.stock } disponibles</span>
              </ItemCount>
          </Grid>
          <Grid item
            xs = { 3 }
            alignItems = {{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end'
            }}>
              <Typography color = 'primary'
                  sx = {{
                      fontWeight: 'bold',
                      fontSize: 24
                  }}>
                  $U { product.item.price }
              </Typography>
              <IconButton sx = {{ ml: 1 }} onClick = { () => removeItem( product.item.id ) }>
                <DeleteRounded sx = {{ color: '#c5c2c2',
                                        fontSize: 28,
                                        ':hover' : {
                                          cursor: 'pointer',
                                          color: 'red'
                                        } }}/>
              </IconButton>
          </Grid>
      </Grid>
    </ListItem>
  )
}
