import React from "react";

const Address = ({
  building,
  address,
  name,
  street,
  postcode,
  city,
  country,
}) => {
  return (
    <figure>
      <ul>
        <h2 className="font-green">{name}</h2>
        <li>{address}</li>
        <li>{building}</li>
        <li>{street}</li>
        <li>{postcode}</li>
        <li>{city}</li>
        <li>{country}</li>
      </ul>{" "}
    </figure>
  );
};

export default Address;
