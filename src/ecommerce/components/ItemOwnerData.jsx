import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import { ItemOwnerDataTable } from './ItemOwnerDataTable'



export const ItemOwnerData = ( { owner } ) => {
  const { name, avatar, email, facebook, instagram, celular } = owner;
  return (
    <Card variant="outlined" 
          sx = {{p: 3,
                  width: '100%' }}>
        <Typography variant="h6" component="div">
            Información del emprendimiento
        </Typography>
        <Grid container
              sx = {{ mt: 3 }}>
          <Grid item
            xs = { 4 }
            sx = {{ display: 'flex',
                    flexWrap: 'wrap' }}>
              <img src = { avatar }
                  className = 'img-owner' />
              <Typography variant = 'h6'
                          align = 'center'
                          sx = {{ width: '100%',
                                  fontSize: '18px' }}>{ name }</Typography>
          </Grid>
          <Grid item
            xs = { 8 }
            sx = {{ pl: 5 }}>
              <ItemOwnerDataTable 
                email = { email } 
                facebook = { facebook } 
                instagram = { instagram } 
                celular = { celular } />
          </Grid>
        </Grid>
    </Card>
  )
}
