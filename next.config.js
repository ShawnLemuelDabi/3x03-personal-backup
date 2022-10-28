const headers = require('./headers');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
};
