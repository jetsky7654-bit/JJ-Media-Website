'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { auditDimensions } from '@/lib/siteContent'

type Scores = Record<string, number>

export function SocialMediaAudit() {
  const [scores, setScores] = useState<Scores>({})
  const answered = Object.keys(scores).length
  const total = useMemo(() => Object.values(scores).reduce((sum, value) => sum + value, 0), [scores])
  const percentage = answered === auditDimensions.length ? Math.round((total / (auditDimensions.length * 5)) * 100) : 0
  const result = percentage < 45
    ? { label: 'Fundament zuerst', text: 'Der größte Hebel liegt wahrscheinlich in Positionierung, Proof und einem klaren Content-System.' }
    : percentage < 75
      ? { label: 'Systematisieren', text: 'Die Basis ist vorhanden. Jetzt geht es um wiederholbare Formate, Distribution und konsequente Lernschleifen.' }
      : { label: 'Skalieren', text: 'Das Fundament wirkt stabil. Creative Testing, Paid Distribution und Conversion-Optimierung sind die nächsten Hebel.' }

  return <div className="audit-tool">
    <div className="audit-progress"><span style={{ width: `${(answered / auditDimensions.length) * 100}%` }}/></div>
    <div className="audit-meta"><span>{answered} von {auditDimensions.length} bewertet</span><span>Selbsteinschätzung · keine Datenspeicherung</span></div>
    <div className="audit-questions">
      {auditDimensions.map((dimension, index) => <fieldset className="audit-question reveal" key={dimension.key}>
        <legend><small>0{index + 1} · {dimension.title}</small>{dimension.question}</legend>
        <div className="audit-scale" aria-label={`${dimension.title} bewerten`}>
          {[1,2,3,4,5].map((value) => <button aria-pressed={scores[dimension.key] === value} className={scores[dimension.key] === value ? 'is-selected' : ''} key={value} onClick={() => setScores((current) => ({ ...current, [dimension.key]: value }))} type="button"><strong>{value}</strong><span>{value === 1 ? 'trifft nicht zu' : value === 5 ? 'trifft voll zu' : ''}</span></button>)}
        </div>
      </fieldset>)}
    </div>
    {answered === auditDimensions.length ? <section className="audit-result" aria-live="polite"><div className="audit-score"><strong>{percentage}</strong><span>/ 100</span></div><div><span className="eyebrow">Dein Ergebnis · {result.label}</span><h2>{result.text}</h2><p>Der Score ist eine strukturierte Ersteinschätzung, keine Erfolgsgarantie. In einer persönlichen Analyse prüfen wir die Antworten anhand deines Angebots, deiner Daten und deiner Zielgruppe.</p><Link className="btn btn-coral" href={`/kontakt?interesse=audit&score=${percentage}`}>Ergebnis persönlich einordnen ↗</Link></div></section> : null}
  </div>
}
