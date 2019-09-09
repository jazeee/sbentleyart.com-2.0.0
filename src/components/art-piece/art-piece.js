import React from "react";
import classes from "./art-piece.module.css";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ArtPieceCardMedia } from "./art-piece-card-media";

export const ArtPiece = props => {
  const { artPiece } = props;
  const { description } = artPiece;
  return (
    <Container className={classes.container}>
      <Typography variant="body1">{description}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} md={8} lg={8}>
          <Card className={classes.artPiece}>
            <ArtPieceCardMedia artPiece={artPiece} height={512} isHighRes />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
