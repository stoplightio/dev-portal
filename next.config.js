const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const defaultConfig = {
  reactStrictMode: process.env.NODE_ENV !== 'production',
};

module.exports = withPlugins([withBundleAnalyzer], defaultConfig);
