export type ServiceDetail = {
  problem: string
  promise: string
  deliverables: string[]
  idealFor: string[]
  outcomes: string[]
  process: Array<{ title: string; text: string }>
  faqs: Array<{ question: string; answer: string }>
}

export const homepageFAQs = [
  { question: 'Für wen ist JJ-Media die richtige Wahl?', answer: 'Für Unternehmen und Selbstständige, die Social Media nicht als lose Posting-Aufgabe, sondern als strategisches System für Sichtbarkeit, Vertrauen und Anfragen aufbauen möchten.' },
  { question: 'Muss ich direkt ein Komplettpaket buchen?', answer: 'Nein. Wir starten am größten Engpass und kombinieren nur die Bausteine, die für dein Ziel und deine vorhandenen Ressourcen sinnvoll sind.' },
  { question: 'Wie beginnt eine Zusammenarbeit?', answer: 'Mit einer kostenlosen Potenzialanalyse. Dabei klären wir Ausgangslage, Ziele, Zielgruppe und den sinnvollsten nächsten Schritt – offen und ohne pauschale Versprechen.' },
  { question: 'Arbeitet JJ-Media auch remote?', answer: 'Ja. Die Zusammenarbeit ist für Unternehmen im gesamten DACH-Raum ausgelegt. Abstimmungen, Strategie und Freigaben funktionieren strukturiert und vollständig remote.' },
  { question: 'Wie schnell sind erste Ergebnisse sichtbar?', answer: 'Das hängt von Ausgangslage, Angebot und Kanal ab. Erste qualitative Learnings entstehen oft früh; belastbare Wachstums- und Conversion-Effekte benötigen ein konsequent getestetes System.' },
]

