import React from "react";
import classes from "./art-piece-card.module.css";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ArtPieceCardMedia } from "./art-piece-card-media";
import { ArtPieceTags } from "./art-piece-tags";

export const ArtPieceCard = props => {
  const { artPiece } = props;
  const {
    artPieceId,
    name,
    description,
    media,
    widthInInches,
    heightInInches,
    galleryId,
    price,
    tags,
  } = artPiece;
  return (
    <Card className={classes.artPiece} elevation={0}>
      <ArtPieceCardMedia artPiece={artPiece} isHighRes />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
          {description && ` on `}
          {media && `${media}`}
          {widthInInches &&
            heightInInches &&
            ` ${widthInInches} x ${heightInInches}`}
        </Typography>
        {price &&
          <Typography variant="h6">
            Price: ${price}
          </Typography>
        }
        <ArtPieceTags tags={tags}/>
      </CardContent>
    </Card>
  );
};
