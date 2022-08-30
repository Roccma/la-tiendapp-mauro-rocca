import React, { useState, useEffect } from 'react'
import { Card, FormControlLabel, Radio, Checkbox, Typography, RadioGroup, Button, Fab } from '@mui/material'
import { getCategories, getPriceFilters } from '../../../helpers';
import { FilterAltRounded, PlaylistAddCheckRounded } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

export const CatalogFilters = ( { categories, pricesOptions, selectedPrice, handleChangeCategories, handleChangePrice, onApply, updated } ) => {  
    
  useEffect(
    () => {
        renderCategories();
    }, [updated]
  )

  const renderCategories = () => {
    return categories.map(
        category => (
            <FormControlLabel
                control={<Checkbox />} 
                label={ category.name }  
                key = { category.id }
                name = { category.id.toString() }
                checked = { category.checked }
                onChange = { () => handleChangeCategories( category.id ) }
                sx = {{ display: 'block' }}/>
        )
    )
  }

  return (
    
    (<Card variant="outlined"
        sx = {{ height: '85vh',
                mt: 5,
                mb: 5,
                mr: 5,
                p: 3,
                position: 'absolute',
                width: '350px',
                overflowY: 'auto' }}>
        <Typography variant = 'h6' color = 'primary'><FilterAltRounded sx = {{ position: 'relative', top: '4px' }}/> Filtros</Typography>
        <hr />
        <Typography variant = 'subtitle1' sx = {{ fontWeight: 'bold', mt: 4, mb: 2 }}>Categorías</Typography>
        { renderCategories() }
        <Typography 
            variant = 'subtitle1' 
            sx = {{ fontWeight: 'bold', 
                    mt: 4, 
                    mb: 2 }}>
                    Precio
        </Typography>
        <RadioGroup
            value={ selectedPrice }
            name="price"
        >  
        {
            pricesOptions.map(
                price => (
                    <FormControlLabel 
                        value={ price.id } 
                        control={<Radio />} 
                        label={ price.name } 
                        key = {price.id}
                        onClick = { () => handleChangePrice( price.id ) } />
                )
            )
        }
        </RadioGroup>
        <Fab 
            variant="extended" 
            color="primary" 
            sx = {{ color: 'white', 
                    boxShadox: 'none',
                    bottom: '16px',
                    right: '16px',
                    position: 'absolute' }}
            className = 'fab-filters'
            onClick = { () => onApply( categories, selectedPrice ) }>
            <PlaylistAddCheckRounded sx={{ mr: 1 }} />
            Aplicar
        </Fab>
    </Card>)
  )
}
