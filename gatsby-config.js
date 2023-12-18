require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    menu: [
      { name: "THE APARTMENTS", to: "/#apartments" },
      { name: "VIEWS", to: "/#views" },
      { name: "LOCAL AREA", to: "/#localarea" },
      { name: "CONTACT", to: "/#contact" },
    ],
    links: {
      instagram: "https://www.instagram.com/",
    },
    locale: "en",
    title: `The Cheyne Residences`,
    description: `13 exquisite one & two bedroom riverside apartments coming 2024`,
    author: `@madebyrise`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        /*id: 'GTM-add_your_tag_here',*/
        id: 'GTM-MGPBK5M',
        includeInDevelopment: false
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Chenye Residences`,
        short_name: `ChenyeResidences`,
        start_url: `/`,
        background_color: `#CE652D`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
  ],
}
