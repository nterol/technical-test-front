module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
    ],
  },
  // async rewrites() {
  //   return [{ source: '/api/:path*', destination: `${process.env.API_ENDPOINT}/:path*` }];
  // },
};
