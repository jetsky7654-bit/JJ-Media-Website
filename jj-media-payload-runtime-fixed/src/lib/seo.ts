import type { Metadata } from 'next'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.jj-media-design.de'

export function buildMetadata({
  title,
  description,
  path = '',
  image = '/assets/insta-5.webp',
  noIndex = false,
  canonical,
}: {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
  canonical?: string
}): Metadata {
  const url = canonical || `${baseURL.replace(/\/$/, '')}${path}`
  const imageURL = image.startsWith('http') ? image : `${baseURL.replace(/\/$/, '')}${image}`
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title, description, url, siteName: 'JJ-Media', locale: 'de_DE', type: 'website', images: [{ url: imageURL, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [imageURL] },
  }
}

export function organizationJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'JJ-Media',
    url: baseURL,
    email: 'service@jj-media.info',
    description: 'Social Media Strategie, Content Creation und Social Ads für Marken mit Ambition.',
    founder: { '@type': 'Person', name: 'Jessica Just', jobTitle: 'Social Media Strategin & Content Creatorin' },
    sameAs: [],
  }
}

export function articleJSONLD(post: any) {
  const url = `${baseURL.replace(/\/$/, '')}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.reviewedAt || post.publishedAt,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: post.author?.name || 'Jessica Just' },
    publisher: { '@type': 'Organization', name: 'JJ-Media', url: baseURL },
  }
}

export function faqJSONLD(faqs: any[] = []) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }
}
