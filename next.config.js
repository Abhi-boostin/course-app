/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['mocki.io'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig 