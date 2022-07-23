import React from 'react'
import { Badge, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { getCategoryIcon } from '../../helpers/getCategoryIcon'
import { getCategoryName } from '../../helpers/getCategoryName'

export const Item = ( { id, name, price, stock, category, images } ) => {
  return (
    <Card sx={{ width: 370, 
                m: 3,
                ':hover': {
                  boxShadow: 10,
                  cursor:"pointer"
                } }}>
      <CardMedia
        component="img"
        height="200"
        width="345"
        image={ images[0] }
        sx = {{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant='overline' color='secondary'>
        { getCategoryIcon( category ) } { getCategoryName( category ) } 
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx = {{ fontSize: 22 }}>
          {name}
        </Typography>
        { 
          stock > 0 &&
          (<Typography variant="body2" color="text.secondary">
            { stock } item{ stock > 1 ? 's' : '' } disponible{ stock > 1 ? 's' : '' }
          </Typography>)
          ||
          (<Typography variant="body2" color="text.secondary">
            Sin stock disponible
          </Typography>)
        }
        <Typography color = 'primary'
            sx = {{
                mt: 3,
                fontWeight: 'bold',
                fontSize: 22
            }}
            align='right'>
            $U { price }
        </Typography>
      </CardContent>
    </Card>
  )
}
