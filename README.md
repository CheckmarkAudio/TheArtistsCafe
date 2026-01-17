# The Artists Cafe

## Replace background media
- Replace `/assets/bg.mp4` and `/assets/bg.webm` with your optimized videos.
- Replace `/assets/bg-poster.jpg` with a static poster image.
- The `<video>` tag in `index.html` and `apply.html` references these files.

## Edit copy
- All copy lives in `content.js` inside `window.SiteContent`.
- Update headlines, bullets, and FAQ items there and the pages will render the new text.

## EmailJS setup
- Open `mail.js` and replace:
  - `EMAILJS_SERVICE_ID`
  - `EMAILJS_TEMPLATE_ID`
  - `EMAILJS_PUBLIC_KEY`
  - (Optional) `EMAILJS_AUTOREPLY_TEMPLATE_ID`
- The form submits a JSON payload to `artistscafe@hallpassinternational.com`.

## Tier preselect
- Tier apply links use a query param: `/apply.html?tier=gold`.
- `apply.js` reads the `tier` param and preselects the matching radio option.

## Assets
- SVG image-link kit lives in `/assets/` and is used for all anchors.
- Swap any SVG with your branded versions as needed.
