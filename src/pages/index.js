import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Galleries } from "../components/galleries/galleries";
import { Bio } from "../components/bio";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Galleries />
    <Bio />
  </Layout>
);

export default IndexPage;
