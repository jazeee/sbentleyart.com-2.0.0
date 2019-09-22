module.exports = {
  siteMetadata: {
    title: `Sarah Bentley Art`,
    description: `S Bentley Studio, encaustic paintings, wood block art. Sarah Bentley is a local Madison artist. She received her MFA in painting from the University of Wisconsin Madison, and continues to work on her art from her studio, at Commonwealth Enterprise center. Her work has been shown in Wisconsin and Minnesota. Her paintings are created with a mixture of oil paint and beeswax, also known as "encaustic". Her most recent work has focused on imaginative depictions of insects and beehives. The larger than normal 4 inch depth of her canvases create a sculptural element to the art, and eliminate the need for a traditional frame.`,
    author: `@sbentley`,
    keywords: `sbentley Sarah Bentley`,
    url: "http://www.sbentleyart.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data-json`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#666`,
        theme_color: `#666`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146463563-1",
      },
    },
  ],
};
