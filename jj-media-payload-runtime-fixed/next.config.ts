import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: '**.vercel-storage.com' },
    ],
  },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  poweredByHeader: false,
  experimental: { optimizePackageImports: ['lucide-react'] },
  async redirects() {
    return [
      { source: '/leistungen/strategie-analytics', destination: '/leistungen/strategie-positionierung', permanent: true },
      { source: '/leistungen/content-creation', destination: '/leistungen/content-ugc', permanent: true },
      { source: '/leistungen/reise-tourismus', destination: '/reise-tourismus', permanent: true },
    ]
  },
}

export default withPayload(nextConfig)
