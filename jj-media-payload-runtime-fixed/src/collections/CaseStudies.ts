import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '@/lib/access'
import { slugField } from '@/lib/slugField'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  labels: { singular: 'Case Study', plural: 'Case Studies' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'client', '_status'], group: 'Portfolio' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  versions: { drafts: true, maxPerDoc: 30 },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'client', type: 'text', required: true },
    { name: 'industry', type: 'text' },
    { name: 'excerpt', type: 'textarea', required: true },
    { name: 'challenge', type: 'richText' },
    { name: 'solution', type: 'richText' },
    { name: 'result', type: 'richText' },
    { name: 'metrics', type: 'array', fields: [
      { name: 'value', type: 'text', required: true },
      { name: 'label', type: 'text', required: true },
    ]},
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'gallery', type: 'array', fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }] },
    { name: 'testimonial', type: 'relationship', relationTo: 'testimonials' },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'publishedAt', type: 'date', admin: { position: 'sidebar' } },
    { name: 'metaTitle', type: 'text', maxLength: 70, admin: { position: 'sidebar' } },
    { name: 'metaDescription', type: 'textarea', maxLength: 170, admin: { position: 'sidebar' } },
  ],
}
