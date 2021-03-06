const langs = ["en-GB", "uk-UA"];
const defaultLanguage = "en-GB";

const path = require(`path`);
const {
  localizeUrl,
  createLanguagesObject,
} = require("./src/utils/localization");

// Create two langauge objects
const homeLocalized = createLanguagesObject(langs);
const contentLocalized = createLanguagesObject(langs);
const contactLocalized = createLanguagesObject(langs);
const productsLocalized = createLanguagesObject(langs);
const certificationLocalized = createLanguagesObject(langs);

const homePage = path.resolve(`./src/templates/index.js`);
const contentPage = path.resolve(`./src/templates/page.js`);
const contactPage = path.resolve(`./src/templates/contact.js`);
const certificationPage = path.resolve(`./src/templates/certification.js`);
const productsPage = path.resolve(`./src/templates/products.js`);
const singleProductPage = path.resolve(`./src/templates/single_product.js`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const productsPageData = await graphql(`
  {
    allCosmicjsPages(filter: { slug: { eq: "products" } }) {
          edges {
            node {
              locale
              slug
              title
              metadata {
                products_shop {
                  id
                  product_description
                  product_name
                  product_photo {
                    imgix_url
                  }
                }
              }
            }
          }
        }
    }`);


  const contactPageData = await graphql(`
    {
      allCosmicjsPages(filter: { slug: { regex: "/home/" } }) {
        edges {
          node {
            locale
            slug
            locale
            metadata {
              get_in_touch_header
              product_header
              get_in_touch
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

  const contentPageData = await graphql(`
    {
      allCosmicjsPages(filter: { slug: { nin: "home" } }) {
        edges {
          node {
            slug
            locale
            title
            content
            metadata {
              excerpt
              main_image {
                imgix_url
              }
            }
          }
        }
      }
    }
  `);

  const certificationPageData = await graphql(`
    {
      allCosmicjsPages(filter: { slug: { regex: "/home/" } }) {
        edges {
          node {
            slug
            locale
            title
            metadata {
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
                pdf_organic_food_federation {
                  url
                  imgix_url
                }
                pdf_organic_standard {
                  imgix_url
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const homePageData = await graphql(`
    {
      allCosmicjsPages(filter: { slug: { regex: "/home/" } }) {
        edges {
          node {
            slug
            locale
            content
            title
            metadata {
              products
              certification
              product_header
              products_list {
                cereal_grains {
                  url
                  imgix_url
                }
                source_to_order {
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
                  order
                  link
                }
              }
              main_image {
                imgix_url
                url
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
            }
          }
        }
      }
    }
  `);

  const extractData = ({ localize, query } = {}) => {
    return query.data.allCosmicjsPages.edges.forEach(({ node }) => {
      if (node.locale === null) return;
      localize[node.locale].push(node);
    });
  };

  extractData({ localize: contactLocalized, query: contactPageData });
  extractData({ localize: productsLocalized, query: productsPageData });
  extractData({ localize: contentLocalized, query: contentPageData });
  extractData({
    localize: certificationLocalized,
    query: certificationPageData,
  });
  extractData({ localize: homeLocalized, query: homePageData });

  langs.forEach(language => {
    // Create localized data for the home page
    createPage({
      path: localizeUrl(language, defaultLanguage, `/`),
      component: homePage,
      context: {
        home: homeLocalized[language],
        pages: contentLocalized[language],
      },
    });
    // Create certificiation page
    createPage({
      path: localizeUrl(language, defaultLanguage, `/certification`),
      component: certificationPage,
      context: {
        certification: certificationLocalized[language],
      },
    });
    // Create contact page
    createPage({
      path: localizeUrl(language, defaultLanguage, `/contact`),
      component: contactPage,
      context: {
        contact: contactLocalized[language],
      },
    });



    // Create content pages (dynamically produced based on cosmic pages)
    [contentLocalized].forEach(pageData => {
      let parse = JSON.parse(JSON.stringify(pageData));
      // get lang specific page slug out of page data object
      for (const [key, value] of Object.entries(parse)) {
        value
          .filter(i => i.locale === language)
          .forEach(i => {
            if (i.slug === 'products') return;
            createPage({
              path: localizeUrl(language, defaultLanguage, `/${i.slug}`),
              component: contentPage,
              context: {
                page: i,
              },
            });
          });
      }
    });


    // Create products page
    createPage({
      path: localizeUrl(language, defaultLanguage, `/products`),
      component: productsPage,
      context: {
        products: productsLocalized[language],
      },
    });
    
    [productsLocalized].forEach(productsData => {
      let parse = JSON.parse(JSON.stringify(productsData));
      // get lang specific page slug out of page data object
      for (const [key, value] of Object.entries(parse)) {
        value
          .filter(i => i.locale === language)
          .forEach(i => {
            if (i.metadata === null || i.metadata.products_shop === null) return;
            i.metadata.products_shop.forEach( e => {
              console.log(i);
              createPage({
                path: localizeUrl(i.locale, defaultLanguage, `/products/${e.id}`),
                component: singleProductPage,
                context: {
                  product: e,
                  parent: i,
                },
              });
            });
 
          });
      }
    });

  });
};
