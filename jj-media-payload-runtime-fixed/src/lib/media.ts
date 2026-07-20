export function mediaURL(media: any, fallback = '') {
  if (!media) return fallback
  if (typeof media === 'string') return media
  return media.url || media.sizes?.card?.url || fallback
}
