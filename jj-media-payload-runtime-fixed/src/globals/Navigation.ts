import type { GlobalConfig } from 'payload'
import { authenticated } from '@/lib/access'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: { group: 'Website' },
  access: { read: () => true, update: authenticated },
  fields: [
    { name: 'items', type: 'array', fields: [
      { name: 'label', type: 'text', required: true },
      { name: 'href', type: 'text', required: true },
      { name: 'highlight', type: 'checkbox', defaultValue: false },
    ]},
    { name: 'ctaLabel', type: 'text', defaultValue: 'Ich will mit dir arbeiten' },
    { name: 'ctaHref', type: 'text', defaultValue: '/kontakt' },
  ],
}
