import { RichText } from '@payloadcms/richtext-lexical/react'
export function RichTextContent({ data }: { data?: any }) {
  if (!data) return null
  return <div className="article-content richtext"><RichText data={data} /></div>
}
