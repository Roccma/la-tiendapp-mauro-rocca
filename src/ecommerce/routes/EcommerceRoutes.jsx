import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { EcommercePage } from '../pages/EcommercePage'
import { ItemPage } from '../pages/ItemPage'

export const EcommerceRoutes = () => {
  return (
    <Routes>
        <Route path = '/' element = { <EcommercePage /> }/>
        <Route path = 'item/:id' element = { <ItemPage /> }/>
        <Route path = '*' element = { <Navigate to = '/' /> }/>
    </Routes>
  )
}
