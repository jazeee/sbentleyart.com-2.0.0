import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Galleries } from "../components/galleries/galleries";

const IndexPage = () => (
  <Layout>
    <SEO title="Galleries" />
    <Galleries />
  </Layout>
);

export default IndexPage;
