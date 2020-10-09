import React from "react";
import PropTypes from "prop-types";

import { SEO, Layout, ImageCard, NextButton } from "../components";

const Page = data => {
  const { content, title, metadata, locale } =
    data.pageContext && data.pageContext.page;

  return (
    <>
      <Layout>
        <SEO title={title} description={metadata.excerpt && metadata.excerpt} />
        <div className="container">
          <article className="content">
            <h1 className="content-title lighten">{title && title}</h1>
            <blockquote>{metadata.excerpt && metadata.excerpt}</blockquote>
            {metadata.main_image && (
              <figure className="post-feature-image padding-horizontal-2">
                <ImageCard
                  className="post-card-image"
                  alt={title}
                  filename={metadata && metadata.main_image.url}
                ></ImageCard>
              </figure>
            )}
            <section className="post-full-content">
              {/* The main page content  */}
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>{" "}
            <div className="content-footer">
              <NextButton title={title && title} locale={locale} />
            </div>{" "}
          </article>
        </div>
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
