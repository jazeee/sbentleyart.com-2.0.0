import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Gallery } from "../components/gallery/gallery";

export default props => {
  const {
    pageContext: { gallery, artPieces, breadcrumbs },
  } = props;
  return (
    <Layout breadcrumbs={breadcrumbs}>
      <SEO title={gallery.name} />
      <Gallery gallery={gallery} artPieces={artPieces} />
    </Layout>
  );
};
