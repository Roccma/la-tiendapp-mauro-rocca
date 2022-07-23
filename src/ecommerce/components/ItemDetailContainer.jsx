import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState( null );
  const [ loading, setLoading ] = useState( true );

  const { id } = useParams();

  useEffect(
    () => {
      Notiflix.Loading.hourglass('Obteniendo datos, por favor espere...', {
        svgColor: '#FF9900'
      });
      getFetch( parseInt( id ) )
        .then( result => {
          setProduct( result );
        })
        .catch( error => {
          Notiflix.Notify.failure( error.message );
        })
        .finally(
          () => {
            Notiflix.Loading.remove();
            setLoading(false);
          }
        );
      },
    []
  )

  return (
    !loading && <ItemDetail product = { product }/>
  );
}
