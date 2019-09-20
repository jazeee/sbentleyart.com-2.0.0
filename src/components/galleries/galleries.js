import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import classes from "./galleries.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ForwardRefLink } from "../link";

export const Galleries = props => {
  const data = useStaticQuery(graphql`
    query Galleries {
      allGalleriesJson {
        nodes {
          id
          name
          imageFile
          description
        }
      }
    }
  `);
  const { nodes } = data.allGalleriesJson;
  return (
    <Container className={classes.container}>
      <Typography variant="h3" color="primary">Galleries</Typography>
      <Grid container spacing={2}>
        {nodes.map(node => {
          const { id, name, imageFile, description } = node;
          const targetLink = `/galleries/${id}`;
          const imageUrl = `http://www.sbentleyart.com/images/galleries/${imageFile}`;
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <Card className={classes.gallery}>
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
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
};
