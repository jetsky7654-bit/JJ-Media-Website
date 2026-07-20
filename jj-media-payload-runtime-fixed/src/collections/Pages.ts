import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '@/lib/access'
import { slugField } from '@/lib/slugField'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Seite', plural: 'Seiten' },
  admin: { useAsTitle: 'title', group: 'Website' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  versions: { drafts: { autosave: true }, maxPerDoc: 30 },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'eyebrow', type: 'text' },
    { name: 'headline', type: 'text', required: true },
    { name: 'intro', type: 'textarea' },
    { name: 'content', type: 'richText' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaHref', type: 'text' },
    { name: 'metaTitle', type: 'text', maxLength: 70, admin: { position: 'sidebar' } },
    { name: 'metaDescription', type: 'textarea', maxLength: 170, admin: { position: 'sidebar' } },
    { name: 'canonicalURL', type: 'text', admin: { position: 'sidebar' } },
    { name: 'noIndex', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
  ],
}
