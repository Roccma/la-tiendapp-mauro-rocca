import React from 'react'
import { Badge, IconButton } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../../context/CartProvider'

export const CartWidget = ( { quantity } ) => {

  const navigate = useNavigate();

  const { changeStep } = useCartContext();

  const handleClick = () => {
    changeStep( 0 );
    navigate('/cart');
  }

  return (
    <IconButton onClick = { handleClick }>
      <Badge
        badgeContent={ quantity } 
        color="error">
        <ShoppingCartRounded sx = {{ color: 'white' }}/>
      </Badge>
    </IconButton>
  )
}
