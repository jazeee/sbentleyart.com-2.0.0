import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';
import { getAppId } from "./constants";
import { Location } from "@reach/router";

export const CommentsBlock = (props) => {
  return (
    <Location>
      {({ location }) => (
        <FacebookProvider appId={getAppId(location.hostname)}>
          <Comments
            href={location.href}
            colorScheme="light"
            width="100%"
            {...props}
          />
        </FacebookProvider>
      )}
    </Location>
  );
}
