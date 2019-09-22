/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const artPieceTemplate = path.resolve(`src/templates/art-piece.js`);
  const galleryTemplate = path.resolve(`src/templates/gallery.js`);
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allArtPiecesJson(limit: $limit) {
          edges {
            node {
              id
              imageFiles
              galleryId
              description
              depthInInches
              heightInInches
              isFeatured
              name
              media
              price
              status
              tags
              widthInInches
            }
          }
        }
        allGalleriesJson(limit: $limit) {
          edges {
            node {
              id
              name
              imageFile
              description
              extraDescription
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    const { allArtPiecesJson, allGalleriesJson } = result.data;
    const sourceGalleries = allGalleriesJson.edges.map(edge => {
      const { node } = edge;
      return node;
    });
    const sourceArtPieces = allArtPiecesJson.edges.map(edge => {
      const { node } = edge;
      const artPieceId = node.imageFiles[0].replace(/\..*$/, "").toLowerCase();
      return {
        ...node,
        artPieceId,
      };
    });
    sourceArtPieces.forEach(artPiece => {
      const { name, artPieceId, galleryId } = artPiece;
      const galleryPath = `galleries/${galleryId}/`;
      const gallery =
        sourceGalleries.find(gallery => gallery.id === galleryId) || {};
      const path = `galleries/${galleryId}/art-pieces/${artPieceId}/`;
      const breadcrumbs = [
        {
          name: gallery.name || galleryId,
          path: `/${galleryPath}`,
        },
        {
          name,
        },
      ];
      createPage({
        path,
        component: artPieceTemplate,
        context: {
          artPiece,
          breadcrumbs,
        },
      });
    });
    sourceGalleries.forEach(gallery => {
      const { id } = gallery;
      const artPieces = sourceArtPieces.filter(
        artPiece => artPiece.galleryId === id
      );
      const path = `galleries/${id}/`;
      const breadcrumbs = [
        {
          name: gallery.name || id,
        },
      ];
      createPage({
        path,
        component: galleryTemplate,
        context: {
          gallery,
          artPieces,
          breadcrumbs,
        },
      });
    });
  });
};
