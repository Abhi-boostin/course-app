/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mocki.io'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig 