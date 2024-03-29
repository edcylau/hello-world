import React from "react"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { motion } from "framer-motion"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';
import {isMobile} from 'react-device-detect';

const LandingHero = ({ content }) => {
  const heroImage = getImage(content.heroImage)

  const { graphics } = useStaticQuery(graphql`
  query {
      graphics: file(relativePath: {eq: "Landing/hero_graphics.png"}) {
          childImageSharp {
              gatsbyImageData(
                  width: 450
                  quality: 100
                  formats: [AUTO, WEBP]
              )
          }
      }
  }
`);
  // const plainTextContent = content.companyValue

  // const Bold = ({ children }) => <span className="font-extrabold">{children}</span>;
  // const Italic = ({ children }) => <span className="italic text-xl">{children}</span>;

  // const options_plainText = {
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-2">{children}</p>,
  //   },
  //   renderMark: {
  //     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  //     [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
  //   },
  // }
  const graphicsImage = getImage(graphics)

  return (
    <div className="z-[1] relative block">
      <video id="videoId" className="object-lg-position xs:object-mobile-position sm:object-center" autoPlay={true} playsInline loop muted={true} style={{
        position: "absolute",
        width: "100vw",
        height: "100%",
        objectFit: "cover",
        opacity: "1",
        zIndex: "-1",
      }} 
      >
      <source src="/video/heroBackgroundVideo.mp4" type="video/mp4" />
      </video>
          <motion.div
            className="h-[110vh] md:h-screen w-full flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="uppercase text-white bold" key={`landing-tagline-1`}>13 Exquisite <br className="lg:hidden"/>one  & two bedroom <br /> Riverside apartments</h1>
            </div>
          </motion.div>
      <div  className="absolute bottom-0 bg-themegreen-light w-full h-[20%] flex justify-center items-center text-white text-center">
            <h2 id="apartments" className="leading-[50.32px]">WELCOME <br className="lg:hidden"/>TO CHELSEA</h2>
          </div>
      <div className="flex justify-center">
        <div className="bg-themepink-standard w-8 h-8 absolute -bottom-[1rem] origin-center transform rotate-45"></div>
      </div>

    </div>

  )
}

export default LandingHero
