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
              products
              products_table
              excerpt
              certification
              affiliate_header
              affiliates
              affiliates_list {
                logo_organic_eu {
                  url
                  imgix_url
                }
                logo_organic_ukraine {
                  url
                  imgix_url
                }
                logo_organic_food_federation {
                  url
                  imgix_url
                }
                logo_organic_standard {
                  url
                  imgix_url
                }
              }
              products_list {
                cereal_grains {
                  url
                  imgix_url
                }
                grow_to_order {
                  url
                  imgix_url
                }
                flour {
                  url
                  imgix_url
                }
                pulses {
                  url
                  imgix_url
                }
                seed_oils {
                  url
                  imgix_url
                }
                seeds {
                  url
                  imgix_url
                }
                product_list_details {
                  description
                  id
                  name
                  action
                }
              }
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
                local {
                  childImageSharp {
                    fluid {
                      src
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      srcSet
                      sizes
                      presentationWidth
                      presentationHeight
                      originalName
                      originalImg
                      base64
                      aspectRatio
                    }
                  }
                }
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
              get_in_touch_header
              product_header
              get_in_touch
              view_full_product_list
              certification_list {
                certificate_cors {
                  imgix_url
                  url
                }
                certificate_eu {
                  imgix_url
                  url
                }
                certificate_uk {
                  imgix_url
                  url
                }
                certificate_cors_image {
                  url
                  imgix_url
                }
                certificate_eu_image {
                  url
                  imgix_url
                }
                certificate_uk_image {
                  imgix_url
                  url
                }
              }
              contact_list {
                contact_list_details {
                  id
                  telephone
                  position
                  name
                  email
                  country
                  card
                }
                address_list {
                  building
                  address
                  street
                  postcode
                  city
                  country
                  name
                  telephone
                }

                luba_michailova {
                  url
                  imgix_url
                }
                pavel_gukov {
                  url
                  imgix_url
                }
                eugene_blokhin {
                  url
                  imgix_url
                }
                iryna_sholokhova {
                  url
                  imgix_url
                }
              }

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
