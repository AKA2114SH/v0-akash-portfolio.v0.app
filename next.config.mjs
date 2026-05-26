/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure the basePath matches your current repository name exactly
  basePath: '/akash-portfolio-2026', 
}

export default nextConfig
