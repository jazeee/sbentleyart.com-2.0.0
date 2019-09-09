import React from "react";
import Link from "@material-ui/core/Link";

export const TargetBlankLink = props => {
  const { children, ...otherProps } = props;
  return (
    <Link
      color="secondary"
      {...otherProps}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
