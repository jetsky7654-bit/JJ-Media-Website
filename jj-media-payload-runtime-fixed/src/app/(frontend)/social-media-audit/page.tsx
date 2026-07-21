import { SocialMediaAudit } from '@/components/site/SocialMediaAudit'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({ title: 'Kostenloser Social Media Audit – Social Growth Score', description: 'Bewerte Positionierung, Content, Proof, Distribution und Conversion in wenigen Minuten und erhalte eine klare erste Priorität.', path: '/social-media-audit' })

export default function AuditPage() { return <><header className="inner-hero audit-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i/>Kostenlos · 5 Dimensionen · 3 Minuten</span><h1 className="premium-display reveal">Wie stark ist dein<br/><em>Social-Media-System?</em></h1></div><div className="inner-hero-aside reveal"><p>Keine Vanity-Metrics und kein automatisches Verkaufsversprechen. Der Score hilft dir, Positionierung, Content, Proof, Distribution und Conversion strukturiert einzuordnen.</p></div></div></header><section className="section audit-section"><div className="container"><SocialMediaAudit/></div></section></> }
