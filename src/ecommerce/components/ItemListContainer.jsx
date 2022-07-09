import { Grid, Typography } from '@mui/material'
import React from 'react'

export const ItemListContainer = ( { greeting } ) => {
  return (
    <Grid container>
        <Grid item
          xs = {12}>
          <Typography 
            variant = 'h3'
            align='center'
            sx = {{ mt: 3 }}>
              { greeting }
          </Typography>
        </Grid>
    </Grid>
  )
}
