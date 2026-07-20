export const defaultNavigation = [
  { label: 'Start', href: '/' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Projekte', href: '/projekte' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Insights', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const fallbackServices = [
  { id: 'audit', title: 'Analyse & Audit', slug: 'analyse-audit', eyebrow: 'Klarheit', shortDescription: 'Eine fundierte Bestandsaufnahme, die sichtbar macht, welche Engpässe Wachstum bremsen und wo Investitionen den größten Unterschied machen.', benefits: [{ text: 'Audit' }, { text: 'Roadmap' }] },
  { id: 'strategy', title: 'Strategie & Positionierung', slug: 'strategie-positionierung', eyebrow: 'Fundament', shortDescription: 'Eine klare Positionierung, fundierte Zielgruppenanalyse und ein System, das anhand echter Performance-Daten laufend besser wird.', benefits: [{ text: 'Positionierung' }, { text: 'Content-System' }] },
  { id: 'content', title: 'Content, Reels & UGC', slug: 'content-ugc', eyebrow: 'Creative', shortDescription: 'Reels, UGC, Social Posts und Kampagnen-Assets, die Marken nicht nur schön aussehen lassen, sondern Aufmerksamkeit in Vertrauen verwandeln.', benefits: [{ text: 'Reels' }, { text: 'UGC' }] },
  { id: 'ads', title: 'Social Ads', slug: 'social-ads', eyebrow: 'Performance', shortDescription: 'Performance-Kampagnen für qualifizierte Anfragen, Verkäufe und messbares Wachstum – kreativ und datenbasiert.', benefits: [{ text: 'Creative Testing' }, { text: 'Skalierung' }] },
  { id: 'travel', title: 'Reise & Tourismus', slug: 'reise-tourismus', eyebrow: 'Branchenfokus', shortDescription: 'Strategie, Content, UGC und Ads für Reiseangebote – emotional genug für Fernweh und klar genug für Beratung und Buchung.', benefits: [{ text: 'Travel Content' }, { text: 'Creator' }] },
]

export function mergeServicesWithCMS(cmsServices: any[]) {
  const cmsBySlug = new Map(cmsServices.map((service) => [service.slug, service]))
  const merged = fallbackServices.map((fallback) => ({
    ...fallback,
    ...(cmsBySlug.get(fallback.slug) || {}),
  }))
  const fallbackSlugs = new Set(fallbackServices.map((service) => service.slug))
  return [...merged, ...cmsServices.filter((service) => !fallbackSlugs.has(service.slug))]
}

export const fallbackCases = [
  {
    id: 'postings',
    title: 'Vom visuellen Flickenteppich zur klaren Content-Marke',
    client: 'Brand Content',
    industry: 'Personal Brand & Beratung',
    slug: 'brand-content-design',
    excerpt: 'Ein modulares Design- und Botschaftssystem, das Expertise schneller erkennbar macht und die laufende Content-Produktion vereinfacht.',
    image: '/assets/insta-4.webp',
    metrics: [{ value: '+62 %', label: 'Interaktionen' }, { value: '3,4×', label: 'mehr Saves' }, { value: '-41 %', label: 'Produktionszeit' }],
    challengeText: 'Die Inhalte waren fachlich stark, aber visuell und sprachlich nicht als zusammengehörige Marke erkennbar. Jeder Beitrag begann nahezu bei null. Dadurch entstanden lange Abstimmungen, unregelmäßige Veröffentlichungen und zu wenig Wiedererkennung.',
    solutionText: 'JJ-Media ordnete Zielgruppenfragen nach Kaufphase, entwickelte eine klare Botschaftshierarchie und übersetzte sie in wiederverwendbare Content-Serien. Ein flexibles Designsystem verband Carousels, Thought-Leadership-Posts, Proof und Angebotskommunikation, ohne die Inhalte in starre Vorlagen zu pressen.',
    resultText: 'Die Marke konnte Inhalte schneller planen, produzieren und freigeben. Gleichzeitig wurden die Kernthemen bereits beim ersten Kontakt klarer wahrgenommen. Die ausgewiesenen Werte stammen aus dem freigegebenen Projektzeitraum; individuelle Ergebnisse sind nicht übertragbar.',
  },
  {
    id: 'reels',
    title: 'Ein Reel-System für Reichweite, Vertrauen und Nachfrage',
    client: 'Video Content',
    industry: 'Dienstleistung & Expertenmarke',
    slug: 'reel-content',
    excerpt: 'Eine skalierbare Kurzvideo-Architektur, in der Hooks, Story, Expertise und Call-to-Action jeweils eine klare Aufgabe übernehmen.',
    image: '/assets/insta-5.webp',
    metrics: [{ value: '1,8 Mio.', label: 'Views' }, { value: '+118 %', label: 'Profilaufrufe' }, { value: '27', label: 'getestete Hooks' }],
    challengeText: 'Einzelne Videos erzielten Reichweite, doch die Ergebnisse waren schwer reproduzierbar. Themenwahl, Einstieg und Handlungsaufforderung folgten keinem gemeinsamen System. Aufmerksamkeit führte deshalb zu selten zu qualifizierten Profilbesuchen und Gesprächen.',
    solutionText: 'Aus Kundenfragen, Einwänden und typischen Fehlannahmen entstanden vier wiederholbare Reel-Formate. Für jedes Format wurden Hook-Prinzipien, Spannungsbogen, visuelle Führung und passende nächste Schritte definiert. Produktion und Schnitt wurden in Batches organisiert; die Auswertung erfolgte nach Hook, Zuschauerbindung, Profilaktion und Conversion-Signal.',
    resultText: 'Statt auf einzelne virale Treffer zu hoffen, entstand ein belastbarer Lernprozess. Erfolgreiche Einstiege und Themen konnten gezielt weiterentwickelt werden. Die Verbindung aus Reichweiten-, Vertrauens- und Angebotsformaten erhöhte die Qualität der Profilbesuche.',
  },
  {
    id: 'concept',
    title: 'Creative Testing, das aus Anzeigen echte Learnings macht',
    client: 'Creative Direction',
    industry: 'E-Commerce & Leadgenerierung',
    slug: 'creative-direction',
    excerpt: 'Eine Kampagnenlogik, die Zielgruppenprobleme, Botschaften und Creative-Varianten strukturiert testbar macht.',
    image: '/assets/insta-2.webp',
    metrics: [{ value: '4,9 %', label: 'CTR' }, { value: '-37 %', label: 'Cost per Lead' }, { value: '12', label: 'Creative-Winkel' }],
    challengeText: 'Die Kampagnen wurden regelmäßig optimiert, doch die Creatives unterschieden sich hauptsächlich in Farbe und Schnitt. Dadurch blieb unklar, welche Botschaft, welches Problem und welcher Proof tatsächlich Kaufinteresse auslösten.',
    solutionText: 'JJ-Media entwickelte eine Testing-Matrix aus Zielgruppenbewusstsein, Kaufmotiv, Einwand, Hook und Beweisführung. UGC, Produktdemonstration, Expertenstatement und statische Motive wurden nicht zufällig produziert, sondern als klar benannte Hypothesen gegeneinander getestet.',
    resultText: 'Das Team konnte Gewinner nicht nur erkennen, sondern verstehen. Schwache Winkel wurden früh beendet, tragfähige Botschaften in weitere Formate übersetzt und Budgetentscheidungen nachvollziehbarer getroffen. Die Kennzahlen beziehen sich auf den dokumentierten Kampagnenzeitraum.',
  },
]

export const fallbackTestimonials = [
  { name: 'Peggy Gerschler', role: 'Comic-Händlerin', quote: 'Es war ein unglaubliches Gefühl, als ich meinen ersten Verkauf im eigenen Online-Shop sah. Jessica hat mir geholfen, meine Comics sichtbar zu machen.', image: '/assets/testimonial-peggy.png' },
  { name: 'Özhan', role: 'Unternehmer', quote: 'Die Zusammenarbeit war klar, schnell und kreativ. Aus einzelnen Ideen wurde eine Social-Media-Präsenz, die endlich professionell wirkt.', image: '/assets/testimonial-oezhan.jpg' },
  { name: 'Anna', role: 'Selbstständige', quote: 'Jessica denkt nicht nur in schönen Posts, sondern versteht die Strategie dahinter. Das hat bei unseren Inhalten einen riesigen Unterschied gemacht.', image: '/assets/testimonial-anna.jpg' },
  { name: 'Raphael Hermann', role: 'Digitalberater', quote: 'Jessica verbindet Verlässlichkeit, Designgefühl und Performance-Denken. Genau diese Kombination ist im Social-Media-Bereich selten.', image: '/assets/testimonial-raphael.jpg' },
]

export const fallbackPosts = [
  {
    id: '1', slug: 'social-media-strategie-2026', title: 'Social-Media-Strategie 2026: Was Marken wirklich brauchen',
    excerpt: 'Ein praxisnaher Leitfaden für Positionierung, Content-System, Distribution und messbare Ziele.', category: 'Strategie', publishedAt: '2026-07-10T10:00:00.000Z',
    keyTakeaways: [{ text: 'Ein Kanal braucht ein Geschäftsziel, nicht nur einen Redaktionsplan.' }, { text: 'Vier Content-Aufgaben reichen: Aufmerksamkeit, Orientierung, Proof und Handlung.' }, { text: 'Bewertet werden Signale entlang der Customer Journey – nicht Reichweite allein.' }],
    sections: [
      { title: 'Strategie beginnt beim Geschäftsmodell', text: 'Bevor Formate und Posting-Frequenzen festgelegt werden, müssen Angebot, Marge, Entscheidungsdauer und gewünschte Handlung klar sein. Ein beratungsintensives B2B-Angebot braucht eine andere Content-Architektur als ein impulsstarkes Produkt. Social Media ist deshalb kein isolierter Kanal, sondern ein Teil der gesamten Nachfrage- und Vertrauensbildung.' },
      { title: 'Positionierung muss im Feed erkennbar werden', text: 'Eine Positionierung ist erst dann nützlich, wenn sie Themenauswahl, Beispiele, Sprache und Beweisführung verändert. Gute Inhalte beantworten wiederholt drei Fragen: Für wen ist das relevant, welches konkrete Problem wird gelöst und warum ist diese Perspektive glaubwürdig?' },
      { title: 'Vier Aufgaben für jedes Content-System', text: 'Aufmerksamkeitsformate öffnen die Tür. Orientierung erklärt Problem und Lösung. Proof reduziert Risiko durch Ergebnisse, Prozesse und echte Erfahrungen. Handlungsformate machen den nächsten Schritt konkret. Nicht jeder Beitrag muss alles leisten – aber der Redaktionsmix muss alle vier Aufgaben abdecken.' },
      { title: 'Messen, was Entscheidungen verbessert', text: 'Views und Likes sind Frühindikatoren. Entscheidend sind qualifizierte Profilbesuche, gespeicherte Inhalte, wiederkehrende Zuschauer, Direktnachrichten, Landingpage-Aktionen und Anfragen. Die Auswertung soll nicht beeindrucken, sondern die nächste Themen-, Creative- oder Budgetentscheidung verbessern.' },
    ],
    faqs: [{ question: 'Wie oft sollte ein Unternehmen posten?', answer: 'So häufig, wie relevante Qualität zuverlässig produziert und ausgewertet werden kann. Für viele Unternehmen sind zwei bis vier starke Veröffentlichungen pro Woche sinnvoller als täglicher austauschbarer Content.' }, { question: 'Welche Plattform ist die wichtigste?', answer: 'Die Plattform, auf der Zielgruppe, Formatstärke und wirtschaftlicher nächster Schritt zusammenpassen. Die Entscheidung sollte nicht allein von allgemeiner Reichweite abhängen.' }],
  },
  {
    id: '2', slug: 'reels-die-kunden-gewinnen', title: 'Reels, die nicht nur Views, sondern Kunden gewinnen',
    excerpt: 'Wie Hook, Story, Proof und Call-to-Action zu einem wirksamen Kurzvideo-System werden.', category: 'Content', publishedAt: '2026-07-05T10:00:00.000Z',
    keyTakeaways: [{ text: 'Der Hook qualifiziert – er soll nicht nur möglichst viele Menschen stoppen.' }, { text: 'Eine klare Kernaussage schlägt fünf lose Tipps.' }, { text: 'Der CTA muss zum Bewusstseinsstand des Zuschauers passen.' }],
    sections: [
      { title: 'Reichweite ist nicht automatisch Nachfrage', text: 'Ein Reel kann viele Menschen erreichen und trotzdem geschäftlich wirkungslos bleiben. Entscheidend ist, ob die richtigen Personen ein relevantes Problem erkennen, der Argumentation folgen und einen passenden nächsten Schritt sehen.' },
      { title: 'Der Hook ist ein strategischer Filter', text: 'Starke Einstiege benennen eine konkrete Situation, Spannung oder Konsequenz. Statt „Drei Social-Media-Tipps“ funktioniert häufig eine präzisere Beobachtung wie „Warum dein fachlich bester Post kaum Anfragen erzeugt“. So steigt nicht nur Aufmerksamkeit, sondern Relevanz.' },
      { title: 'Story und Proof reduzieren Zweifel', text: 'Nach dem Einstieg braucht das Video eine nachvollziehbare Entwicklung: Problem, Ursache, neue Perspektive und Beleg. Proof kann aus Demonstrationen, Beispielen, Kundenstimmen, Daten oder einem transparenten Blick in den Prozess bestehen.' },
      { title: 'Der nächste Schritt darf klein sein', text: 'Kalte Zuschauer müssen selten sofort ein Erstgespräch buchen. Je nach Inhalt können Speichern, Folgen, Kommentieren, Profilbesuch, Checkliste oder Direktnachricht der sinnvollere CTA sein. Conversion entsteht oft über mehrere Kontakte.' },
    ],
    faqs: [{ question: 'Wie lang sollte ein Reel sein?', answer: 'So kurz wie möglich und so lang wie nötig. Einfache Aussagen können in 15 Sekunden funktionieren; erklärungsbedürftige Inhalte dürfen länger sein, wenn jede Passage relevant bleibt.' }, { question: 'Braucht jedes Reel einen Verkauf-CTA?', answer: 'Nein. Ein guter Content-Mix verbindet Lern-, Vertrauens- und Handlungsziele. Ein unpassender harter CTA kann die Wirkung eines frühen Kontaktpunkts verschlechtern.' }],
  },
  {
    id: '3', slug: 'meta-ads-kreatives', title: 'Warum Meta Ads zuerst ein Creative-Problem sind',
    excerpt: 'Die wichtigsten Hebel für Werbeanzeigen, die im Feed stoppen und wirtschaftlich skalieren.', category: 'Social Ads', publishedAt: '2026-06-28T10:00:00.000Z',
    keyTakeaways: [{ text: 'Creative Testing braucht benannte Hypothesen statt kosmetischer Varianten.' }, { text: 'Hook, Botschaft, Proof und Format werden getrennt bewertet.' }, { text: 'Landingpage und Angebot begrenzen, was ein Creative leisten kann.' }],
    sections: [
      { title: 'Targeting ersetzt keine relevante Botschaft', text: 'Plattformen können Auslieferung automatisieren, aber nicht die Verbindung zwischen Problem, Angebot und überzeugender Darstellung. Wenn verschiedene Anzeigen nur dieselbe Botschaft neu einfärben, entstehen kaum verwertbare Learnings.' },
      { title: 'Teste Winkel, nicht nur Varianten', text: 'Ein Creative-Winkel beschreibt, warum eine Zielgruppe handeln sollte: Zeit sparen, Risiko reduzieren, Status gewinnen, Aufwand vermeiden oder ein gewünschtes Erlebnis erreichen. Erst wenn diese Hypothesen klar getrennt sind, zeigen Kampagnendaten mehr als Gewinner und Verlierer.' },
      { title: 'UGC ist ein Format, keine Strategie', text: 'UGC funktioniert nicht automatisch, weil eine Person in die Kamera spricht. Entscheidend sind glaubwürdiger Kontext, konkrete Sprache, sichtbarer Proof und ein Briefing, das Natürlichkeit ermöglicht, ohne die Verkaufslogik zu verlieren.' },
      { title: 'Skalierung beginnt mit Dokumentation', text: 'Erfolgreiche Teams dokumentieren Hook, Winkel, Format, Zielgruppe, Angebot und Ergebnis. So lassen sich Gewinner weiterentwickeln und schwache Konzepte gezielt ersetzen, statt bei jeder Produktionsrunde wieder bei null anzufangen.' },
    ],
    faqs: [{ question: 'Wie viele Creatives braucht eine Kampagne?', answer: 'Das hängt von Budget, Zielgruppe und Lernziel ab. Wichtiger als eine pauschale Zahl ist, dass jede Variante eine klar benannte Hypothese testet.' }, { question: 'Wann sollte ein Creative ausgetauscht werden?', answer: 'Wenn Effizienz und Aufmerksamkeit belastbar nachlassen oder die Hypothese ausreichend bewertet wurde. Einzelne schwache Tage reichen für eine fundierte Entscheidung meist nicht aus.' }],
  },
  {
    id: '4', slug: 'ugc-briefing-das-natuerlich-klingt', title: 'UGC-Briefings, die verkaufen, ohne nach Werbung zu klingen',
    excerpt: 'Wie Creator klare Leitplanken erhalten und trotzdem glaubwürdig, menschlich und plattformgerecht kommunizieren.', category: 'UGC', publishedAt: '2026-06-20T10:00:00.000Z',
    keyTakeaways: [{ text: 'Briefings definieren Wirkung und Belege – nicht jedes gesprochene Wort.' }, { text: 'Creator-Fit ist wichtiger als reine Followerzahl.' }, { text: 'Nutzungsrechte und Varianten gehören vor der Produktion geklärt.' }],
    sections: [
      { title: 'Natürlichkeit braucht Vorbereitung', text: 'Spontan wirkender UGC entsteht selten ohne Konzept. Ein gutes Briefing beschreibt Zielgruppe, Situation, Kernproblem, gewünschte Wahrnehmung und zwingende Belege, lässt aber Raum für die natürliche Sprache des Creators.' },
      { title: 'Vom Skript zur modularen Storyline', text: 'Statt einen starren Text vorzuschreiben, werden Hook-Optionen, zentrale Story-Beats, Proof und CTA als Module definiert. So bleibt die Botschaft kontrollierbar und die Ausführung glaubwürdig.' },
      { title: 'Mehr Wert aus jeder Produktion', text: 'Bereits im Briefing sollten alternative Hooks, kurze und lange Versionen, B-Roll, Stills und verschiedene CTAs geplant werden. Dadurch entstehen aus einem Dreh mehrere testbare Assets für Organic, Ads und Landingpages.' },
    ],
    faqs: [{ question: 'Muss ein UGC-Creator viele Follower haben?', answer: 'Nein. Für produzierte Werbe-Assets zählen Zielgruppenfit, Ausdruck, Glaubwürdigkeit und Produktionsqualität häufig mehr als die eigene Reichweite.' }],
  },
  {
    id: '5', slug: 'social-media-reise-tourismus', title: 'Social Media für Reise & Tourismus: Von Fernweh zur Buchungsabsicht',
    excerpt: 'Wie Reiseanbieter Inspiration, Beratung, Gästebeweise und Retargeting zu einer durchgängigen Customer Journey verbinden.', category: 'Travel Marketing', publishedAt: '2026-06-12T10:00:00.000Z',
    keyTakeaways: [{ text: 'Reisecontent muss Emotion und Entscheidungssicherheit verbinden.' }, { text: 'Gäste-, Creator- und Expertencontent erfüllen unterschiedliche Aufgaben.' }, { text: 'Lange Buchungszyklen brauchen wiederholte, aufeinander aufbauende Kontakte.' }],
    sections: [
      { title: 'Schöne Bilder sind nur der Anfang', text: 'Reisemotive erzeugen Sehnsucht, beantworten aber selten Fragen zu Ablauf, Zielgruppe, Preiswürdigkeit und Sicherheit. Wer nur Inspiration zeigt, überlässt die eigentliche Kaufentscheidung anderen Kontaktpunkten oder Wettbewerbern.' },
      { title: 'Content entlang der Reiseentscheidung', text: 'Frühe Inhalte machen das Erlebnis vorstellbar. Expertenformate schaffen Orientierung. UGC und Gästestimmen liefern Proof. Angebots- und Retargeting-Content übersetzen Interesse in Beratung oder Buchung. Jede Phase braucht eine eigene Botschaft.' },
      { title: 'Saison und Vorlauf mitdenken', text: 'Redaktions- und Kampagnenplanung sollte nicht erst beim Buchungsstart beginnen. Themen, Creatives und Zielgruppen müssen rechtzeitig aufgebaut werden, damit Nachfrage, Beratungskapazität und Verfügbarkeit zusammenspielen.' },
    ],
    faqs: [{ question: 'Funktioniert UGC auch für hochpreisige Reisen?', answer: 'Ja, wenn er nicht nur Emotion zeigt, sondern Unsicherheit reduziert, Qualität beweist und den Beratungsprozess sinnvoll ergänzt.' }],
  },
  {
    id: '6', slug: 'social-media-agentur-auswahl', title: 'Social-Media-Agentur auswählen: 12 Fragen vor der Zusammenarbeit',
    excerpt: 'Ein ehrlicher Kriterienkatalog für Unternehmen, die Strategie, Content oder Ads extern vergeben möchten.', category: 'Zusammenarbeit', publishedAt: '2026-06-04T10:00:00.000Z',
    keyTakeaways: [{ text: 'Verantwortung, Entscheidungswege und Erfolgskriterien müssen vorab klar sein.' }, { text: 'Beispiele sollten die Arbeitslogik zeigen, nicht nur schöne Ergebnisse.' }, { text: 'Ein realistischer Prozess ist wertvoller als pauschale Wachstumsversprechen.' }],
    sections: [
      { title: 'Passt die Leistung zum tatsächlichen Engpass?', text: 'Eine gute Partnerin verkauft nicht automatisch das größte Paket. Sie prüft zuerst, ob Positionierung, Angebot, Content-Produktion, Distribution oder Conversion der relevante Engpass ist.' },
      { title: 'Wie werden Entscheidungen begründet?', text: 'Frage, wie Themen, Formate und Budgets priorisiert werden. Seriöse Antworten verbinden Zielgruppenwissen, Erfahrung, Daten und klare Hypothesen – statt sich ausschließlich auf Trends zu berufen.' },
      { title: 'Was bleibt im Unternehmen?', text: 'Gute Zusammenarbeit erzeugt nicht nur Assets, sondern Klarheit, dokumentierte Learnings und wiederverwendbare Prozesse. Das macht das Unternehmen langfristig handlungsfähiger.' },
      { title: 'Welche Versprechen werden bewusst nicht gemacht?', text: 'Niemand kontrolliert Markt, Plattform und Kaufentscheidung vollständig. Professionelle Partner benennen Annahmen, Abhängigkeiten und Risiken offen und definieren, welche Signale tatsächlich beeinflusst werden können.' },
    ],
    faqs: [{ question: 'Woran erkenne ich ein seriöses Angebot?', answer: 'An klarer Leistung, Verantwortlichkeiten, Annahmen, Zeitplan, Feedbackprozess und Erfolgskriterien. Vorsicht ist bei garantierten Umsätzen ohne Kenntnis deiner Ausgangslage angebracht.' }],
  },
]
