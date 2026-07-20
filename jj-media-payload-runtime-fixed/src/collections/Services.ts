import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '@/lib/access'
import { slugField } from '@/lib/slugField'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: { singular: 'Leistung', plural: 'Leistungen' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'order', '_status'], group: 'Angebot' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  versions: { drafts: true, maxPerDoc: 30 },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'eyebrow', type: 'text', defaultValue: 'Leistung' },
    { name: 'shortDescription', type: 'textarea', required: true },
    { name: 'description', type: 'richText', required: true },
    { name: 'benefits', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
    { name: 'icon', type: 'text', admin: { description: 'Optionaler Icon-Name für das Frontend' } },
    { name: 'featuredImage', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number', defaultValue: 10, admin: { position: 'sidebar' } },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Kostenlos beraten lassen' },
    { name: 'ctaHref', type: 'text', defaultValue: '/kontakt' },
    { name: 'metaTitle', type: 'text', maxLength: 70, admin: { position: 'sidebar' } },
    { name: 'metaDescription', type: 'textarea', maxLength: 170, admin: { position: 'sidebar' } },
  ],
}
