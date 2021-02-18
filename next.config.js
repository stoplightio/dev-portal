const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const defaultConfig = {
  target: process.env.VERCEL ? 'experimental-serverless-trace' : 'server',

  reactStrictMode: process.env.NODE_ENV !== 'production',
};

module.exports = withPlugins([withBundleAnalyzer], defaultConfig);
