import { List, ListItem } from '@mui/material'
import React from 'react'
import { Item } from '../ItemList/Item'

export const CatalogList = ({ products }) => {
  return (
    products &&
    <List className = 'catalog-list'>
        {
            products.map(
                product => (
                    <ListItem key = { product.id }>
                        <Item { ...product } type = 'long' />
                    </ListItem>
                )
            )
        }
    </List>
  )
}
