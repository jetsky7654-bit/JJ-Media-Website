import type { Metadata } from 'next'
import { connection } from 'next/server'
import config from '@payload-config'
import { RootPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const metadata: Metadata = { title: 'JJ-Media CMS' }

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<Record<string, string | string[]>>
}

export default async function Page({ params, searchParams }: Args) {
  await connection()
  return RootPage({ config, params, searchParams, importMap })
}
