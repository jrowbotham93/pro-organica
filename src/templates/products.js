import React from "react";
import PropTypes from "prop-types";
import { SEO, Layout, Image, Section, Grid, Links, Card } from "../components";

const Page = data => {
console.log(data.pageContext);
  const products = data.pageContext.products[0];
  const purityStr =  data.pageContext.products[0].locale === 'en-GB'?'Purity 99.9%':'Чистота 99.9%';

  return (
    <Layout>
      <SEO title={products.title} />
      <Section>
        <article className="spacing-v-sm">
          <h1 className="page-title">{products.title}</h1>
          <Grid className="grid-primary">
          {products.metadata.products_shop.map(({ product_name, product_photo, id }, index) => {
            return (
              <Links
                internal
                styling="a-black"
                href={`/${products.locale}/products/${id}`.replace("/en-GB", "")}
                key={`${index}-${product_name}`}
              >
                <Card
                  styling="text-align-center"
                  title={`${product_name} <br/> ${purityStr}`}
                  className={"animate-hover"}
                >
                  <Image
                    image={product_photo && product_photo.imgix_url}
                    alt="Links to content pages"
                    styles="border-radius-top"
                  />
                </Card>{" "}
              </Links>
            );
          })}
        </Grid>


        </article>
      </Section>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    main_image: PropTypes.string,
  }),
};

export default Page;
