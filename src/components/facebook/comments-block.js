import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';
import { APP_ID } from "./constants";
import { Location } from "@reach/router";

export const CommentsBlock = (props) => {
  return (
    <FacebookProvider appId={APP_ID}>
      <Location>
        {({ location }) => (
          <Comments
            href={location.href}
            colorScheme="light"
            width="100%"
            {...props}
          />
        )}
      </Location>
    </FacebookProvider>
  );
}
