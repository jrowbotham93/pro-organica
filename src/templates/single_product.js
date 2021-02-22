import React from "react";
import PropTypes from "prop-types";
import { SEO, Layout, Image, Section, Links } from "../components";

const Page = data => {
 const product = data.pageContext.product;

 const buttonText = data.pageContext.parent.locale === 'en-GB' ? "Contact us to learn more" : "Зв'яжіться з нами, щоб дізнатися більше.";

  return (
    <Layout>
      <SEO title={product.product_name} />
      <Section>
        <article className="spacing-v-sm">
          <h1 className="page-title">{product.product_name }</h1>
          {product.product_photo && (
            <figure className="page-feature-image spacing-v-md">
              <Image
                label={product.product_name}
                image={product.product_photo && product.product_photo.imgix_url}
              />
            </figure>
          )}
          <section className="page-full-content">
            <section
              className="oad-external-scripts"
              dangerouslySetInnerHTML={{ __html: product.product_description }}
            />
          </section>
        </article>

        <Links
            styling="spacing-v-sm green-button text-bold text-align-center button-primary flex flex-center-vertical"
            href='/contact'
            internal
            alt={buttonText}
          >
            {buttonText}
          </Links>
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
