import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <footer>
        <p>Created by {data.site.siteMetadata.author}, copyright 2020</p>
      </footer>
    </div>
  )
}

export default Footer;
