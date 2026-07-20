import Link from 'next/link'
import { getCollection } from '@/lib/cms'
import { fallbackTestimonials } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Kundenstimmen & Erfahrungen',
  description: 'Erfahrungen aus der Zusammenarbeit mit JJ-Media: Strategie, Content Creation, UGC, Social Ads und persönliche Projektbetreuung.',
  path: '/kundenstimmen',
})

export default async function TestimonialsPage() {
  const data = await getCollection('testimonials', { sort: 'order', limit: 50 })
  const testimonials = data.length ? data.map((item: any, index: number) => ({ ...item, image: mediaURL(item.image, fallbackTestimonials[index % fallbackTestimonials.length].image) })) : fallbackTestimonials

  return <>
    <header className="inner-hero testimonial-page-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i></i>Echte Erfahrungen</span><h1 className="premium-display reveal">Gute Arbeit sieht man.<br/><em>Gute Zusammenarbeit spürt man.</em></h1></div><div className="inner-hero-aside reveal"><p>Strategische Klarheit, ehrliche Kommunikation und verlässliche Umsetzung sind genauso wichtig wie das sichtbare Ergebnis.</p><Link className="btn btn-coral" href="/kontakt">Zusammenarbeit anfragen <span>↗</span></Link></div></div></header>

    <section className="trust-ribbon"><div className="container trust-ribbon-inner"><span className="eyebrow">Was Kunden besonders schätzen</span><div><strong>Direkter Kontakt</strong><strong>Klare Prozesse</strong><strong>Kreative Qualität</strong><strong>Strategisches Denken</strong></div></div></section>

    <section className="section testimonial-wall-section"><div className="container"><div className="testimonial-wall">{testimonials.map((item:any,index:number)=><article className={`testimonial-wall-card reveal ${index%5===0?'testimonial-wall-featured':''}`} key={item.id||item.name}><div className="stars" aria-label={`${item.rating||5} von 5 Sternen`}>★★★★★</div><blockquote>„{item.quote}“</blockquote><div className="testimonial-person"><img src={item.image} alt={`Portrait von ${item.name}`}/><div><strong>{item.name}</strong><span>{item.role}{item.company?` · ${item.company}`:''}</span></div></div></article>)}</div></div></section>

    <section className="method-section section"><div className="container"><div className="method-intro"><span className="eyebrow reveal">Was du erwarten kannst</span><h2 className="section-title reveal">Keine Blackbox.<br/><span className="serif">Keine kreative Lotterie.</span></h2></div><div className="method-grid method-grid-four">{[['01','Ehrlichkeit','Du bekommst eine klare Einschätzung – auch wenn eine andere Lösung sinnvoller ist.'],['02','Verbindlichkeit','Aufgaben, Timing und nächste Schritte bleiben nachvollziehbar.'],['03','Mitdenken','Jessica sieht nicht nur den einzelnen Post, sondern Marke, Funnel und Ziel.'],['04','Lernsystem','Feedback und Daten verbessern die nächste Runde statt im Reporting zu verschwinden.']].map(([num,title,text])=><article className="method-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Deine Marke als nächstes?</span><h2>Strategie, Kreativität und Umsetzung.<br/><span className="serif">Persönlich verbunden.</span></h2></div><div><p>Erzähl Jessica kurz, wo du stehst und was sich verändern soll.</p><Link className="btn btn-light-large" href="/kontakt">Projekt besprechen <span>↗</span></Link></div></div></section>
  </>
}
