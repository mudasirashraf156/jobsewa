/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["api.dicebear.com", "xsgames.co", "res.cloudinary.com"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
