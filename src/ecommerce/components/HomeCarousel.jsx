import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export const HomeCarousel = ( { settings } ) => {
  return (
    <Carousel {...settings}>
        <div>
            <img src="assets/slider_1_small.png" />
        </div>
        <div>
            <img src="assets/slider_2_small.png" />
        </div>
        <div>
            <img src="assets/slider_3_small.png" />
        </div>
    </Carousel>
  )
}
