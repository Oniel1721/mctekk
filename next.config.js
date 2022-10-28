/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['thispersondoesnotexist.com']
  }
}

module.exports = nextConfig
