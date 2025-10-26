# Spisoh (Stavanger, Norway) - Restaurant Website
A static website for Spisoh - a restaurant in Norway. This repository contains the full front-end source for the site: HTML, CSS, JavaScript and image assets. It's a simple, responsive, static site suitable for local preview and hosting via GitHub Pages (or any other static file host)

## Contents
Repository root files (high level):
- `index.html` - Main landing page of the website
- `index_catering.html` - Catering-specific page for the restaurant's catering services
- `form_success.html` - Success page used after form submission
- `style.css` - Main site stylesheet
- `styles-catering.css` - Styles specific to the catering page
- `form_success.css` - Styles for the form success page
- `script.js` - Main front-end JavaScript (animations, interactions)
- `catering_script.js` - JavaScript specific to the catering page
- `img/` - Folder containing image assets used across the site (hero, cards, team photos, logo, etc.)

Images (examples):
- `img/logo_transparent.avif` - site logo
- `img/hero-slider_1.avif`...`hero-slider_5.avif` - hero slider images
- `img/card-1.avif`, `card-2.avif`, ... - feature or menu card images
- Files are intentionally small and optimized for a static deployment

## Project summary / notes / goals
- Present Spisoh's brand and menu clearly
- Provide a dedicated catering page for event orders
- Deliver a responsive, image-forward design that works well on mobile and desktop
- Simple static site that is easy to host and maintain
- Sensitive information, such as form key, phone number, email was redacted and replaced with a placeholder in some places

## Structure & content overview
- `index.html` - Hero slider, featured items, team/chef sections, and primary navigation/starting point
- `index_catering.html` - Catering landing content and form or call-to-action
- `script.js` and `catering_script.js` - Add or update JavaScript interactions (slider, navigation toggles, form validation). Keep behavior unobtrusive so pages degrade gracefully without JS
- `style.css` and `styles-catering.css` - Visual styling. Use a consistent color palette and variable overrides if you later convert to a CSS preprocessor
- `img/` - Replace images here to update hero and content visuals. Use same filenames or update the references in HTML

## Accessibility & performance notes
- Many images are provided in AVIF format for smaller file sizes. Provide fallbacks if you need broader compatibility (e.g., JPEG/PNG) or add `<picture>` elements
- Keep alt text meaningful when replacing images
- Ensure color contrast is sufficient for text readability on backgrounds

## Contact
- Project author: [Aravind A Kamath](https://github.com/aravindanirudh)