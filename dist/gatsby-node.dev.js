"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var langs = ["en-GB", "uk-UA"];
var defaultLanguage = "en-GB";

var path = require("path");

var _require = require("./src/utils/localization"),
    localizeUrl = _require.localizeUrl,
    createLanguagesObject = _require.createLanguagesObject;

var index = createLanguagesObject(langs);
var page = createLanguagesObject(langs);
var indexTemplate = path.resolve("./src/templates/index.js");
var pageTemplate = path.resolve("./src/templates/page.js");

exports.createPages = function _callee(_ref) {
  var actions, graphql, createPage, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = _ref.actions, graphql = _ref.graphql;
          createPage = actions.createPage;
          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    {\n      allCosmicjsPages {\n        edges {\n          node {\n            slug\n            locale\n            content\n            title\n            created_by\n            created\n            metafields {\n              imgix_url\n            }\n            metadata {\n              products\n              products_table\n              excerpt\n              certification\n              products_list {\n                cereal_grains {\n                  url\n                  imgix_url\n                }\n                grow_to_order {\n                  url\n                  imgix_url\n                }\n                nuts {\n                  url\n                  imgix_url\n                }\n                pulses {\n                  url\n                  imgix_url\n                }\n                seed_oils {\n                  url\n                  imgix_url\n                }\n                seeds {\n                  url\n                  imgix_url\n                }\n                product_list_details {\n                  description\n                  id\n                  name\n                  action\n                }\n              }\n              certification_header\n              certification_eu {\n                url\n                imgix_url\n              }\n              certification_cor {\n                url\n                imgix_url\n              }\n              certification_uk {\n                imgix_url\n                url\n              }\n              main_image {\n                local {\n                  childImageSharp {\n                    fluid {\n                      src\n                      tracedSVG\n                      srcWebp\n                      srcSetWebp\n                      srcSet\n                      sizes\n                      presentationWidth\n                      presentationHeight\n                      originalName\n                      originalImg\n                      base64\n                      aspectRatio\n                    }\n                  }\n                }\n              }\n              home_banner_image {\n                url\n                imgix_url\n              }\n              home_banner_description\n              contact_us\n              contact_button\n              read_more_button\n              what_do_we_do_header\n              get_in_touch_header\n              product_header\n              get_in_touch\n              view_full_product_list\n              contact_list {\n                contact_list_details {\n                  id\n                  telephone\n                  position\n                  name\n                  email\n                  country\n                  card\n                }\n                address_list {\n                  building\n                  address\n                  street\n                  postcode\n                  city\n                  country\n                  name\n                  telephone\n                }\n                graham_bonfield {\n                  url\n                  imgix_url\n                }\n                luba_michailova {\n                  url\n                  imgix_url\n                }\n              }\n              contact_details {\n                contact {\n                  address {\n                    address\n                    building\n                    city\n                    country\n                    postcode\n                    street\n                  }\n                  country\n                  email\n                  telephone\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "));

        case 4:
          result = _context.sent;

          if (result.errors) {
            console.error(result.errors);
          }

          result.data.allCosmicjsPages.edges.forEach(function (_ref2) {
            var node = _ref2.node;
            index[node.locale].push(node);
            if (node.title.toLowerCase() !== "home") page[node.locale].push(node);
          });
          langs.forEach(function (language) {
            createPage({
              path: localizeUrl(language, defaultLanguage, "/"),
              component: indexTemplate,
              context: {
                index: index[language]
              }
            }); // iterate over pages

            [page].forEach(function (pageData) {
              var parse = JSON.parse(JSON.stringify(pageData)); // get lang specific page slug out of page data object

              for (var _i = 0, _Object$entries = Object.entries(parse); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                value.filter(function (i) {
                  return i.locale === language;
                }).forEach(function (i) {
                  createPage({
                    path: localizeUrl(language, defaultLanguage, "/".concat(i.slug)),
                    component: pageTemplate,
                    context: {
                      page: i
                    }
                  });
                });
              }
            });
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};