/* empty css                                          */
import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, r as renderComponent, u as unescapeHTML } from '../chunks/astro/server_D4avlH1o.mjs';
import 'kleur/colors';
import { P as PHONE_NUMBER, $ as $$Base, S as SITE_NAME } from '../chunks/Base_CVMVD3uv.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-b from-green-900 to-green-700 text-white py-20 md:py-32"> <div class="absolute inset-0 opacity-20"> <div class="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Text Content --> <div class="animate-fade-in"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
Professional Tree Service in Birmingham
</h1> <p class="text-lg md:text-xl mb-6 text-green-100">
Expert tree removal, trimming, and stump grinding for your property. Serving Birmingham and surrounding areas with quality service 24/7.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")} class="button-primary text-center text-lg px-8 py-4">
Call Now
</a> <a href="/contact" class="button-secondary text-center text-lg px-8 py-4 text-green-400 border-green-400 hover:bg-green-900">
Get Free Quote
</a> </div> <!-- Trust Badges --> <div class="mt-8 flex flex-col sm:flex-row gap-4 text-sm"> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>Licensed & Insured</span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>24/7 Emergency Service</span> </div> <div class="flex items-center gap-2"> <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>Free Estimates</span> </div> </div> </div> <!-- Image Placeholder --> <div class="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl"> <div class="w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center"> <div class="text-center"> <svg class="w-32 h-32 mx-auto text-green-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 015.646 5.646 9 9 0 0020.354 15.354z"></path> </svg> <p class="text-green-200">Hero Image Placeholder</p> </div> </div> </div> </div> </div> </section>`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/HeroSection.astro", void 0);

const $$Astro$1 = createAstro("https://birmingham-tree-service.pages.dev");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description, icon, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group block h-full" data-astro-cid-uhzbvkqe> <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition h-full border-t-4 border-green-600 overflow-hidden flex flex-col" data-astro-cid-uhzbvkqe> <!-- Icon Section --> <div class="bg-gradient-to-br from-green-50 to-green-100 px-6 py-8 text-center" data-astro-cid-uhzbvkqe> <div class="text-5xl mb-2" data-astro-cid-uhzbvkqe>${icon}</div> </div> <!-- Content Section --> <div class="px-6 py-6 flex-1 flex flex-col" data-astro-cid-uhzbvkqe> <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition" data-astro-cid-uhzbvkqe> ${title} </h3> <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1" data-astro-cid-uhzbvkqe> ${description} </p> <!-- Learn More Link --> <div class="flex items-center gap-2 text-green-600 font-bold text-sm group-hover:gap-3 transition" data-astro-cid-uhzbvkqe> <span data-astro-cid-uhzbvkqe>Learn More</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uhzbvkqe> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-uhzbvkqe></path> </svg> </div> </div> </div> </a> `;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/ServiceCard.astro", void 0);

