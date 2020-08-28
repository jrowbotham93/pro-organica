import React from "react";
import { Layout, Card, Certification, SEO, Contact } from "../components";

const Index = data => {
  const { index } = data.pageContext;
  const {
    metadata: {
      home_banner_description,
      accreditation,
      certification_european,
      certification_united_kingdom,
      certification_united_kingdom_image,
      certification_european_image,
      certification_cor_image,
      certification_cor,
    },
  } = index.filter(i => i.slug.toLowerCase() === "home")[0];
  const certifications = [
    { cert: certification_european, img: certification_european_image },
    {
      cert: certification_united_kingdom,
      img: certification_united_kingdom_image,
    },
    {
      cert: certification_cor_image,
      img: certification_cor,
    },
  ];
  return (
    <Layout isHome={true}>
      <SEO title="Home" />
      <section className="container ">
        <div className="intro-container">
          <h1 className="intro-banner-title">What do we do?</h1>
          <p className="intro-banner-desc">{home_banner_description}</p>
          <div className="post-feed">
            {index &&
              index
                .filter(i => i.title.toLowerCase() !== "home")
                .map((i, index) => <Card key={index} data={i} />)}
          </div>
        </div>
      </section>
      {/* <section className="container ">
        <div className="intro-container">
          <h1 className="intro-banner-title">What do we want?</h1>
          <p className="intro-banner-desc">
            We want to spread the word that Ukraine's organics market is open
            for business! Our main business offices are located in Blackburn
            (UK), where we are working hard to form partnerships and create
            connections between the UK and the Ukraine Why the Ukraine?
          </p>
        </div>
      </section> */}

      <section className="container">
        <div className="intro-container">
          <h1 className="intro-banner-title">Certified organic</h1>
          <p className="intro-banner-desc">{accreditation}</p>
          <div className="post-feed">
            {certifications.map((i, index) => (
              <Certification key={index} data={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="container" id="contact">
        <div className="intro-container">
          <h1 className="intro-banner-title">Want to get in Touch?</h1>
          <p className="intro-banner-desc">
            We'd love to hear from you! Contact us if you have any questions, we
            would be happy to help answer them.
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

            {/* <div>
              <h2>ProOrganica Ukraine</h2>
              <div>
                ProOrganica Ukraine Processor and Supply partner CHEMEX LIMITED,
                LLC Naberezhno-Luhova Str. 12 Kyiv 04071
              </div>
              <div>
                Eugene Blokhin: Logistic and Marketing Support Ukraine Irina
                Sholokhova: Quality and Certification Support Ukraine
              </div>
              <div>
                Ukraine Tel: +380 67 544-93-37 Email: info@proorganica.com
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
