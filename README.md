# mseitz.dev — Eleventy portfolio

Mitchell Seitz's active developer portfolio, built with **Eleventy 3** and
**Nunjucks**. The site builds to static HTML and is deployed through GitHub Pages
at **[mseitz.dev](https://mseitz.dev)**.

![Eleventy portfolio homepage](src/webDevelopment/eleventyScreenshot.png)

## Development

Use **Node.js 22**, matching the deployment workflow:

```sh
npm ci
npm start
```

Open <http://localhost:8080>. Eleventy watches the source files and reloads the
preview when they change.

For a clean production build:

```sh
npm run clean
npm run build
```

The generated site is in `_site/`. Edit source files under `src/`; build output
and dependencies are ignored by Git.

## Structure

| Path | Purpose |
| --- | --- |
| `src/_includes/` | Base layout and shared navigation/contact partials |
| `src/_data/site.js` | Site title, author, professional contact links, and year |
| `src/assets/` | CSS, shared graphics, and JavaScript |
| `src/about/` | Short professional introduction and portrait |
| `src/webDevelopment/` | Web development project write-ups |
| `src/androidApps/` | Android project write-ups |
| `src/research/` | Research section placeholders |
| `src/CNAME` | Custom domain configuration |
| `.eleventy.js` | Templates, output paths, and asset-copy configuration |
| `.github/workflows/deploy.yml` | Build and GitHub Pages deployment on `main` |

Images under `src/` are copied into the published site even if no page links to
them. Remove retired assets from the source and make a clean build when removing
content.

## Original PHP implementation

The original UI was designed and implemented in PHP, HTML, CSS, and JavaScript.
Its sanitized source and local run instructions are available in the separate
**[legacy PHP repository](https://github.com/mseitzdev/MS_Portfolio)**.

This Eleventy version carries forward that visual design. The migration to
Nunjucks, shared site data, and static builds was AI-assisted using Claude Code.
The subsequent privacy and documentation cleanup was also AI-assisted.

This repository starts with a fresh sanitized snapshot. Active development
continues here.

## Development notes

- Customize the particle background in `src/assets/js/particles/app.js`.
- Check the homepage, About page, project navigation, and images on desktop and
  mobile after content or layout changes.
- Planned improvements include display/accessibility settings and research
  write-ups.

## Credits

- [Vincent Garreau — Particles.js](https://github.com/VincentGarreau/particles.js),
  customized for the site's background.
- W3Schools [side navigation](https://www.w3schools.com/howto/howto_js_sidenav.asp)
  and [dropdown side navigation](https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp).
- [Claude Code](https://claude.ai/claude-code), used for the Eleventy migration.
- Portrait photography is credited on the About page.

Copyright Mitchell Seitz, 2024–present. Third-party components retain their
respective notices.
