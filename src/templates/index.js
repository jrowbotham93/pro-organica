import React from "react";
import { Layout, Card, Certification, SEO, Contact } from "../components";

const Index = data => {
  const { index } = data.pageContext;
  const {
    metadata: {
      home_banner_description,
      certification,
      certification_eu,
      certification_uk,
      certification_cor,
      certification_header,
      who_are_we,
      products,
      products_table,
      what_do_we_do_header,
      who_are_we_header,
      product_header,
      get_in_touch_header,
      contact_details,
      get_in_touch,
      read_more_button,
    },
  } = index.filter(i => i.slug.toLowerCase() === "home")[0];

  const certifications = [
    {
      cert: certification_eu,
      img: "prorganica-organic-certificate(EU).jpg",
    },
    {
      cert: certification_uk,
      img: "prorganica-organic-certificate(UK).jpg",
    },
    {
      cert: certification_cor,
      img: "prorganica-organic-certificate(COR).jpg",
    },
  ];

  const about = new RegExp("our-values|our-story", "gi");
  const business = new RegExp(
    "what-we-offer|why-ukraine|our-customers|about",
    "gi"
  );

  const card = reg => index.filter(i => i.slug.match(reg));

  return (
    <Layout isHome={true}>
      <SEO title="Home" description="Homepage for proOrganica" />
      <section className="container ">
        <div className="central-container">
          <h1 className="central-banner-title">
            {what_do_we_do_header && what_do_we_do_header}
          </h1>

          <p className="central-banner-desc">
            {home_banner_description && home_banner_description}
          </p>

          <div className="post-feed">
            {card(business).map((i, index) => (
              <Card key={index} data={i} buttonText={read_more_button} />
            ))}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container">
        <div className="central-container">
          <h1 className="central-banner-title">
            {product_header && product_header}
          </h1>
          <p className="central-banner-desc"> {products && products}</p>

          <div className="table-wrapper">
            <div
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: products_table }}
            />
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container ">
        <div className="central-container">
          <h1 className="central-banner-title">
            {who_are_we_header && who_are_we_header}
          </h1>
          <p className="central-banner-desc">{who_are_we && who_are_we}</p>

          <div className="post-feed">
            {card(about).map((i, index) => (
              <Card key={index} data={i} buttonText={read_more_button} />
            ))}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container" id="certification">
        <div className="central-container">
          <h1 className="central-banner-title">
            {certification_header && certification_header}
          </h1>
          <p className="central-banner-desc">
            {certification && certification}
          </p>
          <div className="certification-feed">
            {certifications &&
              certifications.map((i, index) => (
                <Certification key={index} data={i} />
              ))}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container" id="contact">
        <div className="central-container">
          <h1 className="central-banner-title">
            {get_in_touch_header && get_in_touch_header}
          </h1>
          <p className="central-banner-desc">{get_in_touch && get_in_touch}</p>
          <hr></hr>

          <div className="contact-feed">
            {contact_details.contact &&
              contact_details.contact.map((contact, i) => (
                <Contact key={i} data={contact} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
