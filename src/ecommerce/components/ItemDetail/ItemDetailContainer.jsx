import React, { useEffect, useState } from 'react'
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';
import { generalSettings, getFetch } from '../../../helpers';
import { ItemDetail } from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState( null );
  const [ loading, setLoading ] = useState( true );

  const { id } = useParams();

  useEffect(
    () => {
      Notiflix.Loading.hourglass('Obteniendo datos, por favor espere...', {
        svgColor: '#FF9900'
      });
      const db = getFirestore();
      const queryProduct = doc(db, 'products', id);
      getDoc( queryProduct )
        .then( result => {
          setProduct( { id: result.id, ...result.data() } )
        } )
        .catch( error => {
          Notiflix.Notify.failure( error.message, generalSettings );
        })
        .finally(
          () => {
            Notiflix.Loading.remove();
            setLoading(false);
          }
        );
      }, [ id ]
  );

  return (
    !loading && <ItemDetail product = { product }/>
  );
}
