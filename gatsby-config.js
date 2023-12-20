/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Memento Mori`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Rasmus Nordling's Gatsby blog.`
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};