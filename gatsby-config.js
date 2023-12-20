/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Title of my Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`, // some weird error
  ],
};