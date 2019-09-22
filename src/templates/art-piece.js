import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ArtPiece } from "../components/art-piece/art-piece";
import { getImageUrl } from "../components/art-piece/utils";

export default props => {
  const {
    pageContext: { artPiece, breadcrumbs },
  } = props;
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO
        title={artPiece.name}
        description={artPiece.description || "Art by Sarah Bentley"}
        image={getImageUrl(artPiece, 0)}
        pathname={props.location.pathname}
      />
      <ArtPiece artPiece={artPiece} />
    </Layout>
  );
};
