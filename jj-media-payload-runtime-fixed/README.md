# JJ-Media – Next.js + Payload CMS

Produktionsnahes Website-Projekt mit Next.js App Router, Payload CMS, PostgreSQL und Vercel.

## Enthalten

- High-End JJ-Media Frontend
- Payload Admin unter `/admin`
- CMS-Collections: Seiten, Fachartikel, Leistungen, Case Studies, Kundenstimmen, Medien, Leads, Benutzer
- Entwürfe, Versionen und zeitgesteuerte Veröffentlichung
- dynamische Metadaten, Canonicals, Open Graph und Twitter Cards
- Organization-, Service-, Article-, FAQ- und CreativeWork-JSON-LD
- `sitemap.xml` und `robots.txt`
- OAI-SearchBot-, ChatGPT-User- und Google-Extended-Regeln
- Kontaktformular speichert Anfragen direkt in Payload
- ISR mit 60-Minuten-Revalidierung und geschütztem Revalidation-Endpunkt
- Fallback-Inhalte, sodass das Frontend auch vor der ersten Datenbankeinrichtung sichtbar ist

## Lokaler Start

1. `.env.example` nach `.env.local` kopieren.
2. PostgreSQL-Verbindungsstring und sichere Secrets eintragen.
3. `npm install`
4. `npm run generate:importmap`
5. `npm run dev`
6. `/admin` öffnen und ersten Benutzer anlegen.
7. Optional: `npm run seed`

## Vercel

In Vercel folgende Variablen setzen:

- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SERVER_URL=https://deine-domain.de`
- `REVALIDATION_SECRET`
- `NEXT_PUBLIC_CONTACT_EMAIL`

PostgreSQL kann z. B. über Neon, Supabase oder Vercel Marketplace bereitgestellt werden.

## Medien auf Vercel

Das Projekt nutzt lokal `public/media`. Für Produktion sollte die Payload-Media-Collection mit Vercel Blob oder S3 verbunden werden, da das Vercel-Dateisystem nicht dauerhaft beschreibbar ist. Die Collection ist bereits getrennt aufgebaut, sodass der Storage-Adapter ohne Frontend-Umbau ergänzt werden kann.

## Revalidierung

`POST /api/revalidate` mit Header:

```text
x-revalidation-secret: DEIN_REVALIDATION_SECRET
```

Body:

```json
{ "path": "/blog/mein-artikel" }
```

## Vor Livegang zwingend prüfen

- Impressum und Datenschutz mit vollständigen Angaben
- Social-Media-URLs
- Consent Management bei Tracking, YouTube, Calendly etc.
- E-Mail-Benachrichtigungen für neue Leads
- Produktions-Storage für Uploads
- Search Console, Bing Webmaster Tools und Analytics
