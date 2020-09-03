import React from "react";
import { Layout, Card, Certification, SEO } from "../components";

const Index = data => {
  const { index } = data.pageContext;
  const {
    metadata: {
      home_banner_description,
      accreditation,
      certification_european,
      certification_united_kingdom,
      certification_cor_image,
    },
  } = index.filter(i => i.slug.toLowerCase() === "home")[0];
  const certifications = [
    {
      cert: certification_european,
      img: "prorganica-organic-certificate(EU).jpg",
    },
    {
      cert: certification_united_kingdom,
      img: "prorganica-organic-certificate(UK).jpg",
    },
    {
      cert: certification_cor_image,
      img: "prorganica-organic-certificate(COR).jpg",
    },
  ];
  return (
    <Layout isHome={true}>
      <SEO
        title="Home"
        description="This is the homepage for the proorganica site"
      />
      <section className="container ">
        <div className="intro-container">
          <h1 className="intro-banner-title">What do we do?</h1>
          <p className="intro-banner-desc">
            {home_banner_description && home_banner_description}
          </p>
          <div className="post-feed">
            {index &&
              index
                .filter(i => i.title.toLowerCase() !== "home")
                .map((i, index) => <Card key={index} data={i} />)}
          </div>
        </div>
      </section>
      <hr></hr>
      <section className="container">
        <div className="intro-container">
          <h1 className="intro-banner-title">Certified organic</h1>
          <p className="intro-banner-desc">{accreditation && accreditation}</p>
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
        <div className="intro-container">
          <h1 className="intro-banner-title">Want to get in touch?</h1>
          <p className="intro-banner-desc">
            Our main offices are located in Blackburn in the UK. We also have
            production facilities for dehulling, cleaning, sorting and packaging
            of grains in Ukraine.
          </p>

          <div className="contact-feed">
            <div className="contact-card">
              <header className="contact-card-header">
                <h1 className="contact-card-title">United Kindgom</h1>
              </header>
              <section className="contact-card-excerpt">
                <div className="contact-card-address">
                  <span>ProOrganica Limited </span>
                  <span>10 Buncer Lane Blackburn </span>
                  <span>BB2 6SE </span>
                  <span>United Kingdom</span>
                </div>
                <div className="contact-card-contacts">
                  <span className="highlight-content">Graham Bonfield: </span>
                  <span> Director </span>

                  <span className="highlight-content">
                    Luba Michailova Irina Sholokhova:{" "}
                  </span>
                  <span>Strategic Development </span>
                  <span className="highlight-content">David Jack:</span>
                  <span>
                    Business Development Sales and Marketing Support UK{" "}
                  </span>
                </div>
              </section>
              <footer className="contact-card-footer"></footer>
            </div>
            <div className="contact-card">
              <header className="contact-card-header">
                <h1 className="contact-card-title">Ukraine</h1>
              </header>
              <section className="contact-card-excerpt">
                <div className="contact-card-address">
                  <span>ProOrganica Ukraine </span>
                  <span>LLC Naberezhno-Luhova Str. 12 </span>
                  <span>04071 </span>
                  <span> Kyiv</span>
                </div>
                <div className="contact-card-contacts">
                  <span className="highlight-content">Eugene Blokhin:</span>
                  <span>Logistic and Marketing Support Ukraine</span>
                  <span className="highlight-content">Irina Sholokhova: </span>
                  <span>Quality and Certification Support Ukraine UK</span>
                </div>
              </section>
              <footer className="contact-card-footer"></footer>
            </div>
            <div className="contact-card">
              <header className="contact-card-header">
                <h1 className="contact-card-title">Get in touch!</h1>
              </header>
              <section className="contact-card-excerpt">
                <span className="highlight-content">
                  We'd love to hear from you!{" "}
                </span>
                <span>
                  Contact us if you have any questions, we would be happy to
                  help answer them.
                </span>
              </section>
              <footer className="contact-card-footer">
                <div className="contact-card-footer-left">
                  Email:
                  <a
                    className="highlight-content"
                    href="mailto:info@proorganica.com"
                  >
                    info@proorganica.com
                  </a>
                </div>
                <div className="contact-card-footer-right">
                  Ukraine Tel: +380 67 544-93-37
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
