# PolyPOP — Landing page

Marketing landing page for **PolyPOP** — _"Lo mejor pasa cuando las burbujas se
encuentran."_ Built in **React + TypeScript + Tailwind CSS v4 (Vite)** from the
[PolyPOP Figma design](https://www.figma.com/design/zVvBEOV4RtJLFomnwhJZZp/PolyPOP).

- **Repo:** `alpb178/landing-page-pop` · **npm package:** `landing-page-tikneo`
- **Descarga la app:**
  - App Store — https://apps.apple.com/us/app/polypop/id6755899118
  - Google Play — https://play.google.com/store/apps/details?id=com.tikneo.popmobile

## Highlights

- **Two interactive modes.** The design ships two variants — **POP Circle**
  (community / friends) and **POP Date** (dating). The mode tabs swap the hero
  device, the mockup gallery, the tagline, the feature copy and the download
  banner imagery from a single content model (`src/data/content.ts`). The active
  mode is deep-linkable via `?mode=circle|date`.
- **Live store links.** The hero and banner download badges, plus the footer
  "Descargas" column, point to the real App Store / Google Play listings
  (centralized in `STORE_LINKS`, `src/data/content.ts`).
- **App-icon favicon.** The browser tab uses the PolyPOP app icon
  (`public/assets/app-icon.png` / `favicon-256.png`), not the wordmark logo.
- **Faithful to the design system.** Colors, type scale (Plus Jakarta Sans +
  DM Sans), the teal `#1FB3AE` palette, soft glow "blobs" and translucent
  "bubbles" are taken directly from the Figma variables.
- **Responsive.** Pixel-faithful at the 1440px desktop frame, gracefully
  collapsing to tablet and mobile (stacked sections, mobile nav menu).
- **Accessible.** Semantic landmarks + headings, accessible toggle buttons
  (`aria-pressed`) for the mode switcher, AA-contrast text, visible keyboard
  focus, decorative imagery marked `aria-hidden`, and `prefers-reduced-motion`
  support.

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
```

## Project structure

```
.github/
  PULL_REQUEST_TEMPLATE.md   # auto-loaded when opening a PR
FLUJO-TRABAJO-DEVS.md        # team git workflow (see below)
public/assets/               # icons (SVG), logo, app icon, decorations + device mockups (PNG)
src/
  data/content.ts            # POP Circle / POP Date content model + STORE_LINKS
  components/
    Navbar.tsx
    Hero.tsx
    ModeTabs.tsx             # POP Circle / POP Date switcher (aria-pressed)
    MockupGallery.tsx
    Tagline.tsx
    FeatureCards.tsx
    DownloadBanner.tsx
    Footer.tsx
    DownloadBadges.tsx       # App Store / Google Play pills (shared)
    Decoration.tsx           # absolutely-positioned blobs & bubbles
    QrPlaceholder.tsx         # decorative QR grid in the footer
  index.css                  # Tailwind v4 @theme tokens + keyframes
  App.tsx                    # composes the page + owns the mode state
```

## Contributing — Git workflow

This repo follows the EMX unified workflow (full details in
[`FLUJO-TRABAJO-DEVS.md`](./FLUJO-TRABAJO-DEVS.md)). Two protected branches:

| Branch      | Environment | Access                                |
| ----------- | ----------- | ------------------------------------- |
| `main`      | Production  | PR from `develop` only (1 approval)   |
| `develop`   | Staging     | PR from a feature branch (1 approval) |
| `feature/*` `fix/*` `chore/*` | Local | Free                  |

**Never push directly to `develop` or `main`.** Standard flow:

```bash
git checkout develop && git pull origin develop
git checkout -b feature/nombre-descriptivo
# ...commit with feat:/fix:/chore:/refactor:/docs: prefixes...
git push -u origin feature/nombre-descriptivo
# open a PR → develop (squash & merge); the PR template loads automatically
```

Once validated in staging, open a PR `develop` → `main` to release.
