import React from 'react'
import { Item } from './Item';

export const ItemList = ( { products } ) => {

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
}
