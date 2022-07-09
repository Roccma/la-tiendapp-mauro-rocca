import React from 'react'
import { Badge, IconButton } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'

export const CartWidget = ( { quantity } ) => {
  return (
    <IconButton>
      <Badge
        badgeContent={ quantity } 
        color="error">
        <ShoppingCartRounded sx = {{ color: 'white' }}/>
      </Badge>
    </IconButton>
  )
}
