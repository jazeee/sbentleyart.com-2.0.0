import React from "react";
import classes from "./art-piece-overlay.module.css";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const ArtPieceOverlay = props => {
  const { onLeftClick, onRightClick, className, ...otherProps } = props;
  return (
    <div {...otherProps} className={`${className} ${classes.overlayContainer}`}>
      {onLeftClick && (
        <IconButton
          classes={{
            root: `${classes.leftButton} ${classes.overlayButton}`,
          }}
          aria-label="left"
          onClick={onLeftClick}
          disabled={!onLeftClick}
          disableFocusRipple
          disableRipple
          color="primary"
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      {onRightClick && (
        <IconButton
          classes={{
            root: `${classes.rightButton} ${classes.overlayButton}`,
          }}
          aria-label="right"
          onClick={onRightClick}
          disabled={!onRightClick}
          disableFocusRipple
          disableRipple
        >
          <ChevronRightIcon />
        </IconButton>
      )}
    </div>
  );
};
