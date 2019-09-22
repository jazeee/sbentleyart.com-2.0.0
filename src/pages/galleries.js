import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Galleries } from "../components/galleries/galleries";

const IndexPage = (props) => (
  <Layout>
    <SEO
      title="Galleries"
      pathname={props.location.pathname}
    />
    <Galleries />
  </Layout>
);

export default IndexPage;
