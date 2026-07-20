# Deployment-Checkliste für JJ-Media

## 1. GitHub

1. Diesen Projektordner in ein neues GitHub-Repository hochladen.
2. `.env.local`, `.payload-build.db`, `.next` und `node_modules` niemals committen.

## 2. PostgreSQL

Eine PostgreSQL-Datenbank über Neon, Supabase oder den Vercel Marketplace erstellen und den Connection String als `DATABASE_URL` hinterlegen.

## 3. Vercel-Variablen

```env
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=MINDESTENS_32_ZUFÄLLIGE_ZEICHEN
NEXT_PUBLIC_SERVER_URL=https://www.jj-media-design.de
REVALIDATION_SECRET=WEITERES_LANGES_ZUFÄLLIGES_SECRET
NEXT_PUBLIC_CONTACT_EMAIL=kontakt@jj-media-design.de
```

## 4. Deployment

- Framework Preset: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`
- Node.js: 20 oder neuer

## 5. Ersteinrichtung

1. `https://deine-domain.de/admin` öffnen.
2. Ersten Admin-Benutzer anlegen.
3. Lokal oder in einer sicheren Umgebung `npm run seed` ausführen, falls Startinhalte benötigt werden.
4. Inhalte, Kontaktangaben und Rechtstexte im CMS prüfen.

## 6. Upload-Speicher

Vor produktiven Uploads Vercel Blob oder S3 als Payload-Storage-Adapter ergänzen. Das Vercel-Dateisystem ist nicht dauerhaft beschreibbar.

## 7. Domainwechsel

- Domain in Vercel verbinden.
- `NEXT_PUBLIC_SERVER_URL` auf die finale HTTPS-Domain setzen.
- Alte URLs mit 301-Weiterleitungen abbilden.
- Sitemap in Google Search Console und Bing Webmaster Tools einreichen.

## 8. Qualitätsprüfung

- `/robots.txt` und `/sitemap.xml` testen.
- Canonical-Tags und JSON-LD kontrollieren.
- Kontaktformular absenden und Lead im Payload-Admin prüfen.
- Mobile Darstellung, Tastaturbedienung und Formulare testen.
- PageSpeed Insights nach Einbindung externer Skripte erneut prüfen.
