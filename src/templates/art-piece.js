import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ArtPiece } from "../components/art-piece/art-piece";

export default props => {
  const {
    pageContext: { artPiece, breadcrumbs },
  } = props;
  console.log(artPiece);
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO title={artPiece.name} />
      <ArtPiece artPiece={artPiece} />
    </Layout>
  );
};
