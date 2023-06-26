/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  domains: [
    "fptshop.com.vn",
    "images.prismic.io",
    "i-invdn-com.investing.com",
    "lh3.googleusercontent.com",
    "cdn-icons-png.flaticon.com",
    "cdn.pixabay.com",
    "cdn3.iconfinder.com",
    "assets.quizlet.com",
  ],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
