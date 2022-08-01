import React from 'react'
import { CartContainer } from '../components/Cart/CartContainer'
import { EcommerceLayout } from '../layouts/EcommerceLayout'

export const CartPage = () => {
  return (
    <EcommerceLayout>
        <CartContainer />
    </EcommerceLayout>
  )
}
