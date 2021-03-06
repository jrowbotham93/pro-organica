import React from "react";

const Contact = ({ name, position, email, telephone, styles }) => {
  return (
    <figure className="spacing-v-sm">
      <div className={`flex flex-wrap ${styles || ""}`}>
        <ul>
          <li>{name}</li>
          <li>{position}</li>
          <li>
            <a
              className="text-emphasis darken"
              href={`mailto:${email}`}
              rel="noreferrer"
            >
              {email}{" "}
            </a>
          </li>
          <li>
            <a className="dark-darken" href={`tel:+${telephone}`}>
              {telephone}
            </a>
          </li>
        </ul>
      </div>
    </figure>
  );
};

export default Contact;
