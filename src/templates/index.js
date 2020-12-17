import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import {
  Layout,
  SEO,
  Input,
  Grid,
  Section,
  Image,
  Contact,
  Card,
  Address,
} from "../components";

const Index = data => {
  const [showProductTable, setProductTable] = useState(false);
  const { index } = data.pageContext;
  const {
    metadata: {
      home_banner_description,
      certification,
      certification_header,
      products,
      products_table,
      what_do_we_do_header,
      product_header,
      get_in_touch_header,
      contact_list,
      read_more_button,
      products_list,
      get_in_touch,
      view_full_product_list,
    },
  } = index.filter(i => i.slug.toLowerCase() === "home")[0];

  const { allCertification } = useStaticQuery(graphql`
    query getAllProductImages {
      allCertification: allFile(
        filter: { relativePath: { regex: "/certification/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const productList = products_list?.product_list_details;
  const contactsList = contact_list?.contact_list_details;
  const addressList = contact_list?.address_list;

  const findImageOwner = (arr1, arr2) => {
    return arr1.map(item => {
      let temp = arr2[item.id];
      if (arr2[item.id]) {
        item["image"] = temp;
        return item;
      } else {
        return item;
      }
    });
  };

  return (
    <Layout isHome={true}>
      <SEO title="Home" description="Homepage for proOrganica" />
      <Section
        description={home_banner_description}
        title={what_do_we_do_header}
      >
        <Grid className="grid-primary">
          {index
            .filter(i => i.title !== "Home")
            .map(({ title, locale, slug, metadata }, index) => (
              <Card
                key={`${index}-${title}`}
                title={title}
                styling="text-align-center"
                button
                label={read_more_button}
                href={`/${locale}/${slug}`.replace("/en-GB", "")}
              >
                <Link to={`/${locale}/${slug}`.replace("/en-GB", "")}>
                  <Image
                    type="fluid"
                    image={metadata.main_image.local.childImageSharp.fluid}
                    alt="Links to content pages"
                  />
                </Link>
              </Card>
            ))}
        </Grid>
      </Section>
      <hr />
      <Section description={products} title={product_header}>
        <div className="flex-center-vertical flex-center-horizontal flex flex-column">
          <Input
            type="button"
            styles="button-primary"
            name={view_full_product_list}
            onClick={() => setProductTable(!showProductTable)}
          />
          <div
            className={`spacing-v-md ${showProductTable && "table-wrapper"}`}
          >
            {showProductTable && (
              <div className="table-wrapper">
                <div
                  className="load-external-scripts"
                  dangerouslySetInnerHTML={{ __html: products_table }}
                />
              </div>
            )}
          </div>
        </div>

        <Grid className="grid-primary">
          {products_list &&
            productList &&
            findImageOwner(productList, products_list).map(
              ({ name, image, description, action }, index) => (
                <Card
                  href="#contact"
                  button={action}
                  label={description}
                  key={`${index}-${name}`}
                  description={action ? "" : description}
                  title={name}
                >
                  <Image alt="product images" image={image.imgix_url} />
                </Card>
              )
            )}
        </Grid>
      </Section>
      <hr />

      <Section
        id="certification"
        description={certification}
        title={certification_header}
      >
        <Grid id="certification" className="grid-primary ">
          {allCertification &&
            allCertification.edges.map(({ node }, index) => (
              <Card action target="_blank" rel="noreferrer" key={index}>
                <Image
                  type="fluid"
                  image={node.childImageSharp.fluid}
                  label="Certification"
                ></Image>
              </Card>
            ))}
        </Grid>
      </Section>
      <hr />

      <Section description={get_in_touch} title={get_in_touch_header}>
        <div id="contact" className="flex flex-wrap spacing-v-lg">
          {addressList &&
            addressList.map(
              (
                { address, country, city, name, building, postcode, street },
                index
              ) => (
                <Address
                  key={`${index}-${name}`}
                  building={building}
                  street={street}
                  name={name}
                  postcode={postcode}
                  city={city}
                  country={country}
                  address={address}
                />
              )
            )}
        </div>

        <Grid className="grid-secondary">
          {contact_list &&
            findImageOwner(contactsList, contact_list).map(
              ({ card, name, image, position, email, telephone }, index) => {
                return card ? (
                  <Card key={`${index}-${name}`}>
                    <Image
                      label={`Image of ${name}, ${position} at ProOrganica`}
                      image={image.imgix_url}
                    />
                    <Contact
                      name={name}
                      position={position}
                      email={email}
                      telephone={telephone}
                    />
                  </Card>
                ) : (
                  <Card key={`${index}-${name}`}>
                    <Contact
                      name={name}
                      position={position}
                      email={email}
                      telephone={telephone}
                    />
                  </Card>
                );
              }
            )}
        </Grid>
      </Section>
    </Layout>
  );
};

export default Index;
