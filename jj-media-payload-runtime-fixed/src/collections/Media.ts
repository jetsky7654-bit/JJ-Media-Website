import type { CollectionConfig } from 'payload'
import { anyone, authenticated } from '@/lib/access'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { useAsTitle: 'alt', group: 'Inhalte' },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 420, height: 280, position: 'centre' },
      { name: 'card', width: 900, height: 650, position: 'centre' },
      { name: 'hero', width: 1920, height: 1200, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    { name: 'alt', type: 'text', required: true, label: 'Alternativtext' },
    { name: 'caption', type: 'text' },
    { name: 'source', type: 'text', admin: { description: 'Optionale Bildquelle / Urheberangabe' } },
  ],
}
