import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { FAQAccordion } from '@/components/site/FAQAccordion'
import { JsonLd } from '@/components/site/JsonLd'
import { RichTextContent } from '@/components/site/RichTextContent'
import { getCollection } from '@/lib/cms'
import { serviceDetails } from '@/lib/conversionContent'
import { mergeServicesWithCMS } from '@/lib/fallback'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const dynamicParams = true

async function getService(slug: string) {
  const cmsServices = await getCollection('services', { where: { _status: { equals: 'published' } } })
  return mergeServicesWithCMS(cmsServices).find((service) => service.slug === slug) || null
}

export async function generateStaticParams() {
  return mergeServicesWithCMS([]).filter((service) => service.slug !== 'reise-tourismus').map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service: any = await getService(slug)
  if (!service) return {}
  return buildMetadata({ title: service.metaTitle || service.title, description: service.metaDescription || service.shortDescription, path: `/leistungen/${slug}` })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service: any = await getService(slug)
  const detail = serviceDetails[slug]
  if (slug === 'reise-tourismus') redirect('/reise-tourismus')
  if (!service || !detail) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: { '@type': 'ProfessionalService', name: 'JJ-Media', founder: { '@type': 'Person', name: 'Jessica Just' } },
    areaServed: ['Deutschland', 'Österreich', 'Schweiz'],
    url: `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de'}/leistungen/${slug}`,
  }

  return <>
    <JsonLd data={schema}/>
    <header className="inner-hero service-detail-hero"><div className="container inner-hero-grid">
      <div><span className="availability reveal"><i></i>{service.eyebrow || 'Leistung'}</span><h1 className="premium-display reveal">{service.title}<br/><em>mit klarem System.</em></h1></div>
      <div className="inner-hero-aside reveal"><p>{service.shortDescription}</p><Link className="btn btn-coral" href={service.ctaHref || '/kontakt'}>{service.ctaLabel || 'Kostenlos beraten lassen'} <span>↗</span></Link></div>
    </div></header>

    <section className="section service-promise-section"><div className="container service-promise-grid">
      <article className="promise-card dark reveal"><span className="eyebrow">Die Ausgangslage</span><h2>{detail.problem}</h2></article>
      <article className="promise-card coral reveal"><span className="eyebrow">Das Ziel</span><h2>{detail.promise}</h2></article>
    </div></section>

    {service.description ? <section className="section cms-description-section"><div className="container narrow-content"><span className="eyebrow">Individuelle Leistungsbeschreibung</span><RichTextContent data={service.description}/></div></section> : null}

    <section className="section deliverables-section"><div className="container">
      <div className="split-heading"><div><span className="eyebrow reveal">Was du bekommst</span><h2 className="section-title reveal">Kein loses Konzept.<br/><span className="serif">Konkrete Ergebnisse.</span></h2></div><p className="lead reveal">Jeder Baustein ist so angelegt, dass er anschließend praktisch genutzt, produziert oder weiterentwickelt werden kann.</p></div>
      <div className="deliverable-grid">{detail.deliverables.map((item, index) => <article className="deliverable-card reveal" key={item}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></article>)}</div>
    </div></section>

    <section className="section outcome-section"><div className="container two-column-premium">
      <div className="sticky-copy"><span className="eyebrow reveal">Für wen es passt</span><h2 className="section-title reveal">Die richtige Lösung,<br/><span className="serif">wenn …</span></h2><ul className="premium-checks reveal">{detail.idealFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="outcome-stack">{detail.outcomes.map((item, index) => <article className="outcome-card reveal" key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div>
    </div></section>

    <section className="method-section section"><div className="container"><div className="method-intro"><span className="eyebrow reveal">Ablauf</span><h2 className="section-title reveal">Klar, effizient und<br/><span className="serif">ohne unnötige Schleifen.</span></h2></div><div className="method-grid method-grid-three">{detail.process.map((step, index) => <article className="method-card reveal" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section className="section faq-section"><div className="container faq-layout"><div className="faq-copy"><span className="eyebrow reveal">Häufige Fragen</span><h2 className="section-title reveal">Bevor wir<br/><span className="serif">loslegen.</span></h2><p className="lead reveal">Im Erstgespräch klären wir offen, ob diese Leistung der richtige nächste Schritt ist.</p></div><FAQAccordion items={detail.faqs}/></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Nächster Schritt</span><h2>Aus guter Absicht wird<br/><span className="serif">ein System mit Wirkung.</span></h2></div><div><p>Schick Jessica kurz deinen aktuellen Auftritt und dein Ziel. Du erhältst eine ehrliche Ersteinschätzung.</p><Link className="btn btn-light-large" href={service.ctaHref || '/kontakt'}>{service.ctaLabel || 'Projekt besprechen'} <span>↗</span></Link></div></div></section>
  </>
}
