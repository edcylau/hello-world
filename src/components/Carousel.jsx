import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { isMobile, MobileView, BrowserView } from 'react-device-detect';

import "swiper/css/swiper.css";
import "./Carousel.css";

export const Carousel = ({ images, section }) => {
  const swiperParams = {
    // ... your swiperParams
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

    // Style for the image container
    const imageContainerStyle = {
      width: "100%", // Full width of the screen
    }
  
    // Style for images
    const imageStyle = {
      width: "100%",
      height: "auto", // Maintain full height of the image
      objectFit: "cover" // This will ensure the image covers the area, might crop if aspect ratio differs
    }
  
    return (
      <>
        <BrowserView>
          <Swiper {...swiperParams}>
            {images && images.map((image, index) => {
              const imageData = getImage(image);
              return (
                <div style={imageContainerStyle} key={`slide_${section}_${index}`}>
                  <GatsbyImage style={imageStyle} loading="eager" image={imageData} alt={image.title} />
                </div>
              )
            })}
          </Swiper>
        </BrowserView>
        <MobileView>
          <Swiper {...swiperParams}>
            {images && images.map((image, index) => {
              const imageData = getImage(image);
              return (
                <div style={imageContainerStyle} key={`slide_${section}_${index}`}>
                  <GatsbyImage style={imageStyle} loading="eager" image={imageData} alt={image.title} />
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
