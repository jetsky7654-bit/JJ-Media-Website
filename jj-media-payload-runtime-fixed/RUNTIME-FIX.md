# Runtime-Fix für Vercel

Die erste Version konnte erfolgreich bauen, aber `/admin` mit HTTP 500 abbrechen. Es gab zwei Ursachen:

1. Ohne `DATABASE_URI` fiel die App auf eine lokale SQLite-Datei zurück. Das ist auf Vercel nicht als Produktionsdatenbank geeignet.
2. Für die PostgreSQL-Datenbank fehlte eine initiale Migration. Payload führt in Produktion kein automatisches `db push` aus.

Diese Version:

- akzeptiert `DATABASE_URL`, `DATABASE_URI` oder `POSTGRES_URL`,
- bricht den Build verständlich ab, wenn Datenbank oder `PAYLOAD_SECRET` fehlen,
- führt beim Vercel-Build zuerst `payload migrate` aus,
- enthält eine vollständige initiale PostgreSQL-Migration,
- erkennt die aktuelle Vercel-Domain automatisch für CORS/CSRF,
- bietet `/api/health` als gefahrlose Statusprüfung.

## Vercel-Einstellungen

Environment Variables für Production und Preview:

- `DATABASE_URL` – vollständige PostgreSQL-Verbindungs-URL
- `PAYLOAD_SECRET` – mindestens 32 zufällige Zeichen
- `NEXT_PUBLIC_SERVER_URL` – optional; für Produktion `https://www.jj-media-design.de`
- `REVALIDATION_SECRET` – langes zufälliges Secret
- `NEXT_PUBLIC_CONTACT_EMAIL` – gewünschte Kontaktadresse

Build Command: `npm run ci`

Install Command: `npm ci --no-audit --no-fund`

Danach ohne Build-Cache neu deployen. Zuerst `/api/health`, danach `/admin` öffnen.
