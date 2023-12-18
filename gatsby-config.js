module.exports = {
  siteMetadata: {
    title: '[Insert Solution Name]',
    description: 'IBM Client Engineering | [Insert Solution Name]',
    keywords: 'IBM, Client Engineering, [Insert Solution Name]',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Client Engineering | [Insert Solution Name]',
        icon: 'src/images/favicon.svg',
        short_name: '[Insert Solution Name]',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        theme: {
          homepage: 'g10',
          interior: 'g10',
        },
        isSwitcherEnabled: false,
        titleType: 'prepend',
        repository: {
          baseUrl:
            'https://github.com/ibm-client-engineering/solution-template-gatsby',
        },
      },
    },
  ],
};
