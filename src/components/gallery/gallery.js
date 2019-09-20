import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./gallery.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { GalleryCard } from "./gallery-card";

export const Gallery = props => {
  const { description, extraDescription } = props.gallery;
  const { artPieces = [] } = props;
  return (
    <Container className={classes.container}>
      <Typography variant="h3" color="primary" className={classes.description}>{description}</Typography>
      {extraDescription &&
        <Typography variant="h5" color="primary" className={classes.description}>{extraDescription}</Typography>
      }
      <Grid container spacing={2}>
        {artPieces.map(artPiece => {
          return <GalleryCard artPiece={artPiece} key={artPiece.artPieceId} />
        })}
      </Grid>
    </Container>
  );
};