const $$Astro = createAstro("https://birmingham-tree-service.pages.dev");
const $$FeatureBadges = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureBadges;
  const { columns = 3 } = Astro2.props;
  const features = [
    {
      icon: "\u2713",
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind."
    },
    {
      icon: "\u{1F6E1}\uFE0F",
      title: "Safety First",
      description: "Professional equipment and safety protocols on every job."
    },
    {
      icon: "\u26A1",
      title: "24/7 Emergency",
      description: "Available anytime for emergency tree removal."
    },
    {
      icon: "\u{1F4B0}",
      title: "Free Estimates",
      description: "No obligation quotes for all services."
    },
    {
      icon: "\u2B50",
      title: "4.9+ Rating",
      description: "Trusted by 300+ satisfied customers."
    },
    {
      icon: "\u{1F680}",
      title: "Quick Service",
      description: "Same-day and next-day appointments available."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div${addAttribute(`grid grid-cols-1 md:grid-cols-${columns} gap-6 md:gap-8`, "class")}> ${features.map((feature) => renderTemplate`<div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border-l-4 border-green-600"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-lg font-bold text-gray-900 mb-2">${feature.title}</h3> <p class="text-gray-600 text-sm leading-relaxed">${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/FeatureBadges.astro", void 0);

function generateLocalBusinessSchema(config) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.name,
    url: config.url,
    telephone: config.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: "US"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    }
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const schema = generateLocalBusinessSchema({
    name: SITE_NAME,
    url: "https://birmingham-tree-service.pages.dev",
    phone: PHONE_NUMBER,
    address: {
      street: "123 Main Street",
      city: "Birmingham",
      state: "AL",
      zip: "35203"
    }
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Professional Tree Service in Birmingham, AL | Tree Service Birmingham", "description": "Expert tree removal, trimming, and stump grinding in Birmingham. Licensed, insured, 24/7 emergency service. Free estimates available.", "ogImage": "https://birmingham-tree-service.pages.dev/og-image.jpg" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script>  ", "  ", "  ", '<section class="py-16 md:py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\nOur Tree Services\n</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">\nFrom routine maintenance to emergency removal, we handle all your tree care needs with professional expertise.\n</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ', " ", " ", " ", ' </div> </div> </section>  <section class="py-16 md:py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">\nServing Birmingham & Beyond\n</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">\nWe proudly serve affluent neighborhoods throughout Birmingham with professional tree care.\n</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ', " ", " ", " ", " ", " ", ' </div> </div> </section>  <section class="py-16 md:py-20 bg-green-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> <!-- Left Content --> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6">\nGet Your Free Quote Today\n</h2> <p class="text-lg text-green-100 mb-6">\nNo obligation estimates. Our team will assess your project and provide transparent pricing within 24 hours.\n</p> <ul class="space-y-4"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <div> <p class="font-bold">Same-Day Response</p> <p class="text-green-200 text-sm">We typically respond within 2 hours</p> </div> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\n<path fill-rule="evenodd" d="M16.707 5.293a1</svg></li></ul></div></div></div></section>'])), unescapeHTML(JSON.stringify(schema)), renderComponent($$result2, "HeroSection", $$HeroSection, {}), renderComponent($$result2, "FeatureBadges", $$FeatureBadges, { "columns": 3 }), maybeRenderHead(), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Tree Removal", "description": "Complete tree removal with stump grinding and debris cleanup.", "icon": "\u{1F333}", "href": "/services/tree-removal" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Tree Trimming", "description": "Professional trimming to enhance health and appearance.", "icon": "\u2702\uFE0F", "href": "/services/tree-trimming" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Stump Grinding", "description": "Remove unwanted stumps safely and efficiently.", "icon": "\u2699\uFE0F", "href": "/services/stump-grinding" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Emergency Service", "description": "24/7 emergency tree removal for storm damage.", "icon": "\u{1F6A8}", "href": "/services/emergency-removal" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Mountain Brook", "description": "Trusted tree service for one of Birmingham's most prestigious neighborhoods.", "icon": "\u{1F3D4}\uFE0F", "href": "/locations/mountain-brook" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Vestavia Hills", "description": "Professional tree care for Vestavia's beautiful estates and homes.", "icon": "\u{1F3D8}\uFE0F", "href": "/locations/vestavia-hills" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Homewood", "description": "Serving Homewood with quality tree maintenance and removal.", "icon": "\u{1F3E0}", "href": "/locations/homewood" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Downtown Birmingham", "description": "Commercial and residential tree service in downtown.", "icon": "\u{1F3E2}", "href": "/locations/downtown" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Roebuck", "description": "Experienced tree service serving the Roebuck community.", "icon": "\u{1F332}", "href": "/locations/roebuck" }), renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Highlands", "description": "Premier tree care for Highlands residents and property managers.", "icon": "\u26F0\uFE0F", "href": "/locations/highlands" })) })}`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/pages/index.astro", void 0);

const $$file = "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
