import React from "react";
import { FacebookProvider, Like } from 'react-facebook';
import { getAppId } from "./constants";
import { Location } from "@reach/router";
import classes from "./styles.module.css";

export const LikeButton = (props) => {
  const { includeMargin, ...buttonProps } = props;
  return (
    <div className={includeMargin ? classes.likeButtonMargin : undefined}>
      <Location>
        {({ location }) => (
          <FacebookProvider appId={getAppId(location.hostname)}>
            <Like
              href={location.href}
              colorScheme="light"
              showFaces={false}
              layout="button_count"
              {...buttonProps}
            />
          </FacebookProvider>
        )}
      </Location>
    </div>
  );
}
