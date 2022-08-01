import { useContext, useState } from "react";
import { CartContext } from "./CartContext"

export const useCartContext = () => useContext( CartContext );

export const CartProvider = ({ children }) => {
  const [ step, setStep ] = useState(0);
  const [ cartItems, setCartItems ] = useState([]);
  const [ lastUpdate, setLastUpdate ] = useState(Date());
  const [ discount, setDiscount ] = useState(0);

  const coupons = [
    {
      name: 'mauro15',
      discount: 0.15
    },
    {
      name: 'mauro50',
      discount: 0.5
    },
    {
      name: 'mauro100',
      discount: 0
    }
  ]
  
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
        setLastUpdate( Date() );
      }
      else{
        throw 'La cantidad solicitada del producto es mayor al stock'
      }
    }
    else{

      setCartItems([
        ...cartItems,
        {
          item,
          quantity
        }
      ]);
      setLastUpdate( Date() );
    }
  }

  const removeItem = ( id ) => {
    setCartItems( filterWithoutItem( id ) );
    setLastUpdate( Date() );
  }

  const clear = () => {
    setCartItems([]);
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

  return (
    <CartContext.Provider value = {{ cartItems,
                                     lastUpdate,
                                     addItem,
                                     removeItem,
                                     clear,
                                     isInCart }}>
        { children }
    </CartContext.Provider>
  )
}
