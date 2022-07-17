import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/getFetch';
import { Item } from './Item';

export const ItemList = () => {

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
