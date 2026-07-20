import type { Metadata } from 'next'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { JsonLd } from '@/components/site/JsonLd'
import { Reveal } from '@/components/site/Reveal'
import { getGlobal } from '@/lib/cms'
import { organizationJSONLD } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de'),
  title: { default: 'JJ-Media – Social Media mit Wirkung', template: '%s | JJ-Media' },
  description: 'Social Media Strategie, Content Creation und Social Ads für Marken mit Ambition.',
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [settings, navigation] = await Promise.all([getGlobal('site-settings'), getGlobal('navigation')])
  return <html lang="de"><body><JsonLd data={organizationJSONLD()} /><Header navigation={navigation}/><main id="main" className="site-main">{children}</main><Footer settings={settings}/><Reveal/><a className="admin-hint" href="/admin">CMS öffnen</a></body></html>
}
