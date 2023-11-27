import PropTypes from "prop-types"
import React from "react"
import Swiper from "react-id-swiper"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {isMobile} from 'react-device-detect';

import "swiper/css/swiper.css"
import "./Carousel.css"

export const Carousel = ({ images, section }) => {
  const swiperParams = {
    enabled: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  }
  return (
    <Swiper {...swiperParams}>
      {images && images.map((image,index) => {
        const imageData = getImage(image)
        return (
          <div className={isMobile ? "h-[30vh]" : "h-[50vh]"} key={`slide_${section}_${index}`}>
            <GatsbyImage style={isMobile? {width: "100%", height: "50vh"}:{width: "100%", height: "60vh"}} aspectRatio={4/3} objectFit="cover" loading="eager" image={imageData} alt={image.title}/>
          </div>
        )
      })}
    </Swiper>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
