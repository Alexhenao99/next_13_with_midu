/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['api.dicebear.com'],
    loader: 'default',
    path: ''
  }
}

module.exports = nextConfig
