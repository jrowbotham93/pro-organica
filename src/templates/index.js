import React from "react";
import { Layout, SEO, Grid, Section, Image, Card, Links } from "../components";
import findImageOwner from "../utils/helper";

const Index = ({ pageContext }) => {
  const [
    {
      metadata: {
        home_banner_description,
        products,
        what_do_we_do_header,
        product_header,
        products_list,
      },
    },
  ] = pageContext.home;

  const productList = products_list?.product_list_details.sort((a, b) => {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
  });

  return (
    <Layout isHome={true}>
      <SEO title="Home" description="Homepage for proOrganica" />
      <Section
        description={home_banner_description}
        title={what_do_we_do_header}
      >
        <Grid className="grid-primary">
          {pageContext.pages.map(({ title, locale, slug, metadata }, index) => {
            return (
              <Links
                internal
                styling="a-black"
                href={`/${locale}/${slug}`.replace("/en-GB", "")}
                key={`${index}-${title}`}
              >
                <Card
                  styling="text-align-center"
                  title={title}
                  className={"animate-hover"}
                  arrow
                  href={`/${locale}/${slug}`.replace("/en-GB", "")}
                >
                  <Image
                    image={metadata.main_image && metadata.main_image.imgix_url}
                    alt="Links to content pages"
                    styles="border-radius-top"
                  />
                </Card>{" "}
              </Links>
            );
          })}
        </Grid>
      </Section>
      <hr />
      <Section description={products} title={product_header}>
        <Grid className="grid-primary" id="products">
          {products_list &&
            productList &&
            findImageOwner(productList, products_list).map(
              ({ name, image, description, action }, index) => {
                return (
                  <Card
                    href="contact"
                    button={action}
                    label={description}
                    key={`${index}-${name}`}
                    description={action ? "" : description}
                    title={name}
                  >
                    <Image
                      label={`${name} image`}
                      styles="border-radius-top"
                      image={image && image?.imgix_url}
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
