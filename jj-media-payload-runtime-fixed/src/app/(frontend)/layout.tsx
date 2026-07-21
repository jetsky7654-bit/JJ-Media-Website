import type { Metadata } from 'next'
import { Footer } from '@/components/site/Footer'
import { ExperienceLayer } from '@/components/site/ExperienceLayer'
import { Header } from '@/components/site/Header'
import { JsonLd } from '@/components/site/JsonLd'
import { MobileStickyCTA } from '@/components/site/MobileStickyCTA'
import { Reveal } from '@/components/site/Reveal'
import { getGlobal } from '@/lib/cms'
import { organizationJSONLD } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de'),
  title: { default: 'JJ-Media – Strategie, Content, UGC & Social Ads', template: '%s | JJ-Media' },
  description: 'JJ-Media verbindet Analyse, Social-Media-Strategie, Reels, UGC und Ads zu einem System, das Aufmerksamkeit in Vertrauen und Kunden verwandelt.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'JJ-Media',
    images: [{ url: '/og-growth-system.png', width: 1743, height: 911, alt: 'JJ-Media – Social Media mit System' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-growth-system.png'] },
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [settings, navigation] = await Promise.all([getGlobal('site-settings'), getGlobal('navigation')])
  return <html lang="de">
    <body>
      <ExperienceLayer/>
      <JsonLd data={organizationJSONLD()} />
      <Header navigation={navigation}/>
      <main id="main" className="site-main">{children}</main>
      <Footer settings={settings}/>
      <MobileStickyCTA/>
      <Reveal/>
      {process.env.NODE_ENV !== 'production' ? <a className="admin-hint" href="/admin">CMS öffnen</a> : null}
    </body>
  </html>
}
