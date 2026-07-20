import Link from 'next/link'
import { ROICalculator } from '@/components/site/ROICalculator'
import { TestimonialSlider } from '@/components/site/TestimonialSlider'
import { getCollection } from '@/lib/cms'
import { fallbackCases, fallbackPosts, fallbackServices, fallbackTestimonials } from '@/lib/fallback'
import { mediaURL } from '@/lib/media'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({ title: 'Social Media Strategie, Content & Ads', description: 'JJ-Media verbindet Strategie, Content Creation und Social Ads zu einer Social-Media-Präsenz, die Aufmerksamkeit in Wachstum verwandelt.', path: '/' })

export default async function Home(){
 const [servicesData,casesData,testimonialsData,postsData]=await Promise.all([
  getCollection('services',{sort:'order',where:{_status:{equals:'published'}}}),
  getCollection('case-studies',{limit:3,where:{_status:{equals:'published'}}}),
  getCollection('testimonials',{sort:'order',limit:8}),
  getCollection('posts',{sort:'-publishedAt',limit:3,where:{_status:{equals:'published'}}}),
 ])
 const services=servicesData.length?servicesData:fallbackServices
 const cases=casesData.length?casesData.map((c:any,i:number)=>({...c,image:mediaURL(c.heroImage,fallbackCases[i%fallbackCases.length].image)})):fallbackCases
 const testimonials=testimonialsData.length?testimonialsData.map((t:any,i:number)=>({...t,image:mediaURL(t.image,fallbackTestimonials[i%fallbackTestimonials.length].image)})):fallbackTestimonials
 const posts=postsData.length?postsData:fallbackPosts
 return <>
 <header className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow reveal">Social Media · Strategie · Content · Ads</div><h1 className="display reveal"><span>Deine <em>Marke</em></span><span className="offset">stark im</span><span>digitalen Raum</span></h1><div className="hero-bottom reveal"><p>Social Media mit Strategie, Kreativität und Inhalten, die nicht nur gut aussehen, sondern echte Ergebnisse erzeugen.</p><Link className="btn btn-coral" href="/kontakt">Kostenloses Erstgespräch <span>↗</span></Link></div></div><div className="scroll-note">Scrolle, um mehr zu erfahren ↓</div></div></header>
 <section className="video-card"><div className="container"><a className="video-frame" href="https://youtube.com/watch?v=jRIm4tJmTuw" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/jRIm4tJmTuw/maxresdefault.jpg" alt="JJ-Media Showreel"/><span className="play">PLAY</span></a><div className="logo-strip"><div className="logo-cell">STRATEGY</div><div className="logo-cell">CONTENT</div><div className="logo-cell">SOCIAL ADS</div><div className="logo-cell">ANALYTICS</div></div></div></section>
 <section className="section"><div className="container"><div className="eyebrow reveal">Portfolio</div><h2 className="section-title reveal">Einblicke in <span className="serif">meine Arbeit</span></h2><div className="work-grid">{cases.slice(0,3).map((item:any)=><Link className="work-card reveal" key={item.id||item.slug} href={`/case-studies/${item.slug}`}><img src={item.image} alt={item.title}/><div className="work-copy"><span className="eyebrow">{item.client}</span><h3>{item.title}</h3><span className="arrow">↗</span></div></Link>)}</div></div></section>
 <section className="services section"><div className="container"><div className="eyebrow reveal">Leistungen</div><h2 className="section-title reveal">Ein System für <span className="serif">sichtbares Wachstum</span></h2><div className="process-grid">{services.slice(0,3).map((service:any,index:number)=><Link href={`/leistungen/${service.slug}`} className="process-card reveal" key={service.id||service.slug}><div className="process-num">0{index+1}</div><div><h3>{service.title}</h3><p>{service.shortDescription}</p></div></Link>)}</div></div></section>
 <section className="statement"><span className="blob one"></span><span className="blob two"></span><span className="blob three"></span><h2 className="reveal">Bei JJ-Media entstehen Social-Media-Marken, die Menschen erreichen, Vertrauen aufbauen und <span className="serif">messbar wachsen</span>.</h2></section>
 <section className="testimonials section"><div className="container"><div className="eyebrow reveal">Kundenstimmen</div><TestimonialSlider items={testimonials}/></div></section>
 <section className="roi section"><div className="container"><div className="eyebrow reveal">ROI Rechner</div><h2 className="section-title reveal">Was kann Social Media<br/><span className="serif">für dein Business bewegen?</span></h2><p className="lead reveal">Vier einfache Angaben. Sofort ein realistisches Modellpotenzial sehen.</p><ROICalculator/></div></section>
 <section className="section"><div className="container"><div className="eyebrow reveal">Insights</div><h2 className="section-title reveal">Wissen, das <span className="serif">weiterbringt</span></h2><div className="post-grid">{posts.slice(0,3).map((post:any)=><Link className="post-card reveal" href={`/blog/${post.slug}`} key={post.id||post.slug}><div><div className="post-meta"><span>{post.category||'Social Media'}</span><span>{post.publishedAt?new Date(post.publishedAt).toLocaleDateString('de-DE'):''}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p></div><span>Artikel lesen ↗</span></Link>)}</div></div></section>
 <section className="section"><div className="container"><div className="eyebrow reveal">Unser Prozess</div><h2 className="section-title reveal">Ein klarer Weg.<br/><span className="serif">Von der Idee zur Wirkung.</span></h2><div className="process-grid"><div className="process-card reveal"><div className="process-num">01</div><div><h3>Wir sprechen</h3><p>Wir verstehen Marke, Ziele, Angebot und Zielgruppe – bevor wir Content produzieren.</p></div></div><div className="process-card reveal"><div className="process-num">02</div><div><h3>Wir fokussieren</h3><p>Aus Research und Daten entsteht eine klare Positionierung mit konkreten Content-Pfeilern.</p></div></div><div className="process-card reveal"><div className="process-num">03</div><div><h3>Wir skalieren</h3><p>Wir produzieren, veröffentlichen, messen und verbessern – konsequent und nachvollziehbar.</p></div></div></div></div></section>
 <section className="cta"><div className="container"><h2>Gemeinsam gestalten.<br/>Gemeinsam wachsen.<br/><span className="serif">Mit Wirkung.</span></h2><Link className="btn" href="/kontakt">Jetzt beraten lassen <span>↗</span></Link></div></section>
 <div className="social-grid">{[5,1,4,2,6,3].map(n=><img key={n} src={`/assets/insta-${n}.webp`} alt={`Social-Media-Arbeit ${n}`}/>)}</div>
 </>
}
