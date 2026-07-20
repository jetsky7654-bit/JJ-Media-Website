import Link from 'next/link'
import { getCollection } from '@/lib/cms'
import { mergeServicesWithCMS } from '@/lib/fallback'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Social-Media-Leistungen: Audit, Strategie, UGC & Ads',
  description: 'Analyse, Positionierung, Reels, UGC, Social Ads und Reise-Marketing als integriertes System für Sichtbarkeit, Vertrauen und Wachstum.',
  path: '/leistungen',
})

export default async function ServicesPage() {
  const data = await getCollection('services', { sort: 'order', where: { _status: { equals: 'published' } } })
  const items = mergeServicesWithCMS(data)

  return <>
    <header className="inner-hero services-hero">
      <div className="container inner-hero-grid">
        <div><span className="availability reveal"><i></i>Leistungen nach echtem Bedarf</span><h1 className="premium-display reveal">Von Klarheit zu <em>Content, der wirkt.</em></h1></div>
        <div className="inner-hero-aside reveal"><p>Keine isolierten Posts und keine unnötig großen Pakete. Wir starten am relevantesten Engpass und verbinden Strategie, Produktion und Distribution zu einem belastbaren System.</p><Link className="btn btn-coral" href="/kontakt">Passenden Einstieg finden <span>↗</span></Link></div>
      </div>
    </header>

    <section className="section service-overview-section"><div className="container">
      <div className="service-stack service-stack-light">{items.map((item: any, index: number) => <Link className="service-line reveal" href={item.slug === 'reise-tourismus' ? '/reise-tourismus' : `/leistungen/${item.slug}`} key={item.slug}>
        <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
        <div className="service-line-copy"><small>{item.eyebrow}</small><h2>{item.title}</h2><p>{item.shortDescription}</p></div>
        <div className="service-tags">{item.benefits?.map((benefit: any) => <span key={benefit.text}>{benefit.text}</span>)}</div><b>↗</b>
      </Link>)}</div>
    </div></section>

    <section className="section decision-section"><div className="container">
      <div className="split-heading"><div><span className="eyebrow reveal">Schnelle Orientierung</span><h2 className="section-title reveal">Wo solltest du<br/><span className="serif">wirklich starten?</span></h2></div><p className="lead reveal">Der sinnvollste Einstieg hängt nicht von Trends ab, sondern von deinem aktuellen Engpass.</p></div>
      <div className="decision-grid">
        <article className="decision-card reveal"><span>Wenn du nicht weißt, warum es stockt</span><h3>Analyse & Audit</h3><p>Erst verstehen, dann investieren.</p><Link href="/leistungen/analyse-audit">Mehr erfahren ↗</Link></article>
        <article className="decision-card reveal"><span>Wenn dein Auftritt austauschbar wirkt</span><h3>Strategie & Positionierung</h3><p>Botschaft, Fokus und Content-System schärfen.</p><Link href="/leistungen/strategie-positionierung">Mehr erfahren ↗</Link></article>
        <article className="decision-card reveal"><span>Wenn Ideen oder Produktion fehlen</span><h3>Content, Reels & UGC</h3><p>Regelmäßig starke Creatives veröffentlichen.</p><Link href="/leistungen/content-ugc">Mehr erfahren ↗</Link></article>
        <article className="decision-card reveal"><span>Wenn Wachstum planbarer werden soll</span><h3>Social Ads</h3><p>Creatives testen, Learnings gewinnen, skalieren.</p><Link href="/leistungen/social-ads">Mehr erfahren ↗</Link></article>
      </div>
    </div></section>

    <section className="method-section section"><div className="container"><div className="method-intro"><span className="eyebrow reveal">Zusammenarbeit</span><h2 className="section-title reveal">Ein Ansprechpartner.<br/><span className="serif">Ein durchgängiges System.</span></h2></div><div className="method-grid method-grid-four">
      {[['01','Diagnose','Wir klären Ziel, Engpass und wirtschaftlichen Rahmen.'],['02','Roadmap','Du erhältst eine klare Empfehlung und einen realistischen Plan.'],['03','Umsetzung','Content, UGC und Kampagnen werden sauber produziert.'],['04','Lernen','Daten und Feedback verbessern die nächsten Entscheidungen.']].map(([num,title,text]) => <article className="method-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
    </div></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Kostenlose Potenzialanalyse</span><h2>Du musst nicht wissen, welches Paket du brauchst.<br/><span className="serif">Dafür ist die Analyse da.</span></h2></div><div><p>Du bekommst eine ehrliche Empfehlung, welche Maßnahme jetzt den größten Unterschied machen kann.</p><Link className="btn btn-light-large" href="/kontakt">Ersteinschätzung anfragen <span>↗</span></Link></div></div></section>
  </>
}
