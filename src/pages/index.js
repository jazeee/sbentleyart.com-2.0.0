import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Galleries } from "../components/galleries/galleries";
import { Bio } from "../components/bio";
import { LikeButton } from "../components/facebook/like-button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Galleries />
    <Bio />
    <LikeButton includeMargin />
  </Layout>
);

export default IndexPage;
