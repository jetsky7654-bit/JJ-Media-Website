import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'

import { CaseStudies } from '@/collections/CaseStudies'
import { Leads } from '@/collections/Leads'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Services } from '@/collections/Services'
import { Testimonials } from '@/collections/Testimonials'
import { Users } from '@/collections/Users'
import { Navigation } from '@/globals/Navigation'
import { SiteSettings } from '@/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseURL =
  process.env.DATABASE_URI ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL

const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL

const serverURL = (
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (vercelHost ? `https://${vercelHost}` : 'http://localhost:3000')
).replace(/\/$/, '')

const allowedOrigins = Array.from(
  new Set(
    [
      serverURL,
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
      process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : undefined,
    ].filter(Boolean) as string[],
  ),
)

export default buildConfig({
  serverURL,
  secret:
    process.env.PAYLOAD_SECRET ||
    'local-development-secret-change-before-production',
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' · JJ-Media CMS',
      icons: [{ rel: 'icon', url: '/favicon.svg' }],
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 390, height: 844 },
        { label: 'Tablet', name: 'tablet', width: 820, height: 1180 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString:
        databaseURL ||
        'postgresql://postgres:postgres@127.0.0.1:5432/jj_media',
      max: process.env.NODE_ENV === 'production' ? 3 : 10,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : undefined,
    },
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  collections: [
    Pages,
    Posts,
    Services,
    CaseStudies,
    Testimonials,
    Media,
    Leads,
    Users,
  ],
  globals: [SiteSettings, Navigation],
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts', 'services', 'case-studies'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) =>
        doc?.title ? `${doc.title} | JJ-Media` : 'JJ-Media',
      generateURL: ({ doc, collectionConfig }) => {
        const base = serverURL.replace(/\/$/, '')
        const pathMap: Record<string, string> = {
          posts: 'blog',
          services: 'leistungen',
          'case-studies': 'case-studies',
          pages: '',
        }
        const collectionSlug = collectionConfig?.slug || 'pages'
        return `${base}/${pathMap[collectionSlug] || collectionSlug}/${doc?.slug || ''}`.replace(
          /([^:]\/)\/+/, '$1',
        )
      },
    }),
  ],
  cors: allowedOrigins,
  csrf: allowedOrigins,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
})
