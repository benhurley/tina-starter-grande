const theme = require("./content/settings/theme.json")
const site = require("./content/settings/site.json")

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-tinacms-json`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
          theme: {
            color: {
              primary: {
                light: theme.color.primary,
                medium: theme.color.primary,
                dark: theme.color.primary,
              },
            },
          },
        },
        plugins: ["gatsby-tinacms-remark",
        {
          resolve: 'gatsby-tinacms-git',
            options: {
              pushOnCommit: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/siteLayout.js`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: site.title,
        short_name: site.title,
        start_url: `/`,
        background_color: theme.color.primary,
        theme_color: theme.color.primary,
        display: `minimal-ui`,
        icon: `content/images/stock-chart.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 880,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,700"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://dev.us4.list-manage.com/subscribe/post?u=a38ee5cfd956e8a3181e097a9&amp;id=34ae01c4a6',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://dev.us4.list-manage.com/subscribe/post?u=a38ee5cfd956e8a3181e097a9&amp;id=34ae01c4a6',
          timeout: 3500,
      },
    },
  ],
}
