/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This line fix: it only adds the sub-folder if deploying to GitHub
  basePath: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/v0-akash-portfolio.v0.app' : '',
}

export default nextConfig
