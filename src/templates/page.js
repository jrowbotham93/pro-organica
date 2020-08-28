import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { SEO, Layout } from "../components";

const Page = ({ data }) => {
  const { content, title, metadata } = data.pageContext.page;

  return (
    <>
      <Helmet>
        {/* <style type="text/css">{`${page.codeinjection_styles}`}</style> */}
      </Helmet>
      <Layout>
        <SEO title={title} />
        <div className="container">
          <article className="content">
            {metadata.main_image && (
              <figure className="post-feature-image">
                <img src={metadata.main_image.url} alt={title} />
              </figure>
            )}
            <section className="post-full-content">
              <h1 className="content-title">{title}</h1>

              {/* The main page content */}
              <section
                className="content-body load-external-scripts"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
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
  }).isRequired,
};

export default Page;
