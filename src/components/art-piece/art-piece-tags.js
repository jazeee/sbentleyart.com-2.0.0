import React from "react";
import Chip from "@material-ui/core/Chip";
import classes from "./art-piece-card.module.css";

export const ArtPieceTags = (props) => {
  const { tags } = props;
  if (!tags) {
    return null;
  }
  return (
    <>
      {tags.map(tag => {
        return (
          <Chip
            key={tag}
            color="secondary"
            label={tag}
            className={classes.tag}
          />
        );
      })}
    </>
  )
}
