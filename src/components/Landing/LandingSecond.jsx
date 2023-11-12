import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image"


const LandingSecond = ({ content }) => {
    const heroImage = getImage(content.heroImage)

    return (
        <div id="views" className="bg-custommist lg:h-screen lg:flex lg:flex-row-reverse">
            <div className="w-full lg:w-1/3 text-white text-center mx-auto my-auto pr-0 lg:pr-12 py-12 max-w-full">
                <div className="container">
                    <h1 className="text-5xl mb-8">Yae Works</h1>
                    <p>{content.heroText}</p>
                </div>
            </div>
            <div className="w-full py-8 lg:p-20 h-full m-auto lg:px-12 lg:w-2/3">
                <GatsbyImage image={heroImage} className="h-full" alt=""/>
            </div>
        </div>
    );
};

export default LandingSecond;