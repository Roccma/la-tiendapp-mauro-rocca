import React from 'react'
import { HomeCarousel } from '../components'
import { ItemListContainer } from '../components'
import { EcommerceLayout } from '../layouts/EcommerceLayout'

export const EcommercePage = () => {
  return (
    <EcommerceLayout>
        <HomeCarousel settings={{
          showThumbs : false,
          showStatus : false,
          infiniteLoop : true,
          interval : 5000,
          autoPlay : true
        }}></HomeCarousel>
        <ItemListContainer greeting = "Para negocios despegados" />
    </EcommerceLayout>
  )
}
