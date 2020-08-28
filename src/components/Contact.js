import React from "react";
import PropTypes from "prop-types";
// import moment from "moment";

const Contact = pages => {
  return (
    <div className="contact-card">
      <header className="contact-card-header">
        <h2 className="contact-card-title">ProOrganica Limited (UK)</h2>
      </header>
      <section className="contact-card-excerpt">
        <div className="contact-card-address">
          <span>ProOrganica Limited </span>
          <span>10 Buncer Lane Blackburn </span>
          <span>BB2 6SE </span>
          <span>United Kingdom</span>
        </div>
        <div className="contact-card-contacts">
          <span>Graham Bonfield: Director </span>
          <span>Luba Michailova Irina Sholokhova: Strategic Development </span>
          <span>
            David Jack: Business Development Sales and Marketing Support UK{" "}
          </span>
        </div>
      </section>
      <footer className="contact-card-footer">
        <div className="contact-card-footer-left">
          Email: info@proorganica.com{" "}
        </div>
        <div className="contact-card-footer-right">
          Ukraine Tel: +380 67 544-93-37
        </div>
      </footer>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    // slug: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
    // excerpt: PropTypes.string,
  }),
};

export default Contact;
