'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [auditScore, setAuditScore] = useState<number | null>(null)
  const [requestType, setRequestType] = useState<string | null>(null)
  const interestRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requested = params.get('interesse')
    const score = Number(params.get('score'))
    const values: Record<string, string> = {
      audit: 'Social Growth Score auswerten',
      report: 'DACH Social Report',
      strategie: 'Strategie & Positionierung',
      content: 'Content, Reels & UGC',
      growth: 'Social Ads & Creative Testing',
    }
    if (requested && values[requested] && interestRef.current) interestRef.current.value = values[requested]
    setRequestType(requested)
    if (requested === 'audit' && Number.isFinite(score) && score >= 0 && score <= 100) setAuditScore(Math.round(score))
  }, [])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = new FormData(event.currentTarget)
    const context = [
      `Leistung: ${form.get('interest') || 'Noch offen'}`,
      auditScore !== null ? `Social Growth Score: ${auditScore}/100` : null,
      `Branche: ${form.get('industry') || 'Nicht angegeben'}`,
      `Website: ${form.get('website') || 'Nicht angegeben'}`,
      `Start: ${form.get('start') || 'Noch offen'}`,
      '',
      String(form.get('message') || ''),
    ].filter(Boolean).join('\n')
    const data = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      phone: form.get('phone'),
      budget: form.get('budget'),
      message: context,
      source: auditScore !== null ? `Website · Social Growth Score · ${auditScore}/100` : 'Website · Potenzialanalyse',
      consent: true,
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error()
      setStatus('success')
      event.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form premium-form" onSubmit={submit}>
      <div className="form-intro">
        <span className="eyebrow">{requestType === 'audit' ? 'Persönliche Score-Auswertung' : 'Projektcheck · ca. 2 Minuten'}</span>
        <p>{requestType === 'audit' ? 'Dein Ergebnis ist bereits übernommen. Ergänze nur noch den Kontext, damit Jessica die Zahl sinnvoll für deine Marke einordnen kann.' : 'Je konkreter die Ausgangslage, desto hilfreicher kann Jessicas Ersteinschätzung sein.'}</p>
      </div>
      {auditScore !== null ? <div className="audit-form-context" aria-live="polite"><div><strong>{auditScore}</strong><span>/ 100</span></div><div><small>Dein Social Growth Score</small><b>{auditScore < 45 ? 'Fundament zuerst' : auditScore < 75 ? 'Systematisieren' : 'Skalieren'}</b><p>Dieser Wert wird automatisch zusammen mit deiner Anfrage übermittelt.</p></div></div> : null}
      <div className="form-row">
        <div><label htmlFor="name">Name *</label><input autoComplete="name" id="name" name="name" required/></div>
        <div><label htmlFor="email">E-Mail *</label><input autoComplete="email" id="email" name="email" required type="email"/></div>
      </div>
      <div className="form-row">
        <div><label htmlFor="company">Unternehmen</label><input autoComplete="organization" id="company" name="company"/></div>
        <div><label htmlFor="website">Website oder Social-Profil</label><input id="website" name="website" placeholder="https://"/></div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="interest">Wobei brauchst du Unterstützung? *</label>
          <select id="interest" name="interest" ref={interestRef} required>
            <option value="">Bitte wählen</option>
            <option>Analyse & Audit</option>
            <option>Strategie & Positionierung</option>
            <option>Content, Reels & UGC</option>
            <option>Social Ads & Creative Testing</option>
            <option>Reise- & Tourismusmarketing</option>
            <option>Social Growth Score auswerten</option>
            <option>DACH Social Report</option>
            <option>Noch offen – Empfehlung gewünscht</option>
          </select>
        </div>
        <div><label htmlFor="industry">Branche</label><input id="industry" name="industry" placeholder="z. B. Tourismus, Beratung, E-Commerce"/></div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="budget">Geplanter Investitionsrahmen</label>
          <select id="budget" name="budget">
            <option value="">Noch offen</option>
            <option>unter 2.000 €</option>
            <option>2.000–5.000 €</option>
            <option>5.000–10.000 €</option>
            <option>über 10.000 €</option>
          </select>
        </div>
        <div>
          <label htmlFor="start">Gewünschter Start</label>
          <select id="start" name="start">
            <option value="">Noch offen</option>
            <option>So schnell wie sinnvoll</option>
            <option>In 1–2 Monaten</option>
            <option>In 3–6 Monaten</option>
            <option>Erst einmal Orientierung</option>
          </select>
        </div>
      </div>
      <div><label htmlFor="message">{requestType === 'audit' ? 'Wo wünschst du dir die genauere Einordnung? *' : 'Was soll sich konkret verändern? *'}</label><textarea id="message" name="message" placeholder={requestType === 'audit' ? 'Welche Dimension fühlt sich aktuell am schwächsten an? Was möchtest du mit Social Media konkret erreichen?' : 'Wo stehst du aktuell, was bremst und welches Ergebnis wäre für dich wertvoll?'} required rows={6}/></div>
      <div className="form-row">
        <div><label htmlFor="phone">Telefon (optional)</label><input autoComplete="tel" id="phone" name="phone"/></div>
      </div>
      <label className="consent-row"><input required type="checkbox"/> <span>Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. Details stehen in der <a href="/datenschutz">Datenschutzerklärung</a>.</span></label>
      <button className="btn btn-coral btn-large" disabled={status === 'sending'}>{status === 'sending' ? 'Wird sicher gesendet …' : requestType === 'audit' ? 'Score persönlich auswerten lassen ↗' : 'Kostenlose Ersteinschätzung anfragen ↗'}</button>
      <div className="form-reassurance"><span>✓ Persönliche Prüfung</span><span>✓ Keine Verkaufsschleife</span><span>✓ Vertrauliche Behandlung</span></div>
      {status === 'success' ? <div className="form-status success">Danke! Jessica prüft deine Angaben und meldet sich persönlich.</div> : null}
      {status === 'error' ? <div className="form-status error">Die Anfrage konnte nicht gesendet werden. Bitte schreibe direkt an service@jj-media.info.</div> : null}
    </form>
  )
}
