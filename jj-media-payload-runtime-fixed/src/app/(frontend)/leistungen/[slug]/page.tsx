import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/site/JsonLd'
import { RichTextContent } from '@/components/site/RichTextContent'
import { getBySlug } from '@/lib/cms'
import { fallbackServices } from '@/lib/fallback'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const dynamicParams = true

async function getService(slug:string){return await getBySlug('services',slug) || fallbackServices.find(s=>s.slug===slug) || null}
export async function generateStaticParams(){return fallbackServices.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=await getService(slug);if(!service)return {};return buildMetadata({title:service.metaTitle||service.title,description:service.metaDescription||service.shortDescription,path:`/leistungen/${slug}`})}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const service:any=await getService(slug);if(!service)notFound();const schema={'@context':'https://schema.org','@type':'Service',name:service.title,description:service.shortDescription,provider:{'@type':'ProfessionalService',name:'JJ-Media'},areaServed:'DACH',url:`${process.env.NEXT_PUBLIC_SERVER_URL||'https://www.jj-media-design.de'}/leistungen/${slug}`};return <><JsonLd data={schema}/><header className="hero"><div className="container hero-grid"><div className="hero-copy"><div className="eyebrow reveal">{service.eyebrow||'Leistung'}</div><h1 className="display reveal"><span>{service.title}</span><span className="offset"><em>mit System</em></span></h1><div className="hero-bottom reveal"><p>{service.shortDescription}</p><Link className="btn btn-coral" href={service.ctaHref||'/kontakt'}>{service.ctaLabel||'Kostenlos beraten lassen'} ↗</Link></div></div></div></header><section className="section"><div className="container"><div className="article-shell" style={{paddingTop:0,paddingBottom:0}}>{service.description?<RichTextContent data={service.description}/>:<div className="article-content"><h2>Was du bekommst</h2><p>Eine klare Strategie, hochwertige Umsetzung und ein laufendes Optimierungssystem, das sich an echten Unternehmenszielen orientiert.</p><h2>Für wen diese Leistung gedacht ist</h2><p>Für Unternehmen und Personal Brands, die Social Media professionell nutzen wollen, ohne täglich selbst planen, produzieren und analysieren zu müssen.</p></div>}{service.benefits?.length?<div className="faq-list">{service.benefits.map((b:any,i:number)=><div className="faq-item" key={i}><h3>✓ {b.text}</h3></div>)}</div>:null}</div></div></section><section className="cta"><div className="container"><h2>Aus Sichtbarkeit wird<br/><span className="serif">echte Wirkung.</span></h2><Link className="btn" href="/kontakt">Projekt besprechen ↗</Link></div></section></>}
