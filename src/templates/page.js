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

          <h1 className="page-title">{title && title}</h1>
          <blockquote>{metadata.excerpt && metadata.excerpt}</blockquote>
          { slug === 'about' ? (<div className="videoWrapper mt-1"><iframe title="About ProOrganica" src="https://www.youtube.com/embed/ZRItBquIwQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> ) :(<span></span>)}
          {metadata.main_image && slug !== 'about' && (
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
