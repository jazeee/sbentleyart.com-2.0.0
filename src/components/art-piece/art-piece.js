import React from "react";
import classes from "./art-piece.module.css";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { ArtPieceCard } from "./art-piece-card";

export const ArtPiece = props => {
  const { artPiece } = props;
  return (
    <Container className={classes.container}>
      <ArtPieceCard artPiece={artPiece} />
    </Container>
  );
};
