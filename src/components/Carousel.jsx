import PropTypes from "prop-types"
import React from "react"
import Swiper from "react-id-swiper"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {isMobile, MobileView, BrowserView} from 'react-device-detect';

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
    <>
      <BrowserView>
        <Swiper {...swiperParams}>
          {images && images.map((image,index) => {
            const imageData = getImage(image)
            return (
              <div className={isMobile ? "h-auto" : "h-[50vh]"} key={`slide_${section}_${index}`}>
                <GatsbyImage style={isMobile? {width: "100%", height: "auto"}:{width: "100%", height: "60vh"}} aspectratio={4/3} objectFit={isMobile? "contain" : "cover"} loading="eager" image={imageData} alt={image.title}/>
              </div>
            )
          })}
        </Swiper>
      </BrowserView>
      <MobileView>
        <Swiper {...swiperParams}>
          {images && images.map((image,index) => {
            const imageData = getImage(image)
            return (
              <div className="h-auto" key={`slide_${section}_${index}`}>
                <GatsbyImage style={{width: "100%", height: "auto"}} objectFit="contain" loading="eager" image={imageData} alt={image.title}/>
              </div>
            )
          })}
        </Swiper>
      </MobileView>
    </>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
