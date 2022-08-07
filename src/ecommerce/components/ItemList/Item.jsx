import React, { memo } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { getCategoryIcon, getCategoryName } from '../../../helpers'
import { useNavigate } from 'react-router-dom'

export const Item = memo( ( { id, name, price, stock, category, images, type = 'card' } ) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${ id }`);
  }

  stock = parseInt( stock );

  return (
    type === 'card' &&
      ( <Card sx={{ width: 370, 
                  m: 3,
                  ':hover': {
                    boxShadow: 10,
                    cursor:"pointer"
                  } }}
            onClick = { handleClick }>
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
      </Card> )
    ||
    ( <Card sx={{ width: '100%', 
                mt: 3,
                ':hover': {
                  boxShadow: 10,
                  cursor:"pointer"
                } }}
                onClick = { handleClick }>
        <CardMedia
            component="img"
            sx={{ width: '30%',
                  height: 175,
                  display: 'inline-block',
                  float:'left' }}
            image={ images[0] }
          />
        <CardContent sx={{ display: 'inline-block', float:'left', width: '70%'}}>
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
                  fontWeight: 'bold',
                  fontSize: 22,
                  display: 'inline',
                  float: 'right'
              }}>
              $U { price }
          </Typography>
        </CardContent>
      </Card> )
  )
});
