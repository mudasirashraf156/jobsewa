/** @type {import('next').NextConfig} */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["api.dicebear.com", "xsgames.co", "res.cloudinary.com"],
  },

  eslint: {
    ignoreDuringBuilds: true, // IMPORTANT for Vercel
  },

  webpack: (config, { isServer }) => {
    // Copy pdf worker only for client build
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(
                __dirname,
                "node_modules/pdfjs-dist/build/pdf.worker.min.js"
              ),
              to: path.join(__dirname, "public"),
            },
          ],
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
