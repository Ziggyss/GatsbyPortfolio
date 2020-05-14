/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Lisa Wilton, Web Developer",
    description: "Belfast-based creative full stack web developer",
    author: "@lisawilton",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: yyjbhjz1f2iv,
        accessToken: mltg_zShZwqIhKJXDRBoYhw4ICi7tkUzktbootOitJ8,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-transition-link`,
  ],
}
