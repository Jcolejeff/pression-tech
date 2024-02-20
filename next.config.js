/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      });

      return config;
   },
   images: {
      domains: ["https://i0.wp.com/techpression.com"],
   },
   eslint: {
      ignoreDuringBuilds: true,
   },
};

module.exports = nextConfig;
