import { ContactForm } from '@/components/site/ContactForm'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Kostenlose Social-Media-Potenzialanalyse',
  description: 'Erhalte eine persönliche Ersteinschätzung zu Strategie, Content, UGC, Social Ads oder Reise-Marketing – direkt von Jessica Just.',
  path: '/kontakt',
})

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interesse?: string; score?: string }> }) {
  const params = await searchParams
  const isAudit = params.interesse === 'audit'
  const score = Number(params.score)
  const hasScore = isAudit && Number.isFinite(score) && score >= 0 && score <= 100
  return <>
    <header className="inner-hero contact-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i></i>{isAudit ? 'Deine persönliche Score-Auswertung' : 'Unverbindliche Ersteinschätzung'}</span><h1 className="premium-display reveal">{isAudit ? <>Aus deinem Score wird<br/><em>eine klare Priorität.</em></> : <>Lass uns herausfinden,<br/><em>was wirklich fehlt.</em></>}</h1></div><div className="inner-hero-aside reveal">{hasScore ? <div className="contact-score"><strong>{Math.round(score)}</strong><span>/ 100 · Social Growth Score</span></div> : null}<p>{isAudit ? 'Jessica prüft dein Ergebnis nicht isoliert, sondern zusammen mit Angebot, Zielgruppe und aktuellem Auftritt – damit aus der Zahl ein sinnvoller nächster Schritt wird.' : 'Kein allgemeiner Verkaufscall. Jessica schaut auf deinen aktuellen Auftritt, das Angebot und dein Ziel – und sagt dir ehrlich, welcher nächste Schritt sinnvoll ist.'}</p><div className="contact-quick-proof"><span>✓ Persönlich</span><span>✓ Konkret</span><span>✓ Unverbindlich</span></div></div></div></header>

    <section className="section contact-premium-section"><div className="container contact-premium-grid">
      <div className="contact-context reveal"><span className="eyebrow">{isAudit ? 'Vom Score zur Roadmap' : 'So geht es weiter'}</span><h2>In drei Schritten zu einer<br/><span className="serif">klaren Empfehlung.</span></h2><ol><li><span>01</span><div><strong>{isAudit ? 'Dein Score ist bereits übernommen' : 'Du sendest den kurzen Projektcheck'}</strong><p>{isAudit ? 'Du ergänzt nur Website, Ziel und den Bereich, der dir aktuell am meisten Kopfzerbrechen macht.' : 'Website, Ziel und aktueller Engpass reichen für den ersten Überblick.'}</p></div></li><li><span>02</span><div><strong>Jessica schaut persönlich drauf</strong><p>Keine automatische Standardauswertung, sondern eine echte Vorprüfung.</p></div></li><li><span>03</span><div><strong>Ihr besprecht den sinnvollsten Weg</strong><p>Audit, Strategie, Content, Ads – oder auch erst einmal gar nichts, wenn die Basis noch fehlt.</p></div></li></ol><div className="contact-direct"><small>Lieber direkt per E-Mail?</small><a href="mailto:service@jj-media.info">service@jj-media.info ↗</a></div></div>
      <div className="form-shell reveal"><ContactForm/></div>
    </div></section>

    <section className="contact-reassurance-section"><div className="container"><div><span>01</span><strong>Keine Weitergabe deiner Daten</strong><p>Deine Angaben werden ausschließlich zur Bearbeitung deiner Anfrage genutzt.</p></div><div><span>02</span><strong>Keine künstliche Verknappung</strong><p>Du bekommst eine realistische Aussage zu Kapazität, Timing und Aufwand.</p></div><div><span>03</span><strong>Keine falschen Versprechen</strong><p>Ergebnisse hängen von Angebot, Markt, Budget und Umsetzung ab – das wird offen eingeordnet.</p></div></div></section>
  </>
}
