/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {
  env: {
    webURL: 'https://skillma-api.shinypi.net',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ftp.shinypi.net"],
  },
}

module.exports = withVideos(nextConfig)

// const withVideos = require('next-videos')
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   rules: [
//     {
//       test: /\.mp4$/i,
//       loader: "html-loader",
//     },
//   ],
// }

// module.exports = nextConfig

