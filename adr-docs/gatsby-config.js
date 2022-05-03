module.exports = {
  pathPrefix: '/architecture',
  plugins: [
    {
      resolve: '@lullabot/gatsby-theme-adr',
      options: {
        contentPath: 'adrs',
        siteMetadata: {
          siteUrl: 'https://architecture.my-company.com',
          title: "MIT Widgets' Architecture Decision Records",
          menuLinks: [
            { name: 'Home', uri: '/', iconName: 'Home' },
            { name: 'All ADRs', uri: '/adrs', iconName: 'Table' },
            {
              name: 'React ADRs',
              uri: '/adrs/react',
              iconName: 'Archive',
            },
          ],
          socialLinks: [
            {
              name: 'GitHub',
              uri: 'https://github.ibm.com/MSC-Cloud/hc-widgets',
              iconName: '',
            },
          ],
        },
      },
    },
  ],
};
