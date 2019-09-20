import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { theme } from "../styles/theme";
import { TargetBlankLink } from "./target-blank-link";
import "../styles/global.css";
import classes from "./layout.module.css";
import Helmet from "react-helmet";

import { Header } from "./header";

export const Layout = ({ children, breadcrumbs = [] }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" key="serif-font"/>
      </Helmet>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Header
          title={data.site.siteMetadata.title}
          breadcrumbs={breadcrumbs}
        />
        <div className={classes.mainArea}>
          <div className={classes.content}>{children}</div>
          <footer className={classes.footer}>
            <Typography variant="caption">
              Copyright © {new Date().getFullYear()}, Sarah Bentley. All rights
              reserved. Copyright and reproduction rights are reserved by the
              artist.
              <br />
              Due to the nature of the art product, all sales are final and
              non-refundable.
              <br />
              Site developed by{" "}
              <TargetBlankLink href="http://jazeee.com">
                Jaz Singh
              </TargetBlankLink>{" "}
              using Gatsby
            </Typography>
          </footer>
        </div>
      </MuiThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
