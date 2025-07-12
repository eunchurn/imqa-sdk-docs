const basePath = process.env.BASE_PATH || ''
const distDir = process.env.DIST_DIR || undefined
const output = process.env.OUTPUT || undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    // domains: ['codesandbox.io'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'api.github.com',
      },
    ],
  },
  basePath,
  distDir,
  // output,
  output: 'standalone',
  serverExternalPackages: ['@sparticuz/chromium', '@octokit/core'],
  trailingSlash: false,
  transpilePackages: ['next-mdx-remote'],
  // Enable experimental features for better SSR performance
  // experimental: {
  //   serverComponentsExternalPackages: ['@octokit/core'],
  // },
  // Add headers for better caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' }],
      },
    ]
  },
}

export default nextConfig
