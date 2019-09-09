export const getImageUrl = (artPiece, imageIndex, quality = "LowRes") => {
  const { galleryId, imageFiles } = artPiece;
  const firstImage = imageFiles[0];
  const image = imageFiles[imageIndex] || firstImage;
  switch (quality) {
    case "LowRes":
    default:
      return `http://www.sbentleyart.com/images/art-2.0/LowRes/${galleryId}LowRes/${image}`;
    case "MedRes":
      return `http://www.sbentleyart.com/images/art-2.0/MedRes/${galleryId}/${image}`;
    case "FullRes":
      return `http://www.sbentleyart.com/images/art-2.0/${galleryId}/${image}`;
  }
};
