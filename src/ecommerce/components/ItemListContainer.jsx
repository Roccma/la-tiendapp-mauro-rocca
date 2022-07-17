import React from 'react'
import { ItemList } from './ItemList'
import { Grid, Typography } from '@mui/material'

export const ItemListContainer = ( { title } ) => {
  return (
    <Grid container>
        <Grid item
          xs = {12}>
          <Typography 
            variant = 'h4'
            sx = {{ mt: 3,
                    fontWeight: 'bold' }}>
              { title }
          </Typography>
        </Grid>
        <Grid item
          sx = {{ display: 'flex', flexWrap: 'wrap' }}>
          <ItemList />
        </Grid>
    </Grid>
  )
}
