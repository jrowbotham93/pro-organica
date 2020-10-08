import React from "react";

const Contact = ({ data }) => {
  const { address, contacts } = data;
  return (
    <div className="contact-card">
      <header className="contact-card-header">
        <h1 className="contact-card-title">{data.name}</h1>
      </header>

      <section className="contact-card-excerpt">
        <div className="contact-card-address">
          <span className="highlight-text">{address.building}</span>
          {/* {address.address && <span>{address.address}</span>} */}
          <span>{address.street}</span>
          <span>{address.postcode}</span>
          <span>{address.city} </span>
          <span>{address.country}</span>
        </div>

        <div className="contact-card-contacts">
          {contacts.map((contact, key) => (
            <div className="contact-card-contacts-item" key={key}>
              <span className="highlight-content">{contact.name}</span>
              <span> {contact.position} </span>
              <a href={`mailto:${contact.email}`} rel="noreferrer">
                {" "}
                {contact.email}{" "}
              </a>
              <span>{contact.telephone}</span>
            </div>
          ))}
        </div>
      </section>
      <footer className="contact-card-footer"></footer>
    </div>
  );
};

export default Contact;
