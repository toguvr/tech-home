module.exports = {
  env: {
    REACT_APP_API: 'https://app-sininho-staging.azurewebsites.net',
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
