import Link from 'next/link'
import { getCollection } from '@/lib/cms'
import { fallbackCases } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'
export const revalidate=3600
export const metadata=buildMetadata({title:'Projekte & Case Studies',description:'Ausgewählte Social-Media-Projekte, Content-Systeme und Kampagnen von JJ-Media – mit Einblicken in Strategie, Umsetzung und Ergebnisse.',path:'/projekte'})
export default async function Work(){const data=await getCollection('case-studies',{sort:'-publishedAt',where:{_status:{equals:'published'}}});const cases=data.length?data.map((c:any,i:number)=>({...c,image:mediaURL(c.heroImage,fallbackCases[i%3].image)})):fallbackCases;return <><header className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow reveal">Projekte</div><h1 className="display reveal"><span>Arbeit, die</span><span className="offset"><em>etwas bewegt</em></span></h1><div className="hero-bottom reveal"><p>Von der Markenstrategie bis zur laufenden Content- und Anzeigenproduktion: ausgewählte Einblicke in echte Projekte.</p></div></div></div></header><section className="section"><div className="container"><div className="work-grid">{cases.map((item:any)=><Link className="work-card reveal" href={`/case-studies/${item.slug}`} key={item.id||item.slug}><img src={item.image} alt={item.title}/><div className="work-copy"><span className="eyebrow">{item.client}</span><h3>{item.title}</h3><span className="arrow">↗</span></div></Link>)}</div></div></section></>}
