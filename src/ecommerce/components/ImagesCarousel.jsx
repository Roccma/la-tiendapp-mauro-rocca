import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export const ImagesCarousel = ( { settings, images, applyStyles = false } ) => {
  return (
    <Carousel {...settings}>
      { images.map(
        ( image, idx ) => 
          (<div key = { idx }>
              <img src = { image } className = { applyStyles ? 'img-carousel' : '' }/>
            </div>)
      ) }
        
    </Carousel>
  )
}
