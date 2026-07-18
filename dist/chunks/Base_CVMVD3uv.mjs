import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, f as renderHead, r as renderComponent, e as renderSlot } from './astro/server_D4avlH1o.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */

const SITE_NAME = "Birmingham Tree Service";
const PHONE_NUMBER = "(205) 555-0123";
const EMAIL = "info@birminghamtreeservice.com";

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/tree-removal" },
    { label: "Locations", href: "/locations" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <a href="/" class="flex items-center gap-2"> <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 110-14 7 7 0 010 14z"></path> </svg> </div> <span class="hidden sm:inline font-bold text-lg text-gray-900">${SITE_NAME}</span> </a> <!-- Desktop Nav --> <nav class="hidden md:flex gap-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-700 hover:text-green-600 transition font-medium text-sm"> ${item.label} </a>`)} </nav> <!-- CTA --> <div class="flex items-center gap-4"> <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")} class="hidden sm:inline text-green-600 font-bold hover:text-green-700"> ${PHONE_NUMBER} </a>
href=${`tel:${PHONE_NUMBER}`}
class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm"
        >
          Call Now
</div> </div> <!-- Mobile Menu --> <div class="md:hidden text-center pb-2"> <p class="text-xs text-green-600 font-bold"> <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")}>${PHONE_NUMBER}</a> </p> </div> </div> </header>`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> <!-- Company Info --> <div> <h4 class="font-bold text-white mb-4">${SITE_NAME}</h4> <p class="text-sm mb-4">
Professional tree service serving the Birmingham area with quality work and customer satisfaction.
</p> <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")} class="text-green-400 hover:text-green-300 font-bold"> ${PHONE_NUMBER} </a> </div> <!-- Services --> <div> <h4 class="font-bold text-white mb-4">Services</h4> <ul class="space-y-2 text-sm"> <li><a href="/services/tree-removal" class="hover:text-white transition">Tree Removal</a></li> <li><a href="/services/tree-trimming" class="hover:text-white transition">Tree Trimming</a></li> <li><a href="/services/stump-grinding" class="hover:text-white transition">Stump Grinding</a></li> <li><a href="/services/emergency-removal" class="hover:text-white transition">Emergency Service</a></li> </ul> </div> <!-- Company --> <div> <h4 class="font-bold text-white mb-4">Company</h4> <ul class="space-y-2 text-sm"> <li><a href="/about" class="hover:text-white transition">About Us</a></li> <li><a href="/blog" class="hover:text-white transition">Blog</a></li> <li><a href="/locations" class="hover:text-white transition">Service Areas</a></li> <li><a href="/contact" class="hover:text-white transition">Contact</a></li> </ul> </div> <!-- Contact --> <div> <h4 class="font-bold text-white mb-4">Contact</h4> <ul class="space-y-2 text-sm"> <li>Available 24/7 for emergencies</li> <li><a${addAttribute(`tel:${PHONE_NUMBER}`, "href")} class="hover:text-white transition">${PHONE_NUMBER}</a></li> <li><a${addAttribute(`mailto:${EMAIL}`, "href")} class="hover:text-white transition">${EMAIL}</a></li> </ul> </div> </div> <div class="border-t border-gray-700 pt-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"> <p>&copy; 2024 ${SITE_NAME}. All rights reserved.</p> <div class="flex gap-4 md:justify-end"> <a href="#" class="hover:text-white transition">Privacy Policy</a> <a href="#" class="hover:text-white transition">Terms of Service</a> </div> </div> </div> </div> </footer>`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://birmingham-tree-service.pages.dev");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, description, ogImage, canonical } = Astro2.props;
  const siteUrl = "https://birmingham-tree-service.pages.dev";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}<meta property="og:url"${addAttribute(canonical || siteUrl, "content")}><meta property="og:site_name" content="Tree Service Birmingham"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}>${ogImage && renderTemplate`<meta name="twitter:image"${addAttribute(ogImage, "content")}>`}<!-- Canonical -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${renderHead()}</head> <body class="bg-white text-gray-900"> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/layouts/Base.astro", void 0);

export { $$Base as $, PHONE_NUMBER as P, SITE_NAME as S };
