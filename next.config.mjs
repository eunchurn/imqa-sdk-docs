const basePath = process.env.BASE_PATH || ''
const distDir = process.env.DIST_DIR || undefined
const output = process.env.OUTPUT || undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    // domains: ['codesandbox.io'],
    unoptimized: true,
  },
  basePath,
  distDir,
  output,
  // output: 'standalone',
  serverExternalPackages: ['@sparticuz/chromium'],
  trailingSlash: false,
  transpilePackages: ['next-mdx-remote'],
}

export default nextConfig
