const langs = ["en-GB", "uk-UA"];
const defaultLanguage = "en-GB";

const path = require(`path`);
const {
  localizeUrl,
  createLanguagesObject,
} = require("./src/utils/localization");

const index = createLanguagesObject(langs);
const page = createLanguagesObject(langs);

const indexTemplate = path.resolve(`./src/templates/index.js`);
const pageTemplate = path.resolve(`./src/templates/page.js`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allCosmicjsPages {
        edges {
          node {
            slug
            locale
            content
            title
            created_by
            created
            metafields {
              imgix_url
            }
            metadata {
              who_are_we
              products
              products_table
              excerpt
              certification
              certification_header
              certification_eu {
                url
                imgix_url
              }
              certification_cor {
                url
                imgix_url
              }
              certification_uk {
                imgix_url
                url
              }
              main_image {
                url
                imgix_url
              }
              home_banner_image {
                url
                imgix_url
              }
              home_banner_description
              contact_us
              contact_button
              read_more_button
              what_do_we_do_header
              who_are_we_header
              get_in_touch_header
              product_header
              get_in_touch
              contact_details {
                contact {
                  address {
                    address
                    building
                    city
                    country
                    postcode
                    street
                  }
                  contacts {
                    email
                    name
                    position
                    telephone
                  }
                  country
                  email
                  telephone
                  name
                }
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
  }

  result.data.allCosmicjsPages.edges.forEach(({ node }) => {
    index[node.locale].push(node);
    if (node.title.toLowerCase() !== "home") page[node.locale].push(node);
  });

  langs.forEach(language => {
    createPage({
      path: localizeUrl(language, defaultLanguage, `/`),
      component: indexTemplate,
      context: {
        index: index[language],
      },
    });
    // iterate over pages
    [page].forEach(pageData => {
      let parse = JSON.parse(JSON.stringify(pageData));
      // get lang specific page slug out of page data object
      for (const [key, value] of Object.entries(parse)) {
        value
          .filter(i => i.locale === language)
          .forEach(i => {
            createPage({
              path: localizeUrl(language, defaultLanguage, `/${i.slug}`),
              component: pageTemplate,
              context: {
                page: i,
              },
            });
          });
      }
    });
  });
};
