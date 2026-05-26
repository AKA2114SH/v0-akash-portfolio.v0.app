/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This must match your repository name exactly as seen in your URL
  basePath: '/v0-akash-portfolio.v0.app',
  assetPrefix: '/v0-akash-portfolio.v0.app',
}

export default nextConfig
