import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import { MobileOnlyView, BrowserView } from 'react-device-detect';

import "swiper/css/swiper.css";
import "./Carousel.css";

export const Carousel = ({ images, section }) => {
  const swiperParams = {
    // ... your swiperParams
    enabled: true,
    effect: 'fade',
    autoplay: {
      delay: 6000
    },
    lazy: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  }
// Style for the image container in BrowserView
const browserImageContainerStyle = {
  width: "100%", // Full width of the screen
  paddingTop: "56.25%", // Maintains a 16:9 aspect ratio
  position: "relative",
}

// Style for images in BrowserView
const browserImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover", // This will ensure the image covers the area, might crop if aspect ratio differs
}

// Style for MobileView (if different styling is needed)
const mobileImageStyle = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
}

return (
  <>
    <BrowserView>
      <Swiper {...swiperParams}>
        {images && images.map((image, index) => {
          return (
            <div style={browserImageContainerStyle} key={`slide_${section}_${index}`}>
              <img style={browserImageStyle} loading="lazy" src={image.url} alt={image.title} />
            </div>
          )
        })}
      </Swiper>
    </BrowserView>
    <MobileOnlyView>
      <Swiper {...swiperParams}>
        {images && images.map((image, index) => {
          return (
            <div style={{ width: "100%" }} key={`slide_${section}_${index}`}>
              <img style={mobileImageStyle} src={image.url} alt={image.title} />
            </div>
          )
        })}
      </Swiper>
    </MobileOnlyView>
  </>
)
}
  Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
export default Carousel
