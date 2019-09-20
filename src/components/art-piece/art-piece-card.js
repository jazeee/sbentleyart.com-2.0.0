import React from "react";
import classes from "./art-piece-card.module.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { ForwardRefLink } from "../link";
import Typography from "@material-ui/core/Typography";
import { ArtPieceCardMedia } from "./art-piece-card-media";

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
  } = artPiece;
  const targetLink = `/galleries/${galleryId}/art-pieces/${artPieceId}`;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.artPiece}>
        <ForwardRefLink to={targetLink}>
          <ArtPieceCardMedia artPiece={artPiece} />
        </ForwardRefLink>
        <CardContent>
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
        </CardContent>
      </Card>
    </Grid>
  );
};
