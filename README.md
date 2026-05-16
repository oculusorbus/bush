# The Bush Group — Website

Hand-written static HTML/CSS/JS. **No build step. No framework. Edit a file, save, refresh.**

## Editing

Every page is a plain `index.html` you can open in any text editor.

- `/index.html` — homepage
- `/about/index.html`, `/about/steve-bush/index.html`, `/about/jessalynn-bush/index.html`
- `/core-eight/index.html` and 8 sub-pages
- `/advisory/`, `/consulting/`, `/facilitation/`, `/contact/`
- `/404.html`, `/sitemap.xml`, `/robots.txt`

Shared elements live in **one place**:

- `assets/partials/header.html` — site navigation
- `assets/partials/footer.html` — site footer
- `assets/css/site.css` — all styles
- `assets/js/site.js` — small enhancements (reveal-on-scroll, mobile menu, wheel hover, contact form)

The header and footer are injected client-side via `<div data-include="header"></div>` placeholders — so a nav-link change in the partial updates all 17 pages at once.

## Local preview

Any static server works:

```bash
python3 -m http.server 8000     # then open http://localhost:8000
# or
npx serve .
```

You can also just double-click `index.html`, but the `data-include` partials need a server (they use `fetch()`). Without one, the header and footer simply won't render — the rest of the page still does.

## Deploying to cPanel

Just upload the files to your subdomain's `public_html` (or whatever the document root is). No build, no Node, no compilation — the webserver serves the files directly. Use cPanel's File Manager, git pull, FTP, whatever's easiest.

## Brand

- **Logo** — SVG inline in `assets/partials/header.html` (also `footer.html`). Replace with a real logo whenever one's available.
- **Headshots & images** — `assets/headshots/`, `assets/images/`
- **Colors** — `--ink: #0E1B2E`, `--gold: #C9A86A` (see top of `site.css`)
- **Fonts** — Inter (body) + Fraunces (display), loaded from Google Fonts via `<link>`

## Original Wix export

Preserved at `/Wix/` for reference. Not deployed.
