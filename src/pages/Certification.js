import React from "react";
import { Layout, Section, Grid, Links, Image, SEO } from "../components";

const Certification = ({ pageContext = {} }) => {
  if (!pageContext) return;
  const { certification } = pageContext;
  const [
    {
      metadata: { affiliates, affiliates_list, affiliate_header },
    },
  ] = certification;

  const {
    logo_organic_food_federation,
    pdf_organic_food_federation,
    logo_organic_standard,
    pdf_organic_standard,
    logo_organic_eu,
    logo_organic_ukraine,
  } = affiliates_list;

  const federation = [
    logo_organic_food_federation,
    pdf_organic_food_federation,
  ];
  const standard = [logo_organic_standard, pdf_organic_standard];

  const affiliateList = [
    standard,
    federation,
    logo_organic_eu,
    logo_organic_ukraine,
  ];

  return (
    <Layout>
      <SEO
        title={"Certification"}
        description={"Certification page with downloadable pdf certificates"}
      />

      <Section title={affiliate_header} description={affiliates}>
        <Grid className="grid-tertiary spacing-v-lg">
          {affiliateList.map((certs, index, array) => (
            <>
              {certs.length ? (
                <Links
                  key={index}
                  alt={`ProOrganica certifications`}
                  href={certs[1]?.imgix_url}
                  target="_blank"
                >
                  <Image image={certs[0]?.imgix_url} />
                </Links>
              ) : (
                <Image key={index} image={certs?.imgix_url} />
              )}
            </>
          ))}
        </Grid>
      </Section>
    </Layout>
  );
};

export default Certification;
