import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '@/lib/access'
import { slugField } from '@/lib/slugField'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Fachartikel', plural: 'Fachartikel' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'publishedAt', '_status'], group: 'SEO & Wissen' },
  access: { create: authenticated, delete: authenticated, read: authenticatedOrPublished, update: authenticated },
  versions: { drafts: { autosave: true, schedulePublish: true }, maxPerDoc: 50 },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'excerpt', type: 'textarea', required: true, maxLength: 300 },
    { name: 'content', type: 'richText', required: true },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'author', type: 'relationship', relationTo: 'users' },
    { name: 'category', type: 'text' },
    { name: 'searchIntent', type: 'text', admin: { description: 'Welche konkrete Suchfrage beantwortet der Artikel?' } },
    { name: 'keyTakeaways', type: 'array', fields: [{ name: 'text', type: 'text', required: true }] },
    { name: 'faqs', type: 'array', label: 'FAQ-Inhalte', fields: [
      { name: 'question', type: 'text', required: true },
      { name: 'answer', type: 'textarea', required: true },
    ]},
    { name: 'sources', type: 'array', fields: [
      { name: 'label', type: 'text', required: true },
      { name: 'url', type: 'text', required: true },
    ]},
    { name: 'relatedServices', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'relatedCaseStudies', type: 'relationship', relationTo: 'case-studies', hasMany: true },
    { name: 'publishedAt', type: 'date', admin: { position: 'sidebar' }, hooks: { beforeChange: [({ value, siblingData }) => value || (siblingData?._status === 'published' ? new Date().toISOString() : value)] } },
    { name: 'reviewedAt', type: 'date', admin: { position: 'sidebar' } },
    { name: 'canonicalURL', type: 'text', admin: { position: 'sidebar' } },
    { name: 'noIndex', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'metaTitle', type: 'text', maxLength: 70, admin: { position: 'sidebar' } },
    { name: 'metaDescription', type: 'textarea', maxLength: 170, admin: { position: 'sidebar' } },
    { name: 'openGraphImage', type: 'upload', relationTo: 'media', admin: { position: 'sidebar' } },
  ],
}
