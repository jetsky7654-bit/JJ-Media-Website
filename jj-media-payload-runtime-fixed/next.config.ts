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
}

export default withPayload(nextConfig)
