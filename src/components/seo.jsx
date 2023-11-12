import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Seo = ({ title, description, image }) => {
  const {
    site: {
      siteMetadata: { locale, siteTitle },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          locale
          siteTitle: title
        }
      }
    }
  `)

  return (
    <>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

Seo.defaultProps = {
  image: "/logo.png",
}

export default Seo
