import React from 'react'
import { Grid } from '@mui/material'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {
  return (
    <Grid
        container
        sx = {{
            maxWidth: 1280,
            m: 'auto'
        }}>
        <ItemDetail />
    </Grid>
    
  )
}
