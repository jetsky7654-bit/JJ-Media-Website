import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/site/JsonLd'
import { RichTextContent } from '@/components/site/RichTextContent'
import { getBySlug } from '@/lib/cms'
import { fallbackCases } from '@/lib/fallback'
import { buildMetadata } from '@/lib/seo'
import { mediaURL } from '@/lib/media'

export const revalidate = 3600
export const dynamicParams = true

async function getCase(slug: string) {
  return await getBySlug('case-studies', slug) || fallbackCases.find((item) => item.slug === slug) || null
}
export async function generateStaticParams() { return fallbackCases.map((item) => ({ slug: item.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item: any = await getCase(slug)
  if (!item) return {}
  const fallback = fallbackCases.find((entry) => entry.slug === slug)?.image || '/assets/insta-4.webp'
  return buildMetadata({ title: item.metaTitle || `${item.title} – Case Study`, description: item.metaDescription || item.excerpt, path: `/case-studies/${slug}`, image: mediaURL(item.heroImage, item.image || fallback) })
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item: any = await getCase(slug)
  if (!item) notFound()
  const fallbackImage = fallbackCases.find((entry) => entry.slug === slug)?.image || '/assets/insta-4.webp'
  const image = mediaURL(item.heroImage, item.image || fallbackImage)
  const schema = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: item.title, description: item.excerpt, creator: { '@type': 'Organization', name: 'JJ-Media' }, about: item.client, url: `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de'}/case-studies/${slug}` }

  return <>
    <JsonLd data={schema}/>
    <header className="case-hero"><div className="container"><div className="case-hero-top"><span className="availability reveal"><i></i>Case Study · {item.client}</span><span className="case-industry reveal">{item.industry || 'Social Media & Content'}</span></div><h1 className="premium-display reveal">{item.title}</h1><div className="case-hero-bottom reveal"><p>{item.excerpt}</p><Link className="btn btn-coral" href="/kontakt">Ähnliches Projekt anfragen <span>↗</span></Link></div></div></header>

    <section className="case-visual-section"><div className="container"><div className="case-main-visual reveal"><img src={image} alt={item.title}/><div className="case-visual-stamp"><span>JJ—MEDIA</span><strong>Selected<br/>Work</strong></div></div></div></section>

    {item.metrics?.length ? <section className="case-metric-ribbon"><div className="container">{item.metrics.map((metric:any,index:number)=><div key={index}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section> : null}

    <section className="section case-story-section"><div className="container case-story-grid"><aside className="case-story-nav"><span className="eyebrow">Projektlogik</span><a href="#challenge">01 · Herausforderung</a><a href="#solution">02 · Strategie & Umsetzung</a><a href="#result">03 · Wirkung</a></aside><div className="case-story-content">
      <article id="challenge"><span className="case-chapter">01</span><h2>Die Herausforderung</h2>{item.challenge ? <RichTextContent data={item.challenge}/> : <p>{item.challengeText || 'Der Auftritt benötigte mehr Klarheit, Wiedererkennung und eine stärkere Verbindung zwischen Aufmerksamkeit, Expertise und konkretem nächsten Schritt.'}</p>}</article>
      <article id="solution"><span className="case-chapter">02</span><h2>Strategie & Umsetzung</h2>{item.solution ? <RichTextContent data={item.solution}/> : <p>{item.solutionText || 'JJ-Media entwickelte ein modulares System aus Positionierung, wiedererkennbaren Formaten, plattformgerechten Creatives und einer klaren Botschaftshierarchie.'}</p>}</article>
      <article id="result"><span className="case-chapter">03</span><h2>Die Wirkung</h2>{item.result ? <RichTextContent data={item.result}/> : <p>{item.resultText || 'Das Ergebnis ist ein konsistenterer Markenauftritt, eine effizientere Content-Produktion und eine klarere Verbindung zwischen Sichtbarkeit, Vertrauen und Conversion.'}</p>}</article>
    </div></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Dein Projekt</span><h2>Von einzelnen Ideen zu<br/><span className="serif">einem klaren System.</span></h2></div><div><p>Wir schauen uns an, welcher Engpass bei deiner Marke zuerst gelöst werden sollte.</p><Link className="btn btn-light-large" href="/kontakt">Potenzialanalyse starten <span>↗</span></Link></div></div></section>
  </>
}
