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
  console.log(name);
  return (
    <figure className="flex-grow-one spacing-v-sm">
      <ul className="text-small">
        <h2 className="spacing-v-sm">{name}</h2>
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
