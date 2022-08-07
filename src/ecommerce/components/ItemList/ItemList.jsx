import React, { memo } from 'react'
import { Item } from './Item';

export const ItemList = memo( ( { products } ) => {

  return (
    <>
      {
        products.map(
          product => (
            <Item { ...product } key = { product.id }/>
          )
        )
      }
    </>
  )
});
