/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'https://dev.topbotcopier.com',
      'dev.topbotcopier.com',
      'https://ui-avatars.com',
      'ui-avatars.com',
    ],
  },
  // experimental: {
  //   appDir: true,
  // },
  // future: { webpack5: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = nextConfig;
