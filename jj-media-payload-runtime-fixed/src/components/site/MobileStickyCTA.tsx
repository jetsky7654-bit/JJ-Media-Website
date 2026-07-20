import Link from 'next/link'

export function MobileStickyCTA() {
  return (
    <aside aria-label="Projektanfrage" className="mobile-sticky-cta">
      <div><span>Kostenlose Potenzialanalyse</span><strong>Dein nächster sinnvoller Schritt</strong></div>
      <Link href="/kontakt">Projekt besprechen ↗</Link>
    </aside>
  )
}
