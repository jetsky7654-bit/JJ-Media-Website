import Link from 'next/link'
import { getCollection } from '@/lib/cms'
import { fallbackCases } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Projekte & Case Studies',
  description: 'Ausgewählte Social-Media-Projekte von JJ-Media: Strategie, Content-Systeme, Reels, UGC, Creator-Kooperationen und Social Ads.',
  path: '/projekte',
})

export default async function WorkPage() {
  const data = await getCollection('case-studies', { sort: '-publishedAt', where: { _status: { equals: 'published' } } })
  const cases = data.length ? data.map((item: any, index: number) => ({ ...item, image: mediaURL(item.heroImage, fallbackCases[index % fallbackCases.length].image) })) : fallbackCases

  return <>
    <header className="inner-hero projects-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i></i>Selected work</span><h1 className="premium-display reveal">Arbeit, die nicht nur gut aussieht.<br/><em>Sondern eine Aufgabe löst.</em></h1></div><div className="inner-hero-aside reveal"><p>Ausgewählte Einblicke in Positionierung, Content-Systeme, Creator-Formate und Kampagnen – mit Fokus auf nachvollziehbare Entscheidungen statt Dekoration.</p><Link className="btn btn-coral" href="/kontakt">Ähnliches Projekt anfragen <span>↗</span></Link></div></div></header>

    <section className="section projects-index-section"><div className="container"><div className="project-index">{cases.map((item:any,index:number)=><Link className="project-index-item reveal" href={`/case-studies/${item.slug}`} key={item.id||item.slug}><span className="project-count">{String(index+1).padStart(2,'0')}</span><div className="project-index-image"><img src={item.image} alt={item.title}/></div><div className="project-index-copy"><small>{item.client}{item.industry?` · ${item.industry}`:''}</small><h2>{item.title}</h2><p>{item.excerpt}</p><div className="project-micro-tags">{item.metrics?.slice(0,3).map((metric:any)=><span key={`${metric.value}-${metric.label}`}>{metric.value}: {metric.label}</span>)}</div></div><b>↗</b></Link>)}</div></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Noch nicht genau das Richtige dabei?</span><h2>Jede Marke braucht ein anderes System.<br/><span className="serif">Lass uns deins finden.</span></h2></div><div><p>In der Potenzialanalyse schauen wir auf deinen aktuellen Auftritt, das Angebot und die nächsten realistischen Hebel.</p><Link className="btn btn-light-large" href="/kontakt">Projekt analysieren <span>↗</span></Link></div></div></section>
  </>
}
