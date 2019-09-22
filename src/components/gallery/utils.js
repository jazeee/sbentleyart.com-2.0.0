export const getImageUrl = (gallery) => {
  const { imageFile } = gallery;
  return `http://images.sbentleyart.com/images/galleries/${imageFile}`;
};
