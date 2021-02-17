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

  const newsStr = pageContext.home[0].locale === 'en-GB' ? "News" : "Новини";
  const newsPost = { 'title': pageContext.home[0].locale === 'en-GB' ? "Visit us at BIOFACH / VIVANESS 2021 eSPECIAL": "Завітайте до нас на BIOFACH / VIVANESS 2021 eSPECIAL", 'description' : pageContext.home[0].locale === 'en-GB' ? "Join our presentation in ZOOM on February 18th, 2021, 2:00 PM (CET)": "Презентація ProOrganica в ZOOM відбудеться 18 лютого 2021 о 15:00 за київським часом"};

  return (
    <Layout isHome={true}>
      <SEO title="Home" description="Homepage for proOrganica" />
      <Section
        description={home_banner_description}
        title={what_do_we_do_header}
      > 
        <Grid className="grid-primary">
          {pageContext.pages.map(({ title, locale, slug, metadata }, index) => {

            return slug !== 'products' && (
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

      <Section description={products} title={product_header}>

        <Grid className="grid-primary" id="products" >
          {products_list &&
            productList &&
            findImageOwner(productList, products_list).map(
              ({ name, image, description, action }, index) => {

                if (index === 0 && pageContext.home[0].locale === 'en-GB') {
                  return (
                    <Links
                    internal
                    styling="a-black"
                    href={`products/`.replace("/en-GB", "")}
                    key='products'
                     >
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
                    </Links>
                  );
                } else {
                  return (
                    <Card
                      button={action}
                      href={pageContext.home[0].locale === 'en-GB'?'/contact':'https://proorganica.prom.ua/ua/'}
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
              }
            )}
        </Grid>
      </Section>

      <Section title={newsStr}>
        <a href="https://us04web.zoom.us/j/72799578698?pwd=WEp4cURpcWV1SzdxRlNGM3BtWjlPQT09">
              <Card
                      href="https://us04web.zoom.us/j/72799578698?pwd=WEp4cURpcWV1SzdxRlNGM3BtWjlPQT09"
                      title={newsPost.title} 
                      description={newsPost.description}
                      key="contact"
                    >
                      <Image
                        label={`image`}
                        styles="border-radius-top"
                        image="https://imgix.cosmicjs.com/ff3fa180-70af-11eb-87a2-9be5e90cdf74-biofach20212x-80.jpg"
                      />
              </Card>
            </a>
      </Section>

    </Layout>
  );
};

export default Index;
