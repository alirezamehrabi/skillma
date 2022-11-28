/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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

