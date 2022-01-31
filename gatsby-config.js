module.exports = {
  siteMetadata: {
    title: 'Daniele Perazzolo\'s Portfolio',
    description:
      'This repo contains Daniele Perazzolo\'s Portfolio that is built with Gatsby, and sourced with Sanity CMS. It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
