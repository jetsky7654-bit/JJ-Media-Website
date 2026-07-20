import type { CollectionConfig } from 'payload'
import { authenticated } from '@/lib/access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: { useAsTitle: 'name', group: 'System' },
  access: { create: authenticated, delete: authenticated, read: authenticated, update: authenticated },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'select', defaultValue: 'editor', options: ['admin', 'editor'] },
    { name: 'bio', type: 'textarea' },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
  ],
}
