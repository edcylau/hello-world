import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
const Footer = () => {
  const {
    site: {
      meta: { links },
    },
    address: { address },
    brooklandLogo
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            instagram
          }
        }
      }
      address: contentfulFooter {
        address
      }
      brooklandLogo: file(relativePath: {eq: "Brookland_Logo_White.png"}) {
          childImageSharp {
              gatsbyImageData(
                  width: 180
                  quality: 80
                  formats: [AUTO, WEBP]
              )
          }
      }
    }
  `)
  const brooklandLogoImage = getImage(brooklandLogo)
  return (
    <div className="bg-themepink-standard py-20">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <h2 className="pb-8">ENQUIRIES</h2>
        <p>KNIGHT FRANK</p>
        <p>0207 603 22111</p>
        <a className="uppercase" href="mailto:newhomes@knightfrank.com">newhomes@knightfrank.com</a>
        <a
          href="https://brooklandgroup.co.uk/"
          target="_blank"
          rel="noreferrer noopener"
          className="pt-8"
        >
          <GatsbyImage image={brooklandLogoImage} alt="brookland-logo"/>
        </a>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
