import type { MetadataRoute } from 'next'
import { getCollection } from '@/lib/cms'
import { fallbackCases, fallbackPosts, fallbackServices } from '@/lib/fallback'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = (process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de').replace(/\/$/, '')
  const staticPaths = ['', '/ueber-mich', '/projekte', '/leistungen', '/methode', '/social-media-audit', '/dach-social-report', '/reise-tourismus', '/kundenstimmen', '/blog', '/kontakt', '/impressum', '/datenschutz']
  const [postsData, servicesData, casesData] = await Promise.all([
    getCollection('posts', { where: { _status: { equals: 'published' } } }),
    getCollection('services', { where: { _status: { equals: 'published' } } }),
    getCollection('case-studies', { where: { _status: { equals: 'published' } } }),
  ])
  const posts = postsData.length ? postsData : fallbackPosts
  const services = servicesData.length ? servicesData : fallbackServices
  const cases = casesData.length ? casesData : fallbackCases
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
  return [
    ...staticEntries,
    ...posts.map((post: any) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...services.filter((service: any) => service.slug !== 'reise-tourismus').map((service: any) => ({ url: `${base}/leistungen/${service.slug}`, lastModified: new Date(service.updatedAt || Date.now()), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...cases.map((item: any) => ({ url: `${base}/case-studies/${item.slug}`, lastModified: new Date(item.updatedAt || item.publishedAt || Date.now()), changeFrequency: 'monthly' as const, priority: 0.75 })),
  ]
}
