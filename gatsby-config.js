module.exports = {
  siteMetadata: {
    title: `Mbk starter`,
    description: `This is a gatsby starter with sanity.io as a backend`,
    author: `MBK`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeOnly: ["styles/", "components/"]
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "im9as0zq",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token:
          "skA2w8j0qC7hBFvhTQwvOKTWCreUIcOsCB8uBthfF5xx0py7P1EAPmqjgbX8UnTYuCOSt43V91nyu5j8gwdyAWgYpXtb6x8Qieero7S2fDUVslF07LxCGqlaJOwds1fqef2KND8pIVBLWEwRt4RgU9Ye9wtzgdBaoyXGm9O4NCpDxhHUlucH"
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `enter_visual_`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mbk`,
        short_name: `Mbk`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ]
};
