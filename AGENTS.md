# Project guide

This is a dependency-free, bilingual Naruto character archive deployed to GitHub Pages from `master`.

## Structure

- `index.html`: page structure and initial French copy.
- `styles.css`: visual design and responsive layout.
- `script.js`: character data, portraits, battles, filters, gallery, and FR/EN localization.
- `assets/`: local images and cursor artwork.

## Keep these guarantees

- Update French and English together; switching languages must update all visible content.
- Preserve the curated 105-character list and order unless explicitly asked to change it.
- Each character needs a solo, face-centered portrait plus three different gallery images. The dossier portrait must not be reused in the gallery.
- Each dossier needs a substantial history, family/goal/clan details, strongest techniques with how they were learned, and three accurate battles.
- Battle links must open a preselected, non-game YouTube video matching the title, ideally at least 3 minutes long and available in Singapore.
- Keep the site dependency-free. After changing `script.js`, bump its query version in `index.html` to prevent stale browser caching.

## Verify

```bash
node --check script.js
git diff --check
python3 -m http.server 4173
```
