import { c as create_ssr_component, v as validate_component } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { N as NavBtn, I as Icons } from './NavBtn-CiMARtw_.js';

const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="flex justify-between items-center" data-svelte-h="svelte-1187kxc"><div class="w-15"><a href="/"><button class="w-full flex flex-col items-center p-1 m-0 rounded hover:bg-gray-500 active:bg-gray-900"><span class="text-md">🏠</span> <span class="text-xs font-md text-white">Home</span></button></a></div></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <div class="flex justify-between items-center p-0 px-1 m-0 bg-gray-700"><div class="flex">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>   <div class="flex">${`${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Blog",
      icon: Icons.BOOK,
      url: "/blog"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Payment",
      icon: Icons.ROCKET,
      url: "/payment"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Login",
      icon: "🔑",
      url: "/login"
    },
    {},
    {}
  )} ${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Signup",
      icon: "🔓",
      url: "/signup"
    },
    {},
    {}
  )}`}</div> </div>`;
});

export { Nav as N };
//# sourceMappingURL=Nav-u0lL8StL.js.map
