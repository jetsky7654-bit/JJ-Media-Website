import type { CollectionConfig } from 'payload'
import { anyone, authenticated } from '@/lib/access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Kundenstimme', plural: 'Kundenstimmen' },
  admin: { useAsTitle: 'name', group: 'Vertrauen' },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'quote', type: 'textarea', required: true },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
    { name: 'featured', type: 'checkbox', defaultValue: true },
    { name: 'order', type: 'number', defaultValue: 10 },
  ],
}
