export const getImageUrl = (gallery) => {
  const { imageFile } = gallery;
  return `http://www.sbentleyart.com/images/galleries/${imageFile}`;
};
