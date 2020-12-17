import React from "react";
import PropTypes from "prop-types";
import { SEO, Layout, Image, Section } from "../components";

const Page = data => {
  const { content, title, metadata } =
    data.pageContext && data.pageContext.page;

  return (
    <>
      <Layout>
        <SEO title={title} description={metadata.excerpt && metadata.excerpt} />

        <Section>
          <article className="spacing-v-lg">
            <h1 className="page-title">{title && title}</h1>
            <blockquote>{metadata.excerpt && metadata.excerpt}</blockquote>
            {metadata.main_image && (
              <figure className="page-feature-image spacing-v-md">
                <Image
                  type="fluid"
                  label={title}
                  image={metadata.main_image.local.childImageSharp.fluid}
                />
              </figure>
            )}
            <section className="page-full-content">
              <section
                className="oad-external-scripts"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
          </article>
        </Section>
      </Layout>
    </>
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
