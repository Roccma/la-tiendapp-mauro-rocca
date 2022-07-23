import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { Grid, Typography } from '@mui/material'
import { getFetch } from '../../helpers/getFetch';
import Notiflix from 'notiflix';

export const ItemListContainer = ( { title } ) => {
  const [ products, setProducts ] = useState([]);

  useEffect(
    () => {
      Notiflix.Loading.hourglass('Obteniendo datos, por favor espere...', {
        svgColor: '#FF9900'
      });
      getFetch()
        .then( result => {
          setProducts( result );
        })
        .catch( error => Notiflix.Notify.failure( error.message ))
        .finally(
          () => {
            Notiflix.Loading.remove();
          }
        )
    }, []
  )

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
          <ItemList products = { products } />
        </Grid>
    </Grid>
  )
}
