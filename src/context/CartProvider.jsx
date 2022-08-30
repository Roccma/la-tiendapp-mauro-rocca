import { useContext, useState } from "react";
import { CartContext } from "./CartContext"

export const useCartContext = () => useContext( CartContext );

export const CartProvider = ({ children }) => {
  const [ step, setStep ] = useState( localStorage.getItem( 'step' ) ? JSON.parse( localStorage.getItem( 'step' ) ) : 0 );
  const [ cartItems, setCartItems ] = useState( localStorage.getItem( 'cartItems' ) ? JSON.parse( localStorage.getItem( 'cartItems' ) ) : [] );
  const [ lastUpdate, setLastUpdate ] = useState(Date());
  const [ discount, setDiscount ] = useState( localStorage.getItem( 'discount' ) ? JSON.parse( localStorage.getItem( 'discount' ) ) : 0 );
  
  const addItem = ( item, quantity ) => {

    if( isInCart( item.id ) ){
      
      const actualItem = findItem( item.id );
      
      const quantityAux = actualItem.quantity + quantity;

      if( quantityAux < 1 ){
        throw 'La cantidad solicitada no puede ser menor a 1 unidad'
      }
      else if( quantityAux <= actualItem.item.stock ){
        
        actualItem.quantity = quantityAux;
        const cartItemsCopy = cartItems;
        
        cartItemsCopy.forEach(
          item => {
            if( item.item.id === actualItem.item.id ){
              item.quantity = actualItem.quantity;
            }
          }
        )
        setCartItems(cartItemsCopy);
        localStorage.setItem( 'cartItems', JSON.stringify( cartItemsCopy ) );
        setLastUpdate( Date() );
      }
      else{
        throw 'La cantidad solicitada del producto es mayor al stock'
      }
    }
    else{

      const newCartItems = [
        ...cartItems,
        {
          item,
          quantity
        }
      ];

      setCartItems( newCartItems );
      localStorage.setItem( 'cartItems', JSON.stringify( newCartItems ) );
      setLastUpdate( Date() );
    }
  }

  const removeItem = ( id ) => {
    const filteredCartItems = filterWithoutItem( id );
    setCartItems( filteredCartItems );
    localStorage.setItem( 'cartItems', JSON.stringify( filteredCartItems ) );
    setLastUpdate( Date() );
  }

  const clear = () => {
    setCartItems([]);
    localStorage.setItem( 'cartItems', JSON.stringify( [] ) );
    setLastUpdate( Date() );
  }

  const isInCart = ( id ) => {
    return findItem( id );
  }

  const findItem = ( id ) => {
    return cartItems.find(
      item => item.item.id === id
    );
  }

  const filterWithoutItem = ( id ) => {
    return cartItems.filter(
      item => item.item.id !== id
    );
  }

  const changeDiscount = ( discountValue ) => {
    setDiscount( discountValue );
    localStorage.setItem( 'discount', JSON.stringify( discountValue ) );
    setLastUpdate( Date() );
  }

  const changeStep = ( newStep ) => {
    setStep( newStep );
    localStorage.setItem( 'step', JSON.stringify( newStep ) );
    setLastUpdate( Date() );
  }

  return (
    <CartContext.Provider value = {{ cartItems,
                                     lastUpdate,
                                     discount,
                                     step,
                                     addItem,
                                     removeItem,
                                     clear,
                                     isInCart,
                                     changeDiscount,
                                     changeStep }}>
        { children }
    </CartContext.Provider>
  )
}
