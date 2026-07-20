import type { GlobalConfig } from 'payload'
import { authenticated } from '@/lib/access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Website-Einstellungen',
  admin: { group: 'Website' },
  access: { read: () => true, update: authenticated },
  fields: [
    { name: 'brandName', type: 'text', required: true, defaultValue: 'JJ—MEDIA' },
    { name: 'legalName', type: 'text', defaultValue: 'JJ-Media' },
    { name: 'siteDescription', type: 'textarea', defaultValue: 'Social Media Strategie, Content Creation und Social Ads für Marken mit Ambition.' },
    { name: 'email', type: 'email', defaultValue: 'service@jj-media.info' },
    { name: 'phone', type: 'text' },
    { name: 'bookingURL', type: 'text', defaultValue: '/kontakt' },
    { name: 'instagramURL', type: 'text' },
    { name: 'linkedinURL', type: 'text' },
    { name: 'youtubeURL', type: 'text' },
    { name: 'address', type: 'group', fields: [
      { name: 'street', type: 'text' },
      { name: 'postalCode', type: 'text' },
      { name: 'city', type: 'text' },
      { name: 'country', type: 'text', defaultValue: 'Deutschland' },
    ]},
    { name: 'defaultOGImage', type: 'upload', relationTo: 'media' },
    { name: 'organizationSchema', type: 'json', admin: { description: 'Optionale zusätzliche strukturierte Unternehmensdaten.' } },
  ],
}
