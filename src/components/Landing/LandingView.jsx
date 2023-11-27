import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {isMobile} from 'react-device-detect';

import Carousel from '../Carousel';

const LandingView = ({ textColor, data, section}) => {

    return (
        <div className="z-[1] relative block">
            <video className="hidden md:block" id="videoId" autoPlay={isMobile ? false : true } playsInline loop muted={true} style={{
                position: "absolute",
                width: "100vw",
                height: "100%",
                objectFit: "cover",
                opacity: "1",
                zIndex: "-1",
            }} 
            >
            <source src="/video/sectionTwoBackgroundVideo.mp4" type="video/mp4" />
            </video>
            <div id={section} className={` lg:h-full w-full flex flex-col justify-center items-center pt-20 md:py-12 xl:py-20 4xl:py-32`}>
                <div className={`carousel-container text-center text-${textColor} w-full md:w-[80%] 3xl:w-[60%]`}>
                    <h2 className="px-4">{data.title}</h2>
                    <p className="text-[16.53px] leading-[16.53px] lg:text-[1.563rem] lg:leading-[30px] px-4 my-8">{data.description.description}</p>
                    <div className="h-full">
                        <Carousel section={section} images={data.sliderImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingView;