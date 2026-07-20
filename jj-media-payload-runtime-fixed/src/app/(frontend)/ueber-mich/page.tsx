import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Über Jessica Just – Social Media Strategin & Creatorin',
  description: 'Jessica Just verbindet Social-Media-Strategie, Content Creation, UGC, Video Editing und Performance Marketing mit direkter, persönlicher Zusammenarbeit.',
  path: '/ueber-mich',
})

export default function AboutPage() {
  return <>
    <header className="inner-hero about-premium-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i></i>Jessica Just · JJ-Media</span><h1 className="premium-display reveal">Strategisches Denken.<br/><em>Kreative Umsetzung.</em><br/>Persönliche Zusammenarbeit.</h1></div><div className="inner-hero-aside reveal"><p>Ich helfe Marken dabei, aus einzelnen Social-Media-Aktivitäten ein klares System zu machen – mit Content, der menschlich wirkt und trotzdem geschäftlich denkt.</p><Link className="btn btn-coral" href="/kontakt">Persönlich kennenlernen <span>↗</span></Link></div></div></header>

    <section className="section about-story-section"><div className="container about-story-grid">
      <div className="about-signature reveal"><div className="about-monogram">JJ</div><div className="about-stamp"><span>Strategy</span><span>Content</span><span>UGC</span><span>Ads</span></div></div>
      <div className="about-story reveal"><span className="eyebrow">Warum JJ-Media</span><h2>Guter Content beginnt nicht mit der Kamera.<br/><span className="serif">Sondern mit echtem Verständnis.</span></h2><p>Bevor ein Reel, eine Kampagne oder ein Redaktionsplan entsteht, möchte ich verstehen, warum Menschen dein Angebot brauchen, was sie noch zurückhält und welche Botschaft wirklich hängen bleiben soll.</p><p>Genau deshalb verbinde ich Strategie, Konzeption, Produktion und Performance. Nicht, weil jede Marke alles gleichzeitig braucht – sondern weil gute Entscheidungen nur entstehen, wenn das große Ganze sichtbar ist.</p><blockquote>„Ich möchte nicht einfach mehr Content produzieren. Ich möchte, dass deine Marke klarer, glaubwürdiger und relevanter wird.“</blockquote></div>
    </div></section>

    <section className="method-section section"><div className="container"><div className="method-intro"><span className="eyebrow reveal">So arbeite ich</span><h2 className="section-title reveal">Klar im Prozess.<br/><span className="serif">Nah in der Zusammenarbeit.</span></h2></div><div className="method-grid method-grid-four">{[
      ['01','Strategisch','Jede kreative Entscheidung hat ein Ziel und eine nachvollziehbare Begründung.'],
      ['02','Direkt','Du arbeitest mit mir persönlich und weißt jederzeit, wo das Projekt steht.'],
      ['03','Pragmatisch','Konzepte müssen im echten Arbeitsalltag funktionieren – nicht nur in Präsentationen.'],
      ['04','Lernorientiert','Feedback und Daten werden nicht gesammelt, sondern in bessere nächste Schritte übersetzt.'],
    ].map(([num,title,text])=><article className="method-card reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section expertise-section"><div className="container two-column-premium"><div className="sticky-copy"><span className="eyebrow reveal">Kompetenzen</span><h2 className="section-title reveal">Eine Ansprechpartnerin.<br/><span className="serif">Mehrere Perspektiven.</span></h2></div><div className="expertise-list">{['Social-Media-Strategie & Positionierung','Reels, UGC & Creator Content','Video Editing & Creative Direction','Meta Ads & Creative Testing','Content-Systeme & Redaktionsplanung','Reise- & Tourismusmarketing'].map((item,index)=><div className="expertise-row reveal" key={item}><span>0{index+1}</span><h3>{item}</h3></div>)}</div></div></section>

    <section className="premium-cta"><div className="container premium-cta-inner"><div><span className="eyebrow">Lass uns kennenlernen</span><h2>Deine Marke verdient mehr als<br/><span className="serif">austauschbaren Content.</span></h2></div><div><p>Erzähl mir, wo du gerade stehst. Ich sage dir ehrlich, ob und wie ich helfen kann.</p><Link className="btn btn-light-large" href="/kontakt">Potenzialanalyse starten <span>↗</span></Link></div></div></section>
  </>
}
