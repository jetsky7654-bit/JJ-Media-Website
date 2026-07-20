import type { CollectionConfig } from 'payload'
import { authenticated } from '@/lib/access'

export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Anfrage', plural: 'Anfragen' },
  admin: { useAsTitle: 'email', defaultColumns: ['name', 'email', 'company', 'createdAt'], group: 'Vertrieb' },
  access: {
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'company', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'budget', type: 'select', options: ['unter 2.000 €', '2.000–5.000 €', '5.000–10.000 €', 'über 10.000 €'] },
    { name: 'message', type: 'textarea', required: true },
    { name: 'source', type: 'text', defaultValue: 'Website' },
    { name: 'consent', type: 'checkbox', required: true },
    { name: 'status', type: 'select', defaultValue: 'neu', options: ['neu', 'kontaktiert', 'qualifiziert', 'gewonnen', 'verloren'], admin: { position: 'sidebar' } },
  ],
}
