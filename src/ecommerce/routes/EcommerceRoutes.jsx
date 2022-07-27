import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CartPage } from '../pages/CartPage'
import { CategoryPage } from '../pages/CategoryPage'
import { EcommercePage } from '../pages/EcommercePage'
import { ItemPage } from '../pages/ItemPage'

export const EcommerceRoutes = () => {
  return (
    <Routes>
        <Route path = '/' element = { <EcommercePage /> }/>
        <Route path = 'item/:id' element = { <ItemPage /> }/>
        <Route path = 'category/:ids' element = { <CategoryPage /> }/>
        <Route path = 'category/:ids/:prices' element = { <CategoryPage /> }/>
        <Route path = 'cart' element = { <CartPage /> }/>
        <Route path = '*' element = { <Navigate to = '/' /> }/>
    </Routes>
  )
}
