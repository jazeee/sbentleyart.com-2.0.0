import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./gallery.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ArtPieceCard } from "../art-piece/art-piece-card";

export const Gallery = props => {
  const { description } = props.gallery;
  const { artPieces = [] } = props;
  return (
    <Container className={classes.container}>
      <Typography variant="body1">{description}</Typography>
      <Grid container spacing={2}>
        {artPieces.map(artPiece => (
          <ArtPieceCard artPiece={artPiece} key={artPiece.artPieceId} />
        ))}
      </Grid>
    </Container>
  );
};