export const serviceDetails: Record<string, ServiceDetail> = {
  'analyse-audit': {
    problem: 'Es gibt viele Ideen und Einzelmaßnahmen, aber keine belastbare Diagnose, welcher Engpass zuerst gelöst werden sollte.',
    promise: 'Eine ehrliche Bestandsaufnahme mit priorisierter Roadmap, damit Zeit und Budget dort wirken, wo sie den größten Unterschied machen.',
    deliverables: ['Audit von Auftritt, Content und Customer Journey', 'Analyse von Botschaften und Zielgruppenansprache', 'Priorisierte Chancen- und Engpassliste', 'Konkrete 90-Tage-Roadmap'],
    idealFor: ['du vor einer größeren Investition Klarheit brauchst', 'deine bisherigen Maßnahmen wenig Wirkung zeigen', 'du eine unabhängige Ersteinschätzung möchtest'],
    outcomes: ['Klarheit über den wichtigsten Engpass', 'Eine realistische Reihenfolge der Maßnahmen', 'Weniger Streuverlust bei Zeit und Budget'],
    process: [
      { title: 'Sichten', text: 'Wir sammeln Ziele, Kanäle, Inhalte, Kennzahlen und relevante Rahmenbedingungen.' },
      { title: 'Bewerten', text: 'Auftritt, Botschaft, Content und Conversion-Wege werden systematisch geprüft.' },
      { title: 'Priorisieren', text: 'Du erhältst klare Empfehlungen inklusive Reihenfolge und nächsten Schritten.' },
    ],
    faqs: [
      { question: 'Was muss ich für den Audit bereitstellen?', answer: 'Website, Social-Profile, vorhandene Auswertungen und ein kurzer Überblick zu Zielgruppe, Angebot und Zielen reichen für den Einstieg.' },
      { question: 'Ist anschließend eine Zusammenarbeit verpflichtend?', answer: 'Nein. Die Ergebnisse sind eigenständig nutzbar. Wenn es fachlich und menschlich passt, kann JJ-Media die Umsetzung begleiten.' },
      { question: 'Kann auch nur ein einzelner Kanal analysiert werden?', answer: 'Ja. Der Umfang wird passend zum konkreten Problem und zur verfügbaren Datenlage festgelegt.' },
    ],
  },
  'strategie-positionierung': {
    problem: 'Es wird Content produziert, aber Positionierung, Zielgruppe und messbare Ziele bleiben unscharf.',
    promise: 'Ein belastbares Social-Media-Fundament, das Entscheidungen vereinfacht und jede Maßnahme auf Wirkung ausrichtet.',
    deliverables: ['Positionierungs- und Zielgruppenanalyse', 'Kanal- und Content-Strategie', 'Content-Pillars und Format-System', 'KPI-Framework und Reporting'],
    idealFor: ['du Klarheit vor weiterer Produktion brauchst', 'deine Inhalte austauschbar wirken', 'Entscheidungen bisher aus Bauchgefühl entstehen'],
    outcomes: ['Eine klare kommunikative Richtung', 'Weniger Reibung in Planung und Freigabe', 'Messbare Prioritäten statt Vanity Metrics'],
    process: [
      { title: 'Analyse', text: 'Wir prüfen Marke, Angebot, Zielgruppe, Wettbewerb und bisherige Performance.' },
      { title: 'Strategie', text: 'Wir definieren Botschaften, Formate, Kanäle und die Aufgaben des Contents.' },
      { title: 'Umsetzungssystem', text: 'Du erhältst einen konkreten Plan für Produktion, Distribution und Optimierung.' },
    ],
    faqs: [
      { question: 'Kann ich die Strategie selbst umsetzen?', answer: 'Ja. Alle Empfehlungen werden so aufbereitet, dass dein Team sie praktisch nutzen kann. Auf Wunsch begleitet JJ-Media auch die Umsetzung.' },
      { question: 'Werden vorhandene Daten berücksichtigt?', answer: 'Ja. Bestehende Insights, Kampagnendaten, Website-Zahlen und qualitative Erfahrungen fließen in die Analyse ein.' },
      { question: 'Ist die Strategie auch für neue Accounts geeignet?', answer: 'Ja. Wenn noch wenig Daten vorhanden sind, arbeiten wir hypothesenbasiert und planen von Beginn an klare Lernschleifen ein.' },
    ],
  },
  'content-ugc': {
    problem: 'Der Content kostet viel Zeit, wirkt inkonsistent oder schafft Aufmerksamkeit, ohne Vertrauen aufzubauen.',
    promise: 'Ein wiedererkennbares Content-System mit starken Hooks, klaren Botschaften und Formaten für echte Geschäftsziele.',
    deliverables: ['Redaktions- und Produktionsplanung', 'Reels, Posts und Kampagnen-Assets', 'Hooks, Skripte und Storyboards', 'Schnitt, Design und kanaloptimierte Varianten'],
    idealFor: ['du regelmäßig hochwertigen Content brauchst', 'deine Marke professionell und nahbar wirken soll', 'Produktion und Freigaben effizienter werden müssen'],
    outcomes: ['Mehr Wiedererkennung im Feed', 'Ein verlässlicher Produktionsrhythmus', 'Content für Aufmerksamkeit, Proof und Conversion'],
    process: [
      { title: 'Briefing', text: 'Wir definieren Ziel, Botschaft, Formate und benötigte Assets.' },
      { title: 'Produktion', text: 'Aus Ideen entstehen Skripte, Aufnahmen, Designs und passgenaue Varianten.' },
      { title: 'Optimierung', text: 'Learnings aus Performance und Feedback fließen in die nächsten Inhalte ein.' },
    ],
    faqs: [
      { question: 'Übernimmt JJ-Media auch die komplette Produktion?', answer: 'Ja. Der Umfang kann von Konzeption und Skripten bis zu Aufnahme, Schnitt, Design und Veröffentlichung reichen.' },
      { question: 'Können vorhandene Fotos und Videos genutzt werden?', answer: 'Ja. Bestehendes Material wird geprüft, neu strukturiert und für passende Formate weiterverarbeitet.' },
      { question: 'Ist UGC Teil der Content Creation?', answer: 'Ja. UGC kann inklusive Konzept, Briefing, Creator-Auswahl und Varianten für Organic und Ads eingebunden werden.' },
    ],
  },
  'social-ads': {
    problem: 'Kampagnen verbrauchen Budget, während Creatives, Zielgruppenansprache und Landingpage nicht konsequent zusammenspielen.',
    promise: 'Social Ads als kontrolliertes Lern- und Wachstumssystem – kreativ stark, datenbasiert gesteuert und auf Wirtschaftlichkeit ausgerichtet.',
    deliverables: ['Kampagnen- und Funnel-Konzept', 'Creative-Strategie und Anzeigenvarianten', 'Setup, Tracking und laufende Steuerung', 'Reporting mit konkreten Handlungsempfehlungen'],
    idealFor: ['du qualifizierte Anfragen oder Verkäufe skalieren willst', 'deine bisherigen Anzeigen stagnieren', 'du mehr aus vorhandenen Creatives herausholen möchtest'],
    outcomes: ['Schnellere Creative-Learnings', 'Nachvollziehbare Budgetentscheidungen', 'Ein skalierbarer Prozess statt Einzelkampagnen'],
    process: [
      { title: 'Fundament', text: 'Wir prüfen Angebot, Funnel, Tracking, Zielgruppen und bisherige Kampagnen.' },
      { title: 'Testing', text: 'Hooks, Botschaften, Formate und Zielgruppen werden strukturiert gegeneinander getestet.' },
      { title: 'Skalierung', text: 'Gewinner werden ausgebaut und Budgets anhand belastbarer Signale verteilt.' },
    ],
    faqs: [
      { question: 'Welches Werbebudget ist sinnvoll?', answer: 'Das hängt von Ziel, Markt und Datenlage ab. Im Erstgespräch definieren wir ein Budget, das genügend Lernsignale erzeugt und wirtschaftlich vertretbar bleibt.' },
      { question: 'Erstellt JJ-Media auch die Anzeigen-Creatives?', answer: 'Ja. Creative-Strategie und Produktion können direkt mit dem Kampagnenmanagement verbunden werden.' },
      { question: 'Ist ein bestehendes Tracking erforderlich?', answer: 'Nicht zwingend. Vor dem Start prüfen wir das Setup und definieren, welche technische Grundlage für belastbare Entscheidungen nötig ist.' },
    ],
  },
  'reise-tourismus': {
    problem: 'Schöne Reisemotive erzeugen Fernweh, begleiten Interessenten aber zu selten von der Inspiration bis zur Buchung.',
    promise: 'Ein Travel-Content-System, das Emotion, Expertise, Proof und Conversion über die gesamte Customer Journey verbindet.',
    deliverables: ['Travel-Content- und Kampagnenstrategie', 'Reels, UGC und Creator Content', 'Experten- und Angebotsformate', 'Social Ads und Retargeting', 'Saisonale Redaktions- und Produktionsplanung'],
    idealFor: ['du erklärungsbedürftige Reiseangebote vermarktest', 'Vertrauen und Beratung kaufentscheidend sind', 'du Gäste- und Creator Content systematisch nutzen willst'],
    outcomes: ['Mehr qualifizierte Aufmerksamkeit', 'Stärkeres Vertrauen vor der Beratung', 'Klarere Wege von Social Media zur Anfrage oder Buchung'],
    process: [
      { title: 'Reise analysieren', text: 'Wir betrachten Angebot, Saison, Zielgruppen und typische Buchungsbarrieren.' },
      { title: 'Journey planen', text: 'Content-Aufgaben werden von Sehnsucht über Orientierung und Proof bis zur Handlung verteilt.' },
      { title: 'Produzieren & lernen', text: 'Formate, Creatives und Kampagnen werden umgesetzt, gemessen und laufend verbessert.' },
    ],
    faqs: [
      { question: 'Für welche Tourismusunternehmen ist das Angebot geeignet?', answer: 'Unter anderem für Reiseveranstalter, Kreuzfahrtanbieter, Reiseberater, Hotels, Resorts, Destinationen und spezialisierte Touroperator.' },
      { question: 'Kann vorhandener Gäste- oder Creator Content genutzt werden?', answer: 'Ja. Wir prüfen Qualität und Nutzungsrechte und entwickeln daraus ein System für Organic Content, Landingpages und Ads.' },
      { question: 'Begleitet JJ-Media auch saisonale Kampagnen?', answer: 'Ja. Planung und Produktion können auf Frühbucherphasen, Saisonstarts, konkrete Reisen oder dauerhaft buchbare Angebote ausgerichtet werden.' },
      { question: 'Funktioniert die Zusammenarbeit ohne Vor-Ort-Termin?', answer: 'Viele Bausteine funktionieren vollständig remote. Wenn eine Produktion vor Ort sinnvoll ist, wird sie passend zu Ziel, Destination und Budget geplant.' },
    ],
  },
}
