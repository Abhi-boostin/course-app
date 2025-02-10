/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/course-app',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 