import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import Carousel from '../Carousel';

const LandingAparments = ({ backgroundColor, textColor, data, section}) => {

    return (
        <div id={section} className={`relative bg-${backgroundColor} lg:h-full w-full flex flex-col justify-center items-center pt-20 md:py-12 xl:py-20 4xl:py-28`}>
            <div className={`carousel-container text-center text-${textColor} w-full md:w-[80%] 3xl:w-[60%]`}>
                <h2 className="px-4">{data.title}</h2>
                <p className="px-4 mt-8 mb-20">{data.description.description}</p>
                <div className="h-full">
                    <Carousel section={section} images={data.sliderImage} />
                </div>
            </div>
        </div>
    );
};

export default LandingAparments;