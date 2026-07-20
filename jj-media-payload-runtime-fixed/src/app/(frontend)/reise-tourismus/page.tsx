import Link from 'next/link'
import { FAQAccordion } from '@/components/site/FAQAccordion'
import { JsonLd } from '@/components/site/JsonLd'
import { TestimonialSlider } from '@/components/site/TestimonialSlider'
import { getCollection } from '@/lib/cms'
import { serviceDetails } from '@/lib/conversionContent'
import { fallbackCases, fallbackTestimonials } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Social Media für Reise & Tourismus',
  description: 'Strategie, Reels, UGC, Creator-Kooperationen und Social Ads für Reiseveranstalter, Kreuzfahrtanbieter, Reiseberater, Hotels und Tourismusmarken.',
  path: '/reise-tourismus',
})

const audiences = ['Reiseveranstalter', 'Kreuzfahrtanbieter', 'Reisebüros & Berater', 'Hotels & Resorts', 'Touroperator', 'Destinationen']
const journey = [
  ['01', 'Sehnsucht', 'Emotionale Formate schaffen Aufmerksamkeit und machen Reiseerlebnisse vorstellbar.'],
  ['02', 'Orientierung', 'Expertencontent beantwortet Fragen, reduziert Unsicherheit und schafft Vertrauen.'],
  ['03', 'Proof', 'Creator-, Gäste- und Kundencontent macht das Erlebnis glaubwürdig und konkret.'],
  ['04', 'Beratung', 'Klare CTAs, DMs, Landingpages und Automationen führen zum passenden nächsten Schritt.'],
  ['05', 'Buchung', 'Retargeting und Angebotskommunikation begleiten die längere Entscheidung bis zur Conversion.'],
]

export default async function TravelTourismPage() {
  const [casesData, testimonialsData] = await Promise.all([
    getCollection('case-studies', { limit: 3, where: { _status: { equals: 'published' } } }),
    getCollection('testimonials', { sort: 'order', limit: 8 }),
  ])
  const cases = casesData.length ? casesData.map((item: any, index: number) => ({ ...item, image: mediaURL(item.heroImage, fallbackCases[index % fallbackCases.length].image) })) : fallbackCases
  const testimonials = testimonialsData.length ? testimonialsData.map((item: any, index: number) => ({ ...item, image: mediaURL(item.image, fallbackTestimonials[index % fallbackTestimonials.length].image) })) : fallbackTestimonials
  const details = serviceDetails['reise-tourismus']
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: 'Social Media für Reise und Tourismus',
    description: 'Strategie, Content, UGC und Social Ads für Reise- und Tourismusunternehmen.',
    provider: { '@type': 'ProfessionalService', name: 'JJ-Media', founder: { '@type': 'Person', name: 'Jessica Just' } },
    audience: audiences.map((name) => ({ '@type': 'Audience', audienceType: name })),
  }

  return <>
    <JsonLd data={schema}/>
    <header className="travel-hero">
      <div className="travel-hero-media"><img src="/assets/insta-5.webp" alt="Reisecontent von JJ-Media"/></div>
      <div className="container travel-hero-content">
        <span className="availability reveal"><i></i>Specialized in Travel & Tourism</span>
        <h1 className="premium-display reveal">Mehr <em>Buchungswunsch.</em><br/>Weniger austauschbare Urlaubs-Posts.</h1>
        <p className="hero-lead reveal">Social Media für Reiseveranstalter, Kreuzfahrtanbieter, Reiseberater, Hotels und Tourismusmarken – emotional genug für Fernweh, strategisch genug für Beratung und Buchung.</p>
        <div className="hero-actions reveal"><Link className="btn btn-coral btn-large" href="/kontakt?interesse=reise">Reise-Marketing analysieren <span>↗</span></Link><Link className="text-link light-link" href="#reise-system">System ansehen →</Link></div>
      </div>
    </header>

    <section className="travel-audience-ribbon"><div className="container"><span className="eyebrow">Passend für</span><div>{audiences.map((item) => <strong key={item}>{item}</strong>)}</div></div></section>

    <section className="section travel-problem"><div className="container">
      <div className="split-heading"><div><span className="eyebrow reveal">Die Besonderheit der Branche</span><h2 className="section-title reveal">Reisen werden emotional entschieden.<br/><span className="serif">Aber rational abgesichert.</span></h2></div><p className="lead reveal">Zwischen erstem Fernweh und tatsächlicher Buchung liegen Fragen, Vergleich, Vertrauen und oft mehrere Wochen. Genau deshalb braucht Reisecontent mehr als schöne Bilder.</p></div>
      <div className="pain-grid travel-pain-grid">{[
        ['01','Zu viel Inspiration','Schöne Impressionen erzeugen Likes, aber selten einen klaren nächsten Schritt.'],
        ['02','Zu wenig Expertise','Interessenten sehen Angebote, verstehen aber nicht, warum sie genau hier buchen sollten.'],
        ['03','Lange Entscheidung','Die Customer Journey wird nach dem ersten Kontakt nicht konsequent weitergeführt.'],
        ['04','Unverbrauchter Proof','Gäste-, Creator- und Mitarbeitendencontent wird nicht systematisch genutzt.'],
      ].map(([num,title,text]) => <article className="pain-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section id="reise-system" className="services-premium section"><div className="container">
      <div className="split-heading light"><div><span className="eyebrow reveal">Das Travel Growth System</span><h2 className="section-title reveal">Von Reiselust zur<br/><span className="serif">konkreten Handlung.</span></h2></div><p className="lead reveal">Jede Content-Phase übernimmt eine andere Aufgabe – statt dass jeder Post gleichzeitig inspirieren, erklären und verkaufen soll.</p></div>
      <div className="travel-journey">{journey.map(([num,title,text]) => <article className="travel-journey-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="section travel-deliverables"><div className="container two-column-premium">
      <div className="sticky-copy"><span className="eyebrow reveal">Leistungsbausteine</span><h2 className="section-title reveal">Content, Kooperation und Kampagne<br/><span className="serif">aus einem Guss.</span></h2><p className="lead reveal">Die Bausteine werden passend zu Saison, Zielgruppe, Angebot und vorhandenen Ressourcen kombiniert.</p></div>
      <div className="outcome-stack">{details.deliverables.map((item, index) => <article className="outcome-card reveal" key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div>
    </div></section>

    <section className="section travel-creator-section"><div className="container travel-feature-grid">
      <div className="travel-copy reveal"><span className="eyebrow">Creator & Gäste als Vertrauensbeweis</span><h2 className="section-title">Nicht inszeniert wirken.<br/><span className="serif">Trotzdem strategisch führen.</span></h2><p className="lead">UGC und Creator Content funktionieren besonders stark, wenn Briefing, Nutzungsrechte, Hook, Storyline und Distribution von Anfang an zusammengedacht werden.</p><ul className="premium-checks"><li>Creator-Auswahl passend zur echten Zielgruppe</li><li>Klare Briefings ohne unnatürliche Werbesprache</li><li>Mehrfachnutzung für Organic, Landingpages und Ads</li><li>Formate für vor, während und nach der Reise</li></ul></div>
      <div className="creator-collage reveal"><img src="/assets/insta-1.webp" alt="UGC Reisecontent"/><img src="/assets/insta-3.webp" alt="Creator Content"/><img src="/assets/insta-6.webp" alt="Expertencontent Reise"/><div className="creator-badge"><strong>UGC</strong><span>Creator</span><span>Guest Content</span></div></div>
    </div></section>

    <section className="section projects-premium"><div className="container"><div className="section-heading-row"><div><span className="eyebrow reveal">Projekt-Einblicke</span><h2 className="section-title reveal">Reisecontent mit<br/><span className="serif">klarer Funktion.</span></h2></div><Link className="text-link" href="/projekte">Alle Projekte →</Link></div><div className="work-grid premium-work-grid">{cases.slice(0,3).map((item:any,index:number)=><Link className={`work-card reveal ${index===0?'work-card-large':''}`} href={`/case-studies/${item.slug}`} key={item.id||item.slug}><img src={item.image} alt={item.title}/><div className="work-copy"><span className="eyebrow">{item.client}</span><h3>{item.title}</h3><p>{item.excerpt}</p><span className="arrow">↗</span></div></Link>)}</div></div></section>

    <section className="testimonials section"><div className="container"><div className="testimonial-heading"><div><span className="eyebrow reveal">Zusammenarbeit</span><h2 className="section-title reveal">Strategisch klar.<br/><span className="serif">Menschlich angenehm.</span></h2></div></div><TestimonialSlider items={testimonials}/></div></section>

    <section className="section faq-section"><div className="container faq-layout"><div className="faq-copy"><span className="eyebrow reveal">FAQ Reise & Tourismus</span><h2 className="section-title reveal">Die wichtigsten Fragen<br/><span className="serif">vor dem Start.</span></h2></div><FAQAccordion items={details.faqs}/></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Kostenlose Reise-Marketing-Analyse</span><h2>Deine Angebote verdienen mehr als Fernweh.<br/><span className="serif">Sie verdienen Nachfrage.</span></h2></div><div><p>Schick uns Website und Social-Profil. Jessica zeigt dir, wo Vertrauen, Content und Conversion besser zusammenspielen können.</p><Link className="btn btn-light-large" href="/kontakt?interesse=reise">Potenzial analysieren <span>↗</span></Link></div></div></section>
  </>
}
