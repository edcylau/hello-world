import React from "react"
import Layout from "../layouts/Layout"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Seo from "../components/seo"
import { graphql } from "gatsby";

const Privacy = ({ data, location }) => {
  const plainTextContent = data.privacy.description
  const options_plainText = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-8" >{children}</h1>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-sm my-4">{children}</p>
    },
    renderMark: {},
  }

  return (
    <Layout>
      <div className="container text-white py-40 mx-auto">
        <h1 className="text-5xl my-20 text-center">{data.privacy.title}</h1>
        <div className="w-full pb-8 md:pb-0 drop-shadow-sm">
          {plainTextContent && renderRichText(plainTextContent, options_plainText)}
        </div>
      </div>
    </Layout>
  )
}

export default Privacy

export const Head = () => <Seo title="Privacy Policy" description="Privacy Policy | Yae Works" />

export const query = graphql`
  query Privacy {
    privacy: contentfulPrivacyPolicy {
        title
        description: content {
          raw
        }
    }
  }
`