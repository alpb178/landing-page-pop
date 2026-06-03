# landing-page-tikneo

Marketing landing page for **PolyPOP** — _"Lo mejor pasa cuando las burbujas se
encuentran."_ Built in **React + TypeScript + Tailwind CSS v4 (Vite)** from the
[PolyPOP Figma design](https://www.figma.com/design/zVvBEOV4RtJLFomnwhJZZp/PolyPOP).

## Highlights

- **Two interactive modes.** The design ships two variants — **POP Circle**
  (community / friends) and **POP Date** (dating). The mode tabs swap the hero
  device, the mockup gallery, the tagline, the feature copy and the download
  banner imagery from a single content model (`src/data/content.ts`).
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

## Structure

```
public/assets/         # icons (SVG), logo, decorations + device mockups (PNG)
src/
  data/content.ts      # the POP Circle / POP Date content model
  components/
    Navbar.tsx
    Hero.tsx
    ModeTabs.tsx        # POP Circle / POP Date switcher
    MockupGallery.tsx
    Tagline.tsx
    FeatureCards.tsx
    DownloadBanner.tsx
    Footer.tsx
    DownloadBadges.tsx  # App Store / Google Play pills (shared)
    Decoration.tsx      # absolutely-positioned blobs & bubbles
    QrPlaceholder.tsx   # decorative QR grid in the footer
  index.css            # Tailwind v4 @theme tokens + keyframes
  App.tsx              # composes the page + owns the mode state
```
