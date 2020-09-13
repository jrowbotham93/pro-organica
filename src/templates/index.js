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
      contact_details,
      get_in_touch,
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

  const about = new RegExp("Our values|Our story", "gi");
  const business = new RegExp(
    "What we offer|Why Ukraine|Our customers|About us",
    "gi"
  );

  const card = reg => index.filter(i => i.title.match(reg));

  return (
    <Layout isHome={true}>
      <SEO
        title="Home"
        description="This is the homepage for the proorganica site"
      />
      <section className="container ">
        <div className="central-container">
          <h1 className="central-banner-title">What do we do?</h1>

          <p className="central-banner-desc">
            {home_banner_description && home_banner_description}
          </p>

          <div className="post-feed">
            {card(business).map((i, index) => (
              <Card key={index} data={i} />
            ))}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container">
        <div className="central-container">
          <h1 className="central-banner-title">Products</h1>
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
          <h1 className="central-banner-title">Who are we?</h1>
          <p className="central-banner-desc">{who_are_we && who_are_we}</p>

          <div className="post-feed">
            {card(about).map((i, index) => (
              <Card key={index} data={i} />
            ))}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container">
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
          <h1 className="central-banner-title">Get in touch</h1>
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
