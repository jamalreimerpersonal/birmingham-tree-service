/* empty css                                          */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D4avlH1o.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CVMVD3uv.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://birmingham-tree-service.pages.dev");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, description, date, category, href, image } = Astro2.props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group block h-full" data-astro-cid-e3grugc2> <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition h-full overflow-hidden flex flex-col" data-astro-cid-e3grugc2> <!-- Image --> ${image && renderTemplate`<div class="relative h-48 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden" data-astro-cid-e3grugc2> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition duration-300" data-astro-cid-e3grugc2> </div>`} ${!image && renderTemplate`<div class="h-48 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center" data-astro-cid-e3grugc2> <svg class="w-16 h-16 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-e3grugc2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2v-5.5a2.972 2.972 0 002-2.5A2.972 2.972 0 0023 12.5V15a2 2 0 01-2 2z" data-astro-cid-e3grugc2></path> </svg> </div>`} <!-- Content --> <div class="px-6 py-6 flex-1 flex flex-col" data-astro-cid-e3grugc2> <!-- Category Badge --> <div class="mb-3" data-astro-cid-e3grugc2> <span class="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full" data-astro-cid-e3grugc2> ${category} </span> </div> <!-- Title --> <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition line-clamp-2" data-astro-cid-e3grugc2> ${title} </h3> <!-- Description --> <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3" data-astro-cid-e3grugc2> ${description} </p> <!-- Footer --> <div class="flex items-center justify-between text-xs text-gray-500 border-t pt-4" data-astro-cid-e3grugc2> <time${addAttribute(date, "datetime")} data-astro-cid-e3grugc2> ${formattedDate} </time> <span class="text-green-600 font-bold group-hover:gap-2 flex items-center gap-1" data-astro-cid-e3grugc2>
Read →
</span> </div> </div> </div> </a> `;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "How Much Does Tree Removal Cost in Birmingham?",
      description: "Understanding tree removal pricing. Factors that affect cost and what to expect.",
      date: "2024-01-15",
      category: "Pricing",
      href: "/blog/tree-removal-cost"
    },
    {
      title: "Tree Trimming vs. Tree Removal: When to Do Each",
      description: "Learn when to trim trees and when removal is the better option for your property.",
      date: "2024-01-08",
      category: "Tree Care",
      href: "/blog/trimming-vs-removal"
    },
    {
      title: "Signs Your Tree is Diseased and Needs Removal",
      description: "Recognizing common tree diseases and when professional removal becomes necessary.",
      date: "2024-01-01",
      category: "Tree Health",
      href: "/blog/diseased-trees"
    },
    {
      title: "Storm Damage? Here's What to Do After Severe Weather",
      description: "Emergency steps after storm damage and when to call professional tree removal.",
      date: "2023-12-25",
      category: "Emergency",
      href: "/blog/storm-damage-guide"
    },
    {
      title: "Best Time to Trim Trees: Seasonal Guide for Birmingham",
      description: "When to trim different types of trees for optimal health and growth.",
      date: "2023-12-18",
      category: "Seasonal",
      href: "/blog/tree-trimming-season"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tree Service Blog | Tips, Guides, and Tree Care Articles", "description": "Expert tree care tips, guides, and articles. Learn about tree removal, trimming, health, and more." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-gradient-to-b from-green-900 to-green-700 text-white py-16 md:py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="max-w-3xl"> <h1 class="text-4xl md:text-5xl font-bold mb-4">Tree Care Tips & Guides</h1> <p class="text-lg text-green-100">
Expert advice on tree removal, trimming, health, and seasonal care. Learn from certified arborists.
</p> </div> </div> </section>  <section class="py-16 md:py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.title, "description": post.description, "date": post.date, "category": post.category, "href": post.href })}`)} </div> </div> </section> ` })}`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/pages/blog/index.astro", void 0);

const $$file = "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
