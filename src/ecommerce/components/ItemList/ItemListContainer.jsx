import React, { useEffect, useState, memo } from 'react'
import { ItemList } from './ItemList'
import { Grid, Typography } from '@mui/material'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Notiflix from 'notiflix';

export const ItemListContainer = memo(( { title } ) => {
  const [ products, setProducts ] = useState([]);

  useEffect( 
    () => {
      Notiflix.Loading.hourglass('Obteniendo datos, por favor espere...', {
        svgColor: '#FF9900'
      });
      const db = getFirestore();
      const queryAllProducts = collection(db, 'products');
      const outStandingProducts = query( queryAllProducts, where( 'outstanding', '==', 1 ) );
      getDocs( outStandingProducts )
        .then( result => {
          setProducts( result.docs.map( 
                                    product => ( 
                                        { id: product.id, ...product.data() } 
                                      ) 
                                    ));
        } )
        .catch( error => Notiflix.Notify.failure( error.message ))
        .finally(
          () => {
            Notiflix.Loading.remove();
          }
        )
    }, []
   );

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
});
