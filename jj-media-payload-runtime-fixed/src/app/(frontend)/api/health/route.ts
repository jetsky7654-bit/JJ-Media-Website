import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const databaseConfigured = Boolean(
    process.env.DATABASE_URI ||
      process.env.DATABASE_URL ||
      process.env.POSTGRES_URL,
  )

  return NextResponse.json(
    {
      status: databaseConfigured && process.env.PAYLOAD_SECRET ? 'ready' : 'setup-required',
      databaseConfigured,
      payloadSecretConfigured: Boolean(process.env.PAYLOAD_SECRET),
      serverURLConfigured: Boolean(
        process.env.NEXT_PUBLIC_SERVER_URL ||
          process.env.VERCEL_URL ||
          process.env.VERCEL_PROJECT_PRODUCTION_URL,
      ),
    },
    { status: databaseConfigured && process.env.PAYLOAD_SECRET ? 200 : 503 },
  )
}
