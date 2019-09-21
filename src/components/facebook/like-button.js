import React from "react";
import { FacebookProvider, Like } from 'react-facebook';
import { APP_ID } from "./constants";
import { Location } from "@reach/router";
import classes from "./styles.module.css";

export const LikeButton = (props) => {
  const { includeMargin, ...buttonProps } = props;
  return (
    <div className={includeMargin ? classes.likeButtonMargin : undefined}>
      <FacebookProvider appId={APP_ID}>
        <Location>
          {({ location }) => (
            <Like
              href={location.href}
              colorScheme="light"
              showFaces={false}
              layout="button_count"
              {...buttonProps}
            />
          )}
        </Location>
      </FacebookProvider>
    </div>
  );
}
