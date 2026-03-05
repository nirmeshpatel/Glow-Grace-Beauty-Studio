# Glow & Grace Beauty Studio Website

A premium, single-page beauty parlour website designed for bridal and salon services.  
Built with clean HTML, custom CSS, vanilla JavaScript, and Bootstrap 5.

![Glow & Grace Preview](assets/images/blush-pink-bridal-portrait.webp)

## Highlights

- Elegant  hero section with strong visual branding.
- Fully responsive layout for mobile, tablet, and desktop.
- Sticky navbar with active section highlighting on scroll.
- Smooth reveal-on-scroll animations using `IntersectionObserver`.
- Expandable gallery with `See More / See Less` toggle.
- Scroll-to-top floating button.
- Service cards, transparent pricing blocks, testimonials, and contact section.
- Embedded Google Map and social links.
- SEO-ready meta tags + Open Graph tags.
- Lazy-loaded images for better performance.

## Tech Stack

- HTML5
- CSS3 (custom properties, gradients, animation)
- JavaScript (ES6, no framework)
- Bootstrap `5.3.3`
- Bootstrap Icons `1.11.3`
- Google Fonts (Playfair Display + Poppins)

## Project Structure

```text
Glow Grace Beauty Website/
|-- index.html
|-- style.css
|-- script.js
|-- favicon.svg
|-- assets/
|   `-- images/
`-- README.md
```

## Sections Included

- Home
- About
- Services
- Pricing
- Gallery
- Testimonials
- Contact
- Footer

## Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Start with any one method:

- Direct open: double-click `index.html`
- Local server (recommended):

```powershell
python -m http.server 5500
```

Then visit: `http://localhost:5500`

## Quick Customization

- Update salon name, tagline, and text content in `index.html`.
- Replace images in `assets/images/` (keep file names same for quick swap).
- Modify brand colors and typography from CSS variables in `style.css` (`:root` section).
- Adjust animations, active nav behavior, gallery toggle, and scroll button logic in `script.js`.
- Replace demo contact details, social links, and map location with real business data.

## Deployment

This is a static website, so it can be deployed easily on:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

## Future Improvements (Optional)

- Add working appointment form with backend/email integration.
- Add WhatsApp one-click booking CTA in hero section.
- Add multilingual support (English + Hindi).
- Add image compression pipeline for faster first load.

## License

Use freely for personal or client projects.  
For production use, replace placeholder brand details and demo links.
