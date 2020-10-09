require("dotenv").config({});

const { COSMIC_BUCKET, COSMIC_READ_KEY } = process.env;

module.exports = {
  siteMetadata: {
    title: `ProOrganica`,
    titleTemplate: "%s · ProOrganica - Premium Organics from Ukraine",
    description: `Read about the company ProOrganica, who they are, what they're aiming to achieve and the products and services they offer. `,
    author: `James Rowbotham`,
    image: `src/images/proorganica.png`,
    siteTitle: `PrOrganica`,
    siteUrl: `https://proorganica.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://proorganica.com/",
        sitemap: "https://proorganica.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
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
        icon: `src/images/proorganica-fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: COSMIC_BUCKET,
        objectTypes: [`pages`],
        apiAccess: {
          read_key: COSMIC_READ_KEY,
        },
        localMedia: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
