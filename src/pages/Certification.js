import React from "react";
import { Layout, Section, Grid, Links, Card, Image, SEO } from "../components";
import findImageOwner from "../utils/helper";

const Certification = ({ pageContext }) => {
  const { certification } = pageContext;
  const [
    {
      metadata: { affiliates, affiliates_list, affiliate_header },
    },
  ] = certification;

  const affiliateList = Object.entries(affiliates_list);
  //   const contactsList = contact_list?.contact_list_details;

  console.log(affiliateList);

  return (
    <Layout>
      <SEO
        title={"Certification"}
        description={"Certification page with downloadable pdf certificates"}
      />
      {/* <Section description={certiciationDesc} title={certification_header}>
        <Grid id="certification" className="grid-primary">
          {certsArray.map((certs, index) => {
            return (
              <Card key={index}>
                <Links
                  alt={`ProOrganica certifications`}
                  href={certs.pdf.imgix_url}
                  target="_blank"
                >
                  <Image image={certs.img.imgix_url} />
                </Links>
              </Card>
            );
          })}
        </Grid>
      </Section>
      <hr /> */}

      <Section title={affiliate_header} description={affiliates}>
        <Grid className="grid-secondary spacing-v-lg">
          {affiliateList.map((affiliate, index) => {
            return (
              //   <Card
              //     key={index}
              //     // button
              //     // label={"download certificate"}
              //     className=""
              //   >
              <Image label="affiliate logo" image={affiliate[1].imgix_url} />
              //   </Card>
            );
          })}
        </Grid>
      </Section>
    </Layout>
  );
};

export default Certification;
