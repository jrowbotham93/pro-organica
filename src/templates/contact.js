import React from "react";
import {
  Layout,
  Section,
  Grid,
  SEO,
  Address,
  Card,
  Image,
  Contact as Profile,
} from "../components";
import findImageOwner from "../utils/helper";

const Contact = ({ pageContext }) => {
  const { contact } = pageContext;
  const [
    {
      metadata: { contact_list, get_in_touch, get_in_touch_header },
    },
  ] = contact;

  const addressList = contact_list?.address_list;
  const contactsList = contact_list?.contact_list_details;

  return (
    <Layout>
      <SEO
        title={"Contact"}
        description={"Contact page for ProOrganica UK and Ukraine"}
      />
      <Section
        id="contact"
        description={get_in_touch}
        title={get_in_touch_header}
        className="flex-center-horizontal flex-center-vertical"
      >
        <Grid className="grid-secondary">
          {addressList &&
            addressList.map(
              (
                { address, country, city, name, building, postcode, street },
                index
              ) => (
                <Address
                  key={index}
                  building={building}
                  street={street}
                  name={name}
                  postcode={postcode}
                  city={city}
                  country={country}
                  address={address}
                />
              )
            )}
        </Grid>

        <Grid className="grid-secondary spacing-v-lg">
          {contact_list &&
            findImageOwner(contactsList, contact_list).map(
              ({ card, name, image, position, email, telephone }, index) => {
                return (
                  <Card key={`${index}-${name}`}>
                    <>
                      {card ? (
                        // <div>
                        <Image
                          label={`Image of ${name}, ${position} at ProOrganica`}
                          image={image.imgix_url}
                          styles="border-radius-top"
                        />
                      ) : (
                        // </div>
                        ""
                      )}
                      <Profile
                        name={name}
                        position={position}
                        email={email}
                        telephone={telephone}
                      ></Profile>
                    </>
                  </Card>
                );
              }
            )}
        </Grid>
      </Section>
    </Layout>
  );
};

export default Contact;
