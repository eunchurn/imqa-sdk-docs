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
  serverComponentsExternalPackages: ['puppeteer-core', 'puppeteer', '@sparticuz/chromium'],
  // experimental: {
  //   serverComponentsExternalPackages: ['@react-pdf/renderer'],
  // },
  trailingSlash: false,
}

export default nextConfig
