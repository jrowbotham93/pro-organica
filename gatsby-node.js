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
              excerpt
              certification
              accreditation
              certification_european {
                url
                imgix_url
              }
              certification_cor_image {
                url
                imgix_url
              }
              certification_cor {
                url
                imgix_url
              }
              certification_european_image {
                url
                imgix_url
              }
              certification
              certification_united_kingdom {
                imgix_url
                url
              }
              certification_united_kingdom_image {
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
