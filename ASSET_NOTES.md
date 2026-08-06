# Homepage asset notes

## Source and permission scope

All visual assets added for the homepage were downloaded from Kent Business College's first-party WordPress media library at `https://kentbusinesscollege.com/wp-content/uploads/`. They are used only to recreate the Kent Business College site requested by its project owner.

## Local asset groups

- `frontend/public/assets/logos/` — Kent Business College logo and visible organisation logos from the homepage ticker.
- `frontend/public/assets/images/` — current homepage hero and funded programme photography.
- `frontend/public/assets/people/` — current top achiever, learner case-study and testimonial portraits.
- `frontend/public/assets/fonts/` — Poppins 400, 500, 600 and 700 WOFF2 files served by the Kent Business College site.

## Representative source URLs

- Hero: `https://kentbusinesscollege.com/wp-content/uploads/2026/06/Kent-Business-College-44444.jpg`
- Project programme: `https://kentbusinesscollege.com/wp-content/uploads/2026/06/WeStream2026-122.jpg`
- Project controls programme: `https://kentbusinesscollege.com/wp-content/uploads/2026/06/WeStream2026-182.jpg`
- Marketing programme: `https://kentbusinesscollege.com/wp-content/uploads/2026/06/WeStream2026-312.jpg`
- Case studies: `https://kentbusinesscollege.com/wp-content/uploads/2026/07/`
- Logos and testimonials: `https://kentbusinesscollege.com/wp-content/uploads/2026/02/`

## Font

The homepage uses Poppins throughout, matching the live Elementor configuration. Only the Latin WOFF2 subsets and weights used by this implementation are included.

## Intentional differences

- The original WordPress/Elementor markup and plugins were not copied. Components and interactions were rebuilt natively in React.
- The live site's support chat is not reproduced because the repository already provides a dedicated KBC Support route and the supplied task did not provide an approved chat service credential.
- Programme and editorial homepage content is captured from the live page at implementation time. Events come from the existing Django event API, populated by the new Eventbrite sync command, with a small resilient fallback for API-offline local previews.
- No whole-section screenshots, third-party stock photography or invented learner identities were used.
