import React, { useEffect, useState } from 'react'
import { Grid, Box, useEventCallback } from '@mui/material'
import { getCategories, getFetchInCatalog, getPriceFilters } from '../../../helpers';
import { CatalogFilters } from './CatalogFilters'
import Notiflix from 'notiflix';
import { CatalogList } from './CatalogList';
import { useNavigate, useParams } from 'react-router-dom';
import { CatalogNotResults } from './CatalogNotResults';

export const CatalogContainer = () => {
  
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ pricesOptions, setPricesOptions ] = useState([]);
  const [ selectedPrice, setSelectedPrice ] = useState(0);
  const [ updated, setUpdated ] = useState(new Date());
  
  const navigate = useNavigate();

  const { ids, prices } = useParams();

  const includedIds = ids.split(',');

  useEffect(
    () => {
      Notiflix.Loading.hourglass('Obteniendo datos, por favor espere...', {
        svgColor: '#FF9900'
      });
      setSelectedPrice( prices ? prices : 1 );
      const sections = getCategories();
      sections.forEach( section => section.checked = includedIds.includes( section.id.toString() ) );
      setCategories( sections );
      setPricesOptions( getPriceFilters() );
      getFetchInCatalog( ids, prices )
        .then( result => {
          setProducts( result );
        })
        .catch( error => Notiflix.Notify.failure( error.message ))
        .finally(
          () => {
            Notiflix.Loading.remove();
          }
        )
    }, [ids, prices]
  );

  const handleChangeCategories = ( id ) => {
    const cats = categories;
    cats.map(  
        category => {
            if( category.id === id ){
                category.checked = !category.checked;     
            }
        }
    );
    setCategories(cats);
    setUpdated(new Date());
  }

  const handleChangePrice = ( id ) => {
    setSelectedPrice( id );
  }

  const onApply = ( categories, price ) => {
    let categoriesString = '';
    categories.map(
        category => {
            if( category.checked ){
                categoriesString = (categoriesString === '') ? category.id : `${ categoriesString },${ category.id }`;
            }
        }
    )
    if( categoriesString === '' ){
        Notiflix.Notify.failure('No has indicado categoría');
    }
    else{
        navigate(`/category/${ categoriesString }/${ price }`);
    }
  }

  return (
    <Grid container
        sx = {{
            maxWidth: 1140,
            m: 'auto'
        }}>
        <Grid item
            sm = { 4 }>
            <Box sx = {{ position: 'fixed' }}>
                <CatalogFilters 
                    categories = { categories }
                    pricesOptions = { pricesOptions }
                    selectedPrice = { selectedPrice }
                    handleChangeCategories = { handleChangeCategories }
                    handleChangePrice = { handleChangePrice }
                    onApply = { onApply }
                    updated = { updated }/>
            </Box>
        </Grid>
        <Grid item
            sm = { 8 }>
            { products.length > 0 &&
                <CatalogList products = { products } ids = { ids } prices = { prices } /> ||
                <CatalogNotResults />}
            
        </Grid>
    </Grid>
  )
}
