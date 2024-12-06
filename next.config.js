/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.urfrenpaco.com",
      },
    ],
  },
  env: {
    CLOUDFLARE_STORAGE: "", //"https://images.urfrenpaco.com",
  },
};

module.exports = nextConfig;
