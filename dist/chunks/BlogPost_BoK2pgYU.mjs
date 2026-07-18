import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_D4avlH1o.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_CVMVD3uv.mjs';

const $$Astro = createAstro("https://birmingham-tree-service.pages.dev");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, date, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description || `Blog post: ${title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="py-16 md:py-20"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <header class="mb-12"> <time class="text-gray-500 text-sm">${date}</time> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">${title}</h1> </header> <div class="prose prose-lg max-w-none"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </article> ` })}`;
}, "/sessions/serene-inspiring-clarke/mnt/birmingham-tree-service/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
