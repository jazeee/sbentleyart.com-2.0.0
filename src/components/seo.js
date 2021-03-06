/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";
import { getAppId } from "./facebook/constants";

export function SEO({ description, lang, image, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            url
          }
        }
      }
    `
  );
  const { siteMetadata } = site;

  const metaDescription = description || siteMetadata.description;
  const metaImage = image || "http://images.sbentleyart.com/images/background.jpg";
  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:url`,
              content: location.href || `${siteMetadata.url}${pathname || "/"}`,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:image`,
              content: metaImage,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `fb:app_id`,
              content: getAppId(location.hostname),
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              name: `keywords`,
              content: siteMetadata.keywords,
            },
          ].concat(meta)}
        />
      )}
    </Location>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  pathname: PropTypes.string,
};
