import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import classes from "./bio.module.css";

export const Bio = (props) => {
  return (
    <div className={classes.container}>
      <Container className={classes.bioContainer}>
        <Typography variant="h5" >
          Sarah Bentley is a local Madison artist. She received her MFA in painting from the University of Wisconsin Madison, and continues to work on her art from her studio.
        </Typography>
        <Typography variant="h5" >
          Her work has been shown in Wisconsin and Minnesota. Her paintings are created with a mixture of oil paint and beeswax, also known as "encaustic". Her most recent work has focused on imaginative depictions of insects and beehives.
        </Typography>
        <Typography variant="h5" >
          The larger than normal 4 inch depth of her canvases create a sculptural element to the art, and eliminate the need for a traditional frame.
        </Typography>
      </Container>
    </div>
  );
};
