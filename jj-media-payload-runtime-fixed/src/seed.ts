import 'dotenv/config'
import config from '@payload-config'
import { getPayload } from 'payload'

const richText = (text:string) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: null,
    children: [{ type: 'paragraph', format: '', indent: 0, version: 1, direction: null, textFormat: 0, textStyle: '', children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text, version: 1 }] }],
  },
})

async function seed(){
  if (!(process.env.DATABASE_URI || process.env.DATABASE_URL || process.env.POSTGRES_URL)) throw new Error('DATABASE_URL, DATABASE_URI oder POSTGRES_URL fehlt.')
  const payload=await getPayload({config})
  const existing=await payload.find({collection:'services',limit:1})
  if(existing.totalDocs>0){console.log('Seed übersprungen: Inhalte existieren bereits.');process.exit(0)}

  const services=[
    ['Strategie & Analytics','strategie-analytics','Eine klare Positionierung, fundierte Zielgruppenanalyse und ein System, das anhand echter Performance-Daten laufend besser wird.'],
    ['Content Creation','content-creation','Reels, Social Posts und Kampagnen-Assets, die Aufmerksamkeit in Vertrauen und Handlungen verwandeln.'],
    ['Social Ads','social-ads','Performance-Kampagnen für qualifizierte Anfragen, Verkäufe und messbares Wachstum.'],
  ]
  for(const [title,slug,shortDescription] of services){await payload.create({collection:'services',draft:false,data:{title,slug,shortDescription,description:richText(shortDescription),_status:'published'}} as any)}

  const testimonials=[
    ['Peggy Gerschler','Comic-Händlerin','Es war ein unglaubliches Gefühl, als ich meinen ersten Verkauf im eigenen Online-Shop sah. Jessica hat mir geholfen, meine Comics sichtbar zu machen.'],
    ['Özhan','Unternehmer','Die Zusammenarbeit war klar, schnell und kreativ. Aus einzelnen Ideen wurde eine Social-Media-Präsenz, die endlich professionell wirkt.'],
    ['Anna','Selbstständige','Jessica denkt nicht nur in schönen Posts, sondern versteht die Strategie dahinter.'],
    ['Raphael Hermann','Digitalberater','Jessica verbindet Verlässlichkeit, Designgefühl und Performance-Denken.'],
  ]
  for(const [name,role,quote] of testimonials){await payload.create({collection:'testimonials',data:{name,role,quote}} as any)}

  const posts=[
    ['Social-Media-Strategie 2026: Was Marken wirklich brauchen','social-media-strategie-2026','Strategie','Ein praxisnaher Leitfaden für Positionierung, Content-System, Distribution und messbare Ziele.'],
    ['Reels, die nicht nur Views, sondern Kunden gewinnen','reels-die-kunden-gewinnen','Content','Wie Hook, Story, Proof und Call-to-Action zu einem wirksamen Kurzvideo-System werden.'],
    ['Warum Meta Ads zuerst ein Creative-Problem sind','meta-ads-kreatives','Social Ads','Die wichtigsten Hebel für Werbeanzeigen, die im Feed stoppen und wirtschaftlich skalieren.'],
  ]
  for(const [title,slug,category,excerpt] of posts){await payload.create({collection:'posts',draft:false,data:{title,slug,category,excerpt,content:richText(excerpt),publishedAt:new Date().toISOString(),_status:'published'}} as any)}

  await payload.updateGlobal({slug:'site-settings',data:{brandName:'JJ—MEDIA',legalName:'JJ-Media',email:'service@jj-media.info',siteDescription:'Social Media Strategie, Content Creation und Social Ads für Marken mit Ambition.'}})
  await payload.updateGlobal({slug:'navigation',data:{items:[{label:'Start',href:'/'},{label:'Über mich',href:'/ueber-mich'},{label:'Projekte',href:'/projekte'},{label:'Leistungen',href:'/leistungen'},{label:'Insights',href:'/blog'},{label:'Kontakt',href:'/kontakt'}],ctaLabel:'Ich will mit dir arbeiten',ctaHref:'/kontakt'}})
  console.log('JJ-Media Seed erfolgreich angelegt.')
  process.exit(0)
}
seed().catch(error=>{console.error(error);process.exit(1)})
