import React, { useState } from "react";
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
  Links,
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
      certification_list,
      affiliates_list,
      affiliates,
      affiliate_header,
    },
  } = index.filter(i => i.slug.toLowerCase() === "home")[0];

  const productList = products_list?.product_list_details;
  const contactsList = contact_list?.contact_list_details;
  const addressList = contact_list?.address_list;
  const affiliateList = Object.entries(affiliates_list);

  //  annoying that I have to do this but cosmos cms has its limitations
  const certsArray = [
    {
      pdf: certification_list.certificate_uk,
      img: certification_list.certificate_uk_image,
    },
    {
      pdf: certification_list.certificate_cors,
      img: certification_list.certificate_cors_image,
    },
    {
      pdf: certification_list.certificate_eu,
      img: certification_list.certificate_eu_image,
    },
  ];

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
                    image={metadata.main_image.imgix_url}
                    alt="Links to content pages"
                    styles="border-radius-top"
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
                  <Image
                    alt="product images"
                    styles="border-radius-top"
                    image={image.imgix_url}
                  />
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
        <Grid id="certification" className="grid-primary">
          {certsArray.map((certs, index) => {
            return (
              <Card key={index}>
                <Links
                  alt={`ProOrganica certifications`}
                  href={certs.pdf.imgix_url}
                  target="_blank"
                >
                  <Image image={certs.img.imgix_url} />
                </Links>
              </Card>
            );
          })}
        </Grid>
      </Section>
      <hr />

      <Section title={affiliate_header} description={affiliates}>
        <Grid className="grid-tertiary spacing-v-lg">
          {affiliateList.map((affiliate, index) => {
            return (
              <Card key={index} className="flex flex-center-vertical">
                <Image label="affiliate logo" image={affiliate[1].imgix_url} />
              </Card>
            );
          })}
        </Grid>
      </Section>
      <hr />

      <Section
        id="contact"
        description={get_in_touch}
        title={get_in_touch_header}
        className="flex-center-horizontal flex-center-vertical"
      >
        <Grid className="grid-secondary">
          {addressList &&
            addressList.map(
              (
                { address, country, city, name, building, postcode, street },
                index
              ) => (
                <Address
                  key={index}
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
        </Grid>

        <Grid className="grid-secondary spacing-v-lg">
          {contact_list &&
            findImageOwner(contactsList, contact_list).map(
              ({ card, name, image, position, email, telephone }, index) => {
                return (
                  <Card key={`${index}-${name}`}>
                    <>
                      {card ? (
                        <div>
                          <Image
                            label={`Image of ${name}, ${position} at ProOrganica`}
                            image={image.imgix_url}
                            styles="border-radius-top"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      <Contact
                        name={name}
                        position={position}
                        email={email}
                        telephone={telephone}
                      ></Contact>
                    </>
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
