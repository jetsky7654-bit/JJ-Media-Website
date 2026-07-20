# JJ-Media Premium Conversion Update

## Neu integriert

- Neue Angebotsarchitektur: Analyse & Audit, Strategie & Positionierung, Content/Reels/UGC, Social Ads und Reise-/Tourismusmarketing
- Neue Premium-Startseite mit klarer Nutzenbotschaft, Trust Ribbon, Problemsektion, Leistungslogik, UGC-Showcase, Showreel, Cases, Prozess, Kundenstimmen, Angebotsmodellen, FAQ und Abschluss-CTA
- Eigene Landingpage `/reise-tourismus`
- Eigene Seite `/kundenstimmen`
- Neu gestaltete Seiten für Leistungen, Leistungsdetails, Projekte, Case Studies, Über Jessica, Blog und Kontakt
- Conversionstärkeres Kontaktformular mit Projektart, Branche, Website, Startzeitraum und Budget
- Mobiler Sticky-CTA
- 301-Weiterleitungen von alten Leistungs-URLs
- Sitemap um neue Seiten erweitert
- Payload bleibt vollständig aktiv; bestehende Collections, Leads, Admin und PostgreSQL-Migrationen wurden nicht gebrochen

## Payload-Inhalte synchronisieren

Die Website zeigt alle neuen Leistungen sofort über sichere Fallback-Inhalte. Damit die fünf Leistungsbereiche auch als Datensätze im Payload-Admin vorhanden sind, einmal nach dem Deployment ausführen:

```bash
npm run seed
```

Der Seed ist idempotent: fehlende Leistungen werden ergänzt, vorhandene Testimonials und Posts werden nicht doppelt angelegt. Die Navigation und Website-Grunddaten werden auf die neue Struktur aktualisiert.

## Vercel

Da das Projekt im GitHub-Repository im Unterordner liegt, muss die Root Directory weiterhin gesetzt sein auf:

```text
jj-media-payload-runtime-fixed
```

Install Command:

```text
npm ci --no-audit --no-fund
```

Build Command:

```text
npm run ci
```

Benötigte Variablen:

```env
DATABASE_URL=postgresql://...
PAYLOAD_SECRET=MINDESTENS_32_ZUFÄLLIGE_ZEICHEN
NEXT_PUBLIC_SERVER_URL=https://www.jj-media-design.de
REVALIDATION_SECRET=WEITERES_LANGES_ZUFÄLLIGES_SECRET
NEXT_PUBLIC_CONTACT_EMAIL=service@jj-media.info
```
