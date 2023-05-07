/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: "/inbox",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/inbox",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
