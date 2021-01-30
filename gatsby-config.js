require("dotenv").config({});

const { COSMIC_BUCKET, COSMIC_READ_KEY } = process.env;
const siteTitle = `ProOrganica`;

module.exports = {
  siteMetadata: {
    title: `ProOrganica`,
    titleTemplate: "%s · ProOrganica · UK | Ukraine",
    description: `Read about ProOrganica, who we are, what we are aiming to achieve and the products and services we offer. `,
    author: `James Rowbotham`,
    image: `src/images/proorganica.png`,
    siteTitle,
    siteUrl: `https://proorganica.com/`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,

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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat:400, 400i, 700, 700i`],
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
        name: siteTitle,
        short_name: siteTitle,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/branding/proorganica-fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.proorganica.com`,
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
