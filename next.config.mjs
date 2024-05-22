import optimizeLocales from '@react-aria/optimize-locales-plugin'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [
      'rsc-mdx',
      '@shikijs/twoslash',
      '@shikijs/rehype',
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.plugins.push(
      optimizeLocales.webpack({
        locales: ['en-US'],
      }),
    )
    return config
  },
}

if (process.env.ANALYZE === 'true') {
  nextConfig = withBundleAnalyzer()(nextConfig)
}

export default nextConfig
