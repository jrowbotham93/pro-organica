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
          <h1 className="intro-banner-title">Get in Touch</h1>
          <p className="intro-banner-desc">
            Our main business offices are located in Blackburn (UK), where our
            team is focussed on creating new partnerhips and spreading the word
            that Ukraine's organics market is open for business!
          </p>

          <div className="contact-feed">
            <Contact></Contact>
            <Contact></Contact>

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
