import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import classes from "./bio.module.css";

export const Bio = props => {
  return (
    <div className={classes.container}>
      <Container className={classes.bioContainer}>
        <Typography variant="h5">
          Sarah Bentley received her MFA in painting from the University of
          Wisconsin Madison. Sarah produces her art from her studio in Redwood
          City, CA.
        </Typography>
        <Typography variant="h5">
          Her work has been shown in Wisconsin and Minnesota. She is known for
          creating paintings with a mixture of oil paint and beeswax, also known
          as "encaustic". Her most recent work has focused on imaginative
          depictions of insects and beehives.
        </Typography>
        <Typography variant="h5">
          Sarah's imaginative creations include sea creatures, imaginative
          beasts, vibrant flowers, and wood block sculptures.
        </Typography>
      </Container>
    </div>
  );
};
