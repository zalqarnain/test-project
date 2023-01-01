// next.config.js
var nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
};
module.exports = nextConfig;
