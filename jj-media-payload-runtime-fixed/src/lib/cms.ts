import config from '@payload-config'
import { getPayload } from 'payload'

function hasDatabaseConnection() {
  return Boolean(
    process.env.DATABASE_URI ||
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL,
  )
}

export async function getCMS() {
  if (!hasDatabaseConnection()) return null
  try {
    return await getPayload({ config })
  } catch (error) {
    console.error('Payload CMS is unavailable. Falling back to bundled content.', error)
    return null
  }
}

export async function getCollection(slug: string, options: Record<string, unknown> = {}) {
  const cms = await getCMS()
  if (!cms) return []
  try {
    const result = await cms.find({ collection: slug as never, limit: 100, depth: 2, ...options } as never)
    return result.docs as any[]
  } catch (error) {
    console.error(`Could not load ${slug}`, error)
    return []
  }
}

export async function getBySlug(collection: string, slug: string) {
  const cms = await getCMS()
  if (!cms) return null
  try {
    const result = await cms.find({
      collection: collection as never,
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 3,
    } as never)
    return (result.docs?.[0] as any) || null
  } catch (error) {
    console.error(`Could not load ${collection}/${slug}`, error)
    return null
  }
}

export async function getGlobal(slug: string) {
  const cms = await getCMS()
  if (!cms) return null
  try {
    return await cms.findGlobal({ slug: slug as never, depth: 2 } as never) as any
  } catch (error) {
    console.error(`Could not load global ${slug}`, error)
    return null
  }
}
