import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import Seo from "../components/seo"
import LandingHero from "../components/Landing/LandingHero"
import LandingApartments from "../components/Landing/LandingApartments"
import LandingLocalArea from "../components/Landing/LandingLocalArea"
import LandingView from "../components/Landing/LandingView"
import LandingContact from "../components/Landing/LandingContactNetlify"
import MapContainer from "../components/Landing/LandingMap"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <LandingHero content={data.first} />
        <LandingApartments data={data.apartments} backgroundColor="white" textColor="themeblack" section="apartments"/>
        <LandingView data={data.views} textColor="white" section="views" />
        <LandingLocalArea data={data.localArea} backgroundColor="white" textColor="themeblack" section="localarea" />
        <MapContainer />
        <LandingContact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="The Cheyne Residences" description="13 exquisite one & two bedroom riverside apartments coming 2024" />

export const query = graphql`
  query LandingQuery {
    first: contentfulPageHero(title: {eq: "Landing > First"}) {
      title
      tagline
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    apartments:   contentfulPageCarousel(internalTitle: {eq: "Landing > Apartments"}) {
      description {
        description
      }
      title
      sliderImage {
        title
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1200
          quality: 70
          placeholder: BLURRED
          formats: [AUTO,WEBP,AVIF]
        )
        url
      }
    }
    views: contentfulPageCarousel(internalTitle: {eq: "Landing > Views"}) {
      description {
        description
      }
      title
      sliderImage {
        title
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1200
          quality: 70
          placeholder: BLURRED
          formats: [AUTO,WEBP,AVIF]
        )
        url
      }
    }
    localArea: contentfulPageCarousel(internalTitle: {eq: "Landing > Local Area"}) {
      description {
        description
      }
      title
      sliderImage {
        title
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 60
          placeholder: BLURRED
          formats: [AUTO,WEBP,AVIF]
        )
        url
      }
    }
  }
`
