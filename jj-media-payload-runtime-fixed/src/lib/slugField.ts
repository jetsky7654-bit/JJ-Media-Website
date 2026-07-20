import type { Field } from 'payload'
import { slugify } from './slugify'

export const slugField = (source = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  unique: true,
  index: true,
  required: true,
  admin: { position: 'sidebar' },
  hooks: {
    beforeValidate: [({ value, siblingData }) => value || slugify(String(siblingData?.[source] || ''))],
  },
})
