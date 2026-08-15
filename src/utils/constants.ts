export const SITE_NAME = 'Birmingham Tree Service';

// Placeholder until the site ranks and CallRail is activated (side-businesses.md §13
// sequencing policy: do not pay for tracking on a site with no visibility).
export const PHONE_NUMBER = '(205) 555-0123';

// Must match the live domain. Was info@birminghamtreeservice.com, a domain we do
// not own, which is a NAP inconsistency and an undeliverable contact address.
export const EMAIL = 'info@birminghamtreecompany.com';

// Single source of truth for the canonical URL. Previously the staging URL
// (birmingham-tree-service.pages.dev) was hardcoded in four separate places,
// which leaked a fully indexable duplicate of the site via og:url and og:image.
export const SITE_URL = import.meta.env.SITE_URL || 'https://birminghamtreecompany.com';

// ─────────────────────────────────────────────────────────────────────────────
// 🔴 TEMPORARY: site is hidden from search while it is unfinished.
//
// Set 2026-08-15. The site went live mid-build. /contact, /about and /locations
// are linked from every page's nav but DO NOT EXIST. The primary CTA
// ("Get Free Quote") points at /contact and returns a 404. The contact form is
// imported but never rendered, and the phone number is still a placeholder.
// There is currently no working way for a visitor to make contact.
//
// FLIP THIS TO false WHEN:
//   [ ] /contact exists and its form actually submits (needs a real FORMSPREE_ID)
//   [ ] /about exists
//   [ ] /locations index exists
//   [ ] privacy-policy + terms-of-service exist and the footer links point at them
//   [ ] the "Hero Image Placeholder" is replaced with a real image
//   [ ] blog dates are corrected (all currently read January 2024)
//   [ ] a real tracked phone number is in place
// ─────────────────────────────────────────────────────────────────────────────
export const NOINDEX = true;
