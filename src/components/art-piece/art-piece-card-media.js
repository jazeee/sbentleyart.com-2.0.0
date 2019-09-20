import React, { useState } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { ArtPieceOverlay } from "./art-piece-overlay";
import classes from "./art-piece-card.module.css";
import { getImageUrl } from "./utils";

export const ArtPieceCardMedia = props => {
  const { artPiece, height = 512, isHighRes = false } = props;
  const [imageIndex, setImageIndex] = useState(0);
  const { name, imageFiles } = artPiece;
  const imageUrl = getImageUrl(
    artPiece,
    imageIndex,
    isHighRes ? "MedRes" : "LowRes"
  );
  return (
    <CardMedia
      className={classes.media}
      style={{
        height,
      }}
      image={imageUrl}
      component={ArtPieceOverlay}
      onLeftClick={
        imageIndex > 0
          ? event => {
              setImageIndex(imageIndex - 1);
              event.preventDefault();
            }
          : null
      }
      onRightClick={
        imageIndex < imageFiles.length - 1
          ? event => {
              setImageIndex(imageIndex + 1);
              event.preventDefault();
            }
          : null
      }
    />
  );
};
