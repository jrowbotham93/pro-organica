import React from "react";
import PropTypes from "prop-types";
import { SEO, Layout, Image, Section } from "../components";

const Page = data => {
  const { content, title, metadata, slug } =
    data.pageContext && data.pageContext.page;

  return (
    <Layout>
      <SEO title={title} description={metadata.excerpt && metadata.excerpt} />
      <Section>
        <article className="spacing-v-sm">

        { slug === 'about-is' ? (<iframe title="About ProOrganica" width="560" height="315" src="https://www.youtube.com/embed/ZRItBquIwQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>):(<span></span>)}
          <h1 className="page-title">{title && title}</h1>
          <blockquote>{metadata.excerpt && metadata.excerpt}</blockquote>
          {metadata.main_image && (
            <figure className="page-feature-image spacing-v-md">
              <Image
                label={title}
                image={metadata.main_image && metadata.main_image.imgix_url}
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
