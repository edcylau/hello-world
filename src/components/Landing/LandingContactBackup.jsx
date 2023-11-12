import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const LandingContact = () => {
    const { leftImage, rightImage } = useStaticQuery(graphql`
        query {
            leftImage: file(relativePath: {eq: "Landing/contact_graphics_left.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 450
                        quality: 100
                        formats: [AUTO, WEBP]
                    )
                }
            },
            rightImage: file(relativePath: {eq: "Landing/contact_graphics_right.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 450
                        quality: 100
                        formats: [AUTO, WEBP]
                    )
                }
            }
        }
    `)

    const leftGraphics = getImage(leftImage);
    const rightGraphics = getImage(rightImage);

    return (
        <div id="contact" className={`relative bg-themegreen-light h-halfscreen w-full flex flex-col justify-center items-center px-8 py-20 4xl:py-32`}>
            <div className="bg-themepink-light flex justify-center items-center h-full w-full xl:w-1/2 flex-col xl:px-32 py-20">
                <div className="text-white text-center w-full px-8">
                    <h2 className="w-full">CONTACT US</h2>
                    <p className="w-full">Contact us for more information on The Cheyne Residences.</p>
                </div>
                <form className="w-full px-8 flex flex-col justify-center items-center" method="post" action="https://formspree.io/f/xpzgndyo">
                    <input type="text" name="_gotcha" style={{display:"none"}} />
                    <div className="form-floating mb-3">
                        <input type="text" name="name" className="form-control" id="floatingName" placeholder="NAME *" required />
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" name="_replyto" className="form-control" id="floatingEmail" placeholder="EMAIL *" required />
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" name="message" id="floatingMessage" rows="5" required placeholder="MESSAGE" />
                    </div>
                    <button className="text-white bg-themegreen-standard px-4 py-2" type="submit" id="button-addon1">SEND</button>
                </form>
            </div>
            <div className="hidden lg:block absolute left-0 bottom-0">
                <GatsbyImage image={leftGraphics} alt={``} />
            </div>
            <div className="hidden lg:block absolute right-0 bottom-0">
            <GatsbyImage image={rightGraphics} alt={``}/>
        </div>
        </div>
    );
};

export default LandingContact;