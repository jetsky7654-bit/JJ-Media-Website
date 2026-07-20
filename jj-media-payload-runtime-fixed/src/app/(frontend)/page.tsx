import Link from 'next/link'
import { FAQAccordion } from '@/components/site/FAQAccordion'
import { TestimonialSlider } from '@/components/site/TestimonialSlider'
import { UGCShowcase } from '@/components/site/UGCShowcase'
import { getCollection } from '@/lib/cms'
import { homepageFAQs } from '@/lib/conversionContent'
import { fallbackCases, fallbackPosts, fallbackTestimonials, mergeServicesWithCMS } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Social Media Strategie, Content, UGC & Ads',
  description: 'JJ-Media entwickelt Social-Media-Systeme aus Strategie, Reels, UGC und Ads – mit besonderer Expertise für Reise- und Tourismusmarken.',
  path: '/',
})

const trustBrands = ['McFIT', 'NielsenIQ', 'DoktorABC', 'Lighthouse Cruises', 'Reisen & Erleben']

export default async function Home() {
  const [servicesData, casesData, testimonialsData, postsData] = await Promise.all([
    getCollection('services', { sort: 'order', where: { _status: { equals: 'published' } } }),
    getCollection('case-studies', { limit: 3, where: { _status: { equals: 'published' } } }),
    getCollection('testimonials', { sort: 'order', limit: 8 }),
    getCollection('posts', { sort: '-publishedAt', limit: 3, where: { _status: { equals: 'published' } } }),
  ])
  const services = mergeServicesWithCMS(servicesData)
  const cases = casesData.length
    ? casesData.map((item: any, index: number) => ({ ...item, image: mediaURL(item.heroImage, fallbackCases[index % fallbackCases.length].image) }))
    : fallbackCases
  const testimonials = testimonialsData.length
    ? testimonialsData.map((item: any, index: number) => ({ ...item, image: mediaURL(item.image, fallbackTestimonials[index % fallbackTestimonials.length].image) }))
    : fallbackTestimonials
  const posts = postsData.length ? postsData : fallbackPosts

  return <>
    <header className="premium-hero">
      <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
      <div className="container premium-hero-grid">
        <div className="premium-hero-copy">
          <div className="availability reveal"><span></span>Strategie · Content · UGC · Social Ads</div>
          <h1 className="premium-display reveal">Social Media, das aus <em>Aufmerksamkeit</em> Vertrauen macht.</h1>
          <p className="hero-lead reveal">Und aus Vertrauen Kunden. JJ-Media verbindet strategische Klarheit, starke Creatives und messbare Distribution zu einem System – mit besonderer Expertise für Reise & Tourismus.</p>
          <div className="hero-actions reveal">
            <Link className="btn btn-coral btn-large" href="/kontakt">Kostenlose Potenzialanalyse <span>↗</span></Link>
            <Link className="text-link" href="/projekte">Ergebnisse & Projekte ansehen <span>→</span></Link>
          </div>
          <div className="hero-proof reveal">
            <div><strong>Direkt</strong><span>mit Jessica statt Agentur-Fließband</span></div>
            <div><strong>Ganzheitlich</strong><span>Strategie und Umsetzung aus einer Hand</span></div>
            <div><strong>Remote</strong><span>für Marken im gesamten DACH-Raum</span></div>
          </div>
        </div>
        <div className="growth-system reveal" aria-label="JJ-Media Growth System">
          <div className="growth-system-head"><span className="eyebrow">JJ Growth System</span><b>01—05</b></div>
          <div className="growth-card active"><span>01</span><div><strong>Analyse</strong><small>Erkennen, was bremst</small></div><i>●</i></div>
          <div className="growth-card"><span>02</span><div><strong>Strategie</strong><small>Positionierung mit Richtung</small></div><i>↗</i></div>
          <div className="growth-card"><span>03</span><div><strong>Content & UGC</strong><small>Aufmerksamkeit und Vertrauen</small></div><i>▶</i></div>
          <div className="growth-card"><span>04</span><div><strong>Social Ads</strong><small>Learnings und Wachstum</small></div><i>＋</i></div>
          <div className="growth-card"><span>05</span><div><strong>Optimierung</strong><small>Aus Daten wird Fortschritt</small></div><i>✓</i></div>
          <div className="growth-note"><span className="pulse"></span><p>Kein Content um des Contents willen. Jede Maßnahme bekommt eine klare Aufgabe.</p></div>
        </div>
      </div>
      <a className="hero-scroll" href="#vertrauen"><span>Scroll</span><i>↓</i></a>
    </header>

    <section id="vertrauen" className="trust-ribbon" aria-label="Ausgewählte Marken">
      <div className="container trust-ribbon-inner"><span className="eyebrow">Erfahrung aus Projekten für</span><div>{trustBrands.map((brand) => <strong key={brand}>{brand}</strong>)}</div></div>
    </section>

    <section className="section problem-section">
      <div className="container">
        <div className="split-heading"><div><span className="eyebrow reveal">Das eigentliche Problem</span><h2 className="section-title reveal">Du brauchst nicht mehr Content.<br/><span className="serif">Du brauchst Content mit Aufgabe.</span></h2></div><p className="lead reveal">Schöne Posts sind kein Geschäftsmodell. Wirkung entsteht, wenn Positionierung, Format, Botschaft und nächster Schritt konsequent zusammenspielen.</p></div>
        <div className="pain-grid">
          {[['01','Austauschbar','Der Auftritt sieht ordentlich aus, aber könnte genauso gut zu zehn Wettbewerbern gehören.'],['02','Unregelmäßig','Ideen, Produktion und Freigaben kosten zu viel Zeit und hängen an einzelnen Personen.'],['03','Ohne Richtung','Reichweite wird gemessen, aber niemand weiß, welche Inhalte Vertrauen oder Anfragen erzeugen.'],['04','Zu werblich','Content erklärt das Angebot, baut aber zu wenig Nähe, Proof und konkrete Kaufmotivation auf.']].map(([num,title,text]) => <article className="pain-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="services-premium section">
      <div className="container">
        <div className="split-heading light"><div><span className="eyebrow reveal">Leistungen</span><h2 className="section-title reveal">Ein System für <span className="serif">sichtbares Wachstum.</span></h2></div><p className="lead reveal">Du buchst nicht zwangsläufig alles. Wir starten dort, wo der größte Engpass liegt – und bauen nur das, was wirklich gebraucht wird.</p></div>
        <div className="service-stack">
          {services.map((service: any, index: number) => <Link className="service-line reveal" href={service.slug === 'reise-tourismus' ? '/reise-tourismus' : `/leistungen/${service.slug}`} key={service.slug}>
            <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
            <div className="service-line-copy"><small>{service.eyebrow}</small><h3>{service.title}</h3><p>{service.shortDescription}</p></div>
            <div className="service-tags">{service.benefits?.slice(0, 2).map((item: any) => <span key={item.text}>{item.text}</span>)}</div>
            <b>↗</b>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="travel-feature section">
      <div className="container travel-feature-grid">
        <div className="travel-visual reveal">
          <img src="/assets/insta-5.webp" alt="Reise- und Tourismuscontent von JJ-Media" loading="lazy"/>
          <div className="travel-float travel-float-top"><span>Specialized in</span><strong>Travel<br/>& Tourism</strong></div>
          <div className="travel-float travel-float-bottom"><b>Emotion</b><span>＋ Expertise</span><span>＋ Conversion</span></div>
        </div>
        <div className="travel-copy reveal"><span className="eyebrow">Reise- & Tourismus-Spezialisierung</span><h2 className="section-title">Fernweh erzeugen ist leicht.<br/><span className="serif">Buchungswunsch ist Strategie.</span></h2><p className="lead">Für Reiseveranstalter, Kreuzfahrtanbieter, Reiseberater, Hotels und Tourismusmarken entwickeln wir Content, Creator-Kooperationen und Kampagnen, die Emotion mit Orientierung und Vertrauen verbinden.</p><ul className="premium-checks"><li>Expertenpositionierung statt austauschbarer Urlaubsbilder</li><li>Creator- und Passagiercontent mit klaren Nutzungsrechten</li><li>Saisonale Kampagnen entlang der gesamten Reiseentscheidung</li></ul><Link className="btn btn-coral" href="/reise-tourismus">Reise-Spezialisierung entdecken <span>↗</span></Link></div>
      </div>
    </section>

    <section className="section showcase-section">
      <div className="container">
        <div className="split-heading"><div><span className="eyebrow reveal">Content & UGC Showcase</span><h2 className="section-title reveal">Echt genug für Vertrauen.<br/><span className="serif">Stark genug für Performance.</span></h2></div><p className="lead reveal">Jedes Creative beginnt mit einer Aufgabe: stoppen, erklären, beweisen oder zur Handlung führen.</p></div>
        <a className="showreel-banner reveal" href="https://youtube.com/watch?v=jRIm4tJmTuw" target="_blank" rel="noreferrer">
          <img src="https://i.ytimg.com/vi/jRIm4tJmTuw/maxresdefault.jpg" alt="JJ-Media Showreel" loading="lazy"/>
          <div><span className="eyebrow">JJ-Media Showreel</span><h3>Bewegtbild, das Marke und Botschaft zusammenbringt.</h3><p>Showreel auf YouTube ansehen</p></div><b>PLAY</b>
        </a>
        <UGCShowcase/>
      </div>
    </section>

    <section className="section projects-premium">
      <div className="container">
        <div className="section-heading-row"><div><span className="eyebrow reveal">Ausgewählte Projekte</span><h2 className="section-title reveal">Nicht nur hübsch.<br/><span className="serif">Strategisch durchdacht.</span></h2></div><Link className="text-link reveal" href="/projekte">Alle Projekte ansehen <span>→</span></Link></div>
        <div className="work-grid premium-work-grid">{cases.slice(0, 3).map((item: any, index: number) => <Link className={`work-card reveal ${index === 0 ? 'work-card-large' : ''}`} key={item.id || item.slug} href={`/case-studies/${item.slug}`}><img src={item.image} alt={item.title} loading="lazy"/><div className="work-copy"><span className="eyebrow">{item.client}</span><h3>{item.title}</h3><p>{item.excerpt}</p><span className="arrow">↗</span></div></Link>)}</div>
      </div>
    </section>

    <section className="method-section section">
      <div className="container">
        <div className="method-intro"><span className="eyebrow reveal">Der Prozess</span><h2 className="section-title reveal">Von „Wir müssten mal“ zu einem<br/><span className="serif">System, das wirklich läuft.</span></h2></div>
        <div className="method-grid">
          {[['01','Verstehen','Angebot, Zielgruppe, Kundenfragen und aktuelle Daten bilden das Fundament.'],['02','Fokussieren','Positionierung, Botschaften und Content-Aufgaben werden klar definiert.'],['03','Produzieren','Reels, UGC, Posts und Creatives entstehen effizient und markengerecht.'],['04','Verteilen','Organic, Ads und Retargeting bringen die richtigen Inhalte vor die richtigen Menschen.'],['05','Verbessern','Aus Daten und Feedback entstehen bessere Hooks, Formate und Entscheidungen.']].map(([num,title,text]) => <article className="method-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="testimonials section">
      <div className="container">
        <div className="testimonial-heading"><div><span className="eyebrow reveal">Kundenstimmen</span><h2 className="section-title reveal">Was Zusammenarbeit<br/><span className="serif">spürbar macht.</span></h2></div><Link className="text-link light-link" href="/kundenstimmen">Alle Stimmen ansehen →</Link></div>
        <TestimonialSlider items={testimonials}/>
      </div>
    </section>

    <section className="section offer-fit-section">
      <div className="container">
        <div className="split-heading"><div><span className="eyebrow reveal">Welcher Einstieg passt?</span><h2 className="section-title reveal">Nicht größer verkaufen.<br/><span className="serif">Sondern richtiger starten.</span></h2></div><p className="lead reveal">Nach der Potenzialanalyse bekommst du eine klare Empfehlung – auch dann, wenn ein kleinerer Einstieg sinnvoller ist.</p></div>
        <div className="offer-grid">
          <article className="offer-card reveal"><span className="offer-label">Klarheit</span><h3>Strategy Sprint</h3><p>Für Marken, die wissen wollen, was wirklich fehlt, bevor sie weiter Content produzieren oder Budget investieren.</p><ul><li>Audit & Analyse</li><li>Positionierung</li><li>90-Tage-Plan</li></ul><Link href="/kontakt?interesse=strategie">Sprint anfragen ↗</Link></article>
          <article className="offer-card featured reveal"><span className="offer-label">Kontinuität</span><div className="popular">Am häufigsten passend</div><h3>Content System</h3><p>Für Unternehmen, die strategische Planung und regelmäßige Reels, UGC oder Social-Formate aus einer Hand brauchen.</p><ul><li>Strategie & Redaktionssystem</li><li>Content-Produktion</li><li>Auswertung & Optimierung</li></ul><Link href="/kontakt?interesse=content">Content System prüfen ↗</Link></article>
          <article className="offer-card reveal"><span className="offer-label">Wachstum</span><h3>Growth System</h3><p>Für validierte Angebote, die Content, Paid Social und Creative Testing zu einem skalierbaren System verbinden wollen.</p><ul><li>Content & UGC</li><li>Social Ads</li><li>Creative Testing & Reporting</li></ul><Link href="/kontakt?interesse=growth">Growth System prüfen ↗</Link></article>
        </div>
      </div>
    </section>

    <section className="section insights-section">
      <div className="container"><div className="section-heading-row"><div><span className="eyebrow reveal">Insights</span><h2 className="section-title reveal">Wissen, das nicht nur klingt.<br/><span className="serif">Sondern weiterhilft.</span></h2></div><Link className="text-link" href="/blog">Alle Insights →</Link></div><div className="post-grid">{posts.slice(0, 3).map((post: any) => <Link className="post-card reveal" href={`/blog/${post.slug}`} key={post.id || post.slug}><div><div className="post-meta"><span>{post.category || 'Social Media'}</span><span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('de-DE') : ''}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p></div><span>Artikel lesen ↗</span></Link>)}</div></div>
    </section>

    <section className="section faq-section">
      <div className="container faq-layout"><div className="faq-copy"><span className="eyebrow reveal">FAQ</span><h2 className="section-title reveal">Gute Entscheidungen beginnen mit<br/><span className="serif">ehrlichen Antworten.</span></h2><p className="lead reveal">Keine pauschalen Versprechen. Im Erstgespräch klären wir, was realistisch, sinnvoll und wirtschaftlich ist.</p><Link className="text-link reveal" href="/kontakt">Andere Frage stellen →</Link></div><FAQAccordion items={homepageFAQs}/></div>
    </section>

    <section className="premium-cta">
      <div className="container premium-cta-inner"><div><span className="eyebrow">Dein nächster sinnvoller Schritt</span><h2>Wir schauen nicht, was wir dir verkaufen können.<br/><span className="serif">Sondern was deine Marke wirklich braucht.</span></h2></div><div><p>In der kostenlosen Potenzialanalyse erhältst du eine ehrliche Einschätzung zu Positionierung, Content und Wachstum.</p><Link className="btn btn-light-large" href="/kontakt">Potenzialanalyse starten <span>↗</span></Link></div></div>
    </section>

    <div className="social-grid">{[5, 1, 4, 2, 6, 3].map((number) => <img key={number} src={`/assets/insta-${number}.webp`} alt={`Social-Media-Arbeit von JJ-Media ${number}`} loading="lazy"/>)}</div>
  </>
}
