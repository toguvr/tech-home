module.exports = {
  env: {
    REACT_APP_API: 'https://app-sininho-staging.azurewebsites.net',
    REACT_APP_WEB: 'https://app-web-beegin.azurewebsites.net',
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};
