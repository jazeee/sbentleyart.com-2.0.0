import React from "react";
import classes from "./gallery.module.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { ForwardRefLink } from "../link";
import Typography from "@material-ui/core/Typography";
import { getImageUrl } from "../art-piece/utils";
import { LikeButton } from "../facebook/like-button";
import { Location } from "@reach/router";

export const GalleryCard = props => {
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
  const imageUrl = getImageUrl(
    artPiece,
    0,
    "LowRes"
  );
  const targetLink = `/galleries/${galleryId}/art-pieces/${artPieceId}`;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.galleryCard}>
        <ForwardRefLink to={targetLink}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
          />
        </ForwardRefLink>
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
              ` ${widthInInches}" x ${heightInInches}"`}
          </Typography>
          <Location>
            {({location}) => (
              <LikeButton href={`${location.origin}${targetLink}`}/>
            )}
          </Location>
        </CardContent>
      </Card>
    </Grid>
  );
};
