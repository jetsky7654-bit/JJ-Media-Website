import Link from 'next/link'
import { getCollection } from '@/lib/cms'
import { fallbackPosts } from '@/lib/fallback'
import { buildMetadata } from '@/lib/seo'

export const revalidate = 3600
export const metadata = buildMetadata({
  title: 'Social Media Insights & Fachartikel',
  description: 'Praxisnahe Fachartikel zu Social-Media-Strategie, Reels, UGC, Meta Ads, Reise-Marketing und digitaler Markenführung.',
  path: '/blog',
})

export default async function BlogPage() {
  const data = await getCollection('posts', { sort: '-publishedAt', where: { _status: { equals: 'published' } } })
  const posts = data.length ? data : fallbackPosts
  return <>
    <header className="inner-hero insights-hero"><div className="container inner-hero-grid"><div><span className="availability reveal"><i></i>Insights & Learnings</span><h1 className="premium-display reveal">Wissen, das nicht nur klingt.<br/><em>Sondern Entscheidungen verbessert.</em></h1></div><div className="inner-hero-aside reveal"><p>Praxisnahe Gedanken zu Strategie, Content, UGC, Paid Social und Reise-Marketing – klar, anwendbar und ohne leere Trendbegriffe.</p></div></div></header>
    <section className="section insights-index"><div className="container"><div className="post-grid">{posts.map((post:any)=><Link className="post-card reveal" href={`/blog/${post.slug}`} key={post.id||post.slug}><div><div className="post-meta"><span>{post.category||'Social Media'}</span><span>{post.publishedAt?new Date(post.publishedAt).toLocaleDateString('de-DE'):''}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p></div><span>Artikel lesen ↗</span></Link>)}</div></div></section>
  </>
}
