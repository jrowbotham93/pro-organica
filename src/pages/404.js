import React from "react";
import { Link } from "gatsby";
import { Layout, SEO } from "../components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h1>Page not found!</h1>
      <p>You just hit a route that doesn&#39;t exist....</p>
      <Link to="/en-GB">Head home</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
