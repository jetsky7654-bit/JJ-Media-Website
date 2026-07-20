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
  { id: 'postings', title: 'Willkommen in unserer Design-Welt', client: 'Brand Content', slug: 'brand-content-design', excerpt: 'Ein konsistentes visuelles System für hochwertige Social-Media-Kommunikation.', image: '/assets/insta-4.webp', metrics: [{ value: '+62 %', label: 'Interaktionen' }, { value: '3,4×', label: 'mehr Saves' }] },
  { id: 'reels', title: 'Reel Content – der Gamechanger', client: 'Video Content', slug: 'reel-content', excerpt: 'Kurzvideo-Formate, die Reichweite, Persönlichkeit und klare Botschaften verbinden.', image: '/assets/insta-5.webp', metrics: [{ value: '1,8 Mio.', label: 'Views' }, { value: '+118 %', label: 'Profilaufrufe' }] },
  { id: 'concept', title: 'Wo Vision auf Kreativität trifft', client: 'Creative Direction', slug: 'creative-direction', excerpt: 'Kampagnenkonzepte vom ersten Insight bis zur finalen visuellen Umsetzung.', image: '/assets/insta-2.webp', metrics: [{ value: '4,9 %', label: 'CTR' }, { value: '-37 %', label: 'Cost per Lead' }] },
]

export const fallbackTestimonials = [
  { name: 'Peggy Gerschler', role: 'Comic-Händlerin', quote: 'Es war ein unglaubliches Gefühl, als ich meinen ersten Verkauf im eigenen Online-Shop sah. Jessica hat mir geholfen, meine Comics sichtbar zu machen.', image: '/assets/testimonial-peggy.png' },
  { name: 'Özhan', role: 'Unternehmer', quote: 'Die Zusammenarbeit war klar, schnell und kreativ. Aus einzelnen Ideen wurde eine Social-Media-Präsenz, die endlich professionell wirkt.', image: '/assets/testimonial-oezhan.jpg' },
  { name: 'Anna', role: 'Selbstständige', quote: 'Jessica denkt nicht nur in schönen Posts, sondern versteht die Strategie dahinter. Das hat bei unseren Inhalten einen riesigen Unterschied gemacht.', image: '/assets/testimonial-anna.jpg' },
  { name: 'Raphael Hermann', role: 'Digitalberater', quote: 'Jessica verbindet Verlässlichkeit, Designgefühl und Performance-Denken. Genau diese Kombination ist im Social-Media-Bereich selten.', image: '/assets/testimonial-raphael.jpg' },
]

export const fallbackPosts = [
  { id: '1', slug: 'social-media-strategie-2026', title: 'Social-Media-Strategie 2026: Was Marken wirklich brauchen', excerpt: 'Ein praxisnaher Leitfaden für Positionierung, Content-System, Distribution und messbare Ziele.', category: 'Strategie', publishedAt: '2026-07-10T10:00:00.000Z' },
  { id: '2', slug: 'reels-die-kunden-gewinnen', title: 'Reels, die nicht nur Views, sondern Kunden gewinnen', excerpt: 'Wie Hook, Story, Proof und Call-to-Action zu einem wirksamen Kurzvideo-System werden.', category: 'Content', publishedAt: '2026-07-05T10:00:00.000Z' },
  { id: '3', slug: 'meta-ads-kreatives', title: 'Warum Meta Ads zuerst ein Creative-Problem sind', excerpt: 'Die wichtigsten Hebel für Werbeanzeigen, die im Feed stoppen und wirtschaftlich skalieren.', category: 'Social Ads', publishedAt: '2026-06-28T10:00:00.000Z' },
]
