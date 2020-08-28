const result = require("dotenv").config();
if (result.error) {
  throw result.error;
}

module.exports = {
  siteMetadata: {
    title: `ProOrganica`,
    description: `Read about the company ProOrganica, who they are, what they're aiming to achieve and the products and services they offer. `,
    author: `James Rowbotham`,
    url: "https://www.proorganica.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `proOrganica`,
        short_name: `proOrganica`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/proorganica-white.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: `${process.env.COSMIC_BUCKET}`,
        objectTypes: [`pages`],
        apiAccess: {
          read_key: `${process.env.COSMIC_READ_KEY}`,
        },
        localMedia: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
