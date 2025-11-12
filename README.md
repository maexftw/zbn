# ZBN Civil Engineers Website

Modernisierte statische Website mit allen Seiten des ZBN Sachverständigenbüros. Die Seiten sind direkt aus dem Design übernommen und können ohne Build-Schritt auf jedem statischen Hoster (z. B. Cloudflare Pages) veröffentlicht werden.

## Struktur

- `index.html` – Einstiegspunkt der Seite (Kopie von `index_1.html`)
- `*_1.html` – einzelne Inhaltsseiten (Planung, Begutachtung, Kontakt, …)
- `Logo-ZBN-1.png` – aktuelles Unternehmenslogo
- `images/` und `docs/` – ggf. zusätzliche Ressourcen aus dem vorherigen Template

Alle Styles und Skripte werden über CDN eingebunden (Tailwind CDN, Font Awesome), daher ist kein Node/Build-Setup nötig.

## Lokale Vorschau

1. Repository klonen
   ```bash
   git clone https://github.com/maexftw/zbn.git
   cd zbn
   ```
2. `index.html` im Browser öffnen (Doppelklick oder `npx http-server` / VS Code Live Server).

## Deployment auf Cloudflare Pages

1. In Cloudflare Pages auf **„Create project“** klicken und das GitHub-Repository `maexftw/zbn` verknüpfen.
2. Build-Einstellungen:
   - **Framework preset:** `None`
   - **Build command:** leer lassen
   - **Build output directory:** `/` (Root)
3. Deploy auslösen. Cloudflare Pages liefert automatisch `index.html` aus; alle Unterseiten (`*_1.html`) sind über ihre Dateinamen erreichbar.

> Hinweis: Wenn sauberere URLs gewünscht sind (`/planung` statt `/gutachten_1.html`), können später per Redirects oder Dateiumbenennung zusätzliche Anpassungen vorgenommen werden.

## Pflege & weitere Schritte

- Textinhalte stammen 1:1 von der Live-Website – Änderungen sollten mit der bestehenden Redaktion abgestimmt werden.
- UI/UX-Anpassungen (Logo-Größe, Navigation etc.) sind bereits optimiert; weitere Änderungen sind möglich, solange Texte unverändert bleiben.
- Zusätzliche Assets (Icons, Bilder) bitte im Repository mit versionieren und in den HTML-Dateien verlinken.

Viel Erfolg beim Launch!
