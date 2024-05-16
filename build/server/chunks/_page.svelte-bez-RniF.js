import { c as create_ssr_component, v as validate_component, b as escape, d as add_attribute } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { I as Icons } from './Logo-d4OkAfYa.js';
import { C as Centre } from './Centre-Yx5K1eFw.js';
import { H as HdgWithIcon } from './HdgWithIcon-WTqjd-JK.js';
import { P as PageWrapper } from './PageWrapper-a8Acya-U.js';
import { N as NavBlog } from './NavBlog-jXy06keG.js';
import { R as RESOURCE_URL } from './config-u-5BmQU4.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "📜" } = $$props;
  let { title = "The Title" } = $$props;
  let { url = "https://google.com" } = $$props;
  let { titleCharsCount = 25 } = $$props;
  function firstXChars(string) {
    return string.slice(0, titleCharsCount);
  }
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.titleCharsCount === void 0 && $$bindings.titleCharsCount && titleCharsCount !== void 0)
    $$bindings.titleCharsCount(titleCharsCount);
  return `<div class="min-w-[150px] bg-gray-600 rounded-md p-2 m-1 border-4 border-blue-700 text-center hover:border-blue-200"> <a class="hover:bg-gray-300 rounded-lg"${add_attribute("href", url, 0)} target="_blank"><div class="flex flex-col">  <div class="mb-2"><span class="text-4xl">${escape(icon)}</span></div>  <div class="p-1 m-1 bg-gray-700 text-sm rounded-md">${escape(firstXChars(title))}</div>  <div class="flex justify-center m-0 p-0">${slots.default ? slots.default({}) : ``} <hr></div> </div></a> </div>`;
});
const MathCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { name } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      icon: Icons.BALANCE,
      title: "FBISE 9th Math",
      url
    },
    {},
    {
      default: () => {
        return `<p class="p-1 m-1 bg-gray-700 text-xs rounded-md">${escape(name)}</p>`;
      }
    }
  )}`;
});
const BooksImages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tcode } = $$props;
  if ($$props.tcode === void 0 && $$bindings.tcode && tcode !== void 0)
    $$bindings.tcode(tcode);
  return `<a${add_attribute("href", `/syllabus?tcode=${tcode}`, 0)}><img class="p-2 border-2 border-white rounded-md"${add_attribute("src", `${RESOURCE_URL}/images/${tcode}/thumbnail.png`, 0)} alt="Math FBSIE 9th"></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  ${validate_component(NavBlog, "NavBlog").$$render($$result, {}, {}, {})} ${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Centre, "Centre").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
            $$result,
            {
              bgColor: "bg-stone-600",
              icon: Icons.BOOKS
            },
            {},
            {
              default: () => {
                return `Your Online Home Tutor`;
              }
            }
          )}`;
        }
      })} ${validate_component(Centre, "Centre").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="bg-gray-700 rounded-md w-full mx-8"><div class="flex justify-center gap-1 p-2 m-2">${validate_component(BooksImages, "BooksImages").$$render($$result, { tcode: "fbise9math" }, {}, {})} ${validate_component(BooksImages, "BooksImages").$$render($$result, { tcode: "matrices" }, {}, {})}</div></div>`;
        }
      })} <br> <div class="flex justify-start m-2 p-2 ">${validate_component(HdgWithIcon, "HdgWithIcon").$$render(
        $$result,
        {
          bgColor: "bg-stone-600",
          icon: Icons.TEST
        },
        {},
        {
          default: () => {
            return `Math Example Questions`;
          }
        }
      )}</div> <div class="flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white">${validate_component(MathCard, "MathCard").$$render(
        $$result,
        {
          url: `/player?tcode=fbise9math&id=659e87fa92faba116b079b76`,
          name: "Ex 1.2 Q-1 pt 0"
        },
        {},
        {}
      )} ${validate_component(MathCard, "MathCard").$$render(
        $$result,
        {
          url: "/player?tcode=fbise9math&id=659e880792faba116b079d96",
          name: "Ex 1.4 Q-1 pt 0"
        },
        {},
        {}
      )} ${validate_component(MathCard, "MathCard").$$render(
        $$result,
        {
          url: "/player?tcode=fbise9math&id=659e881192faba116b079ecd",
          name: "Ex 1.5 Q-1 pt 0"
        },
        {},
        {}
      )} ${validate_component(MathCard, "MathCard").$$render(
        $$result,
        {
          url: "/player?tcode=matrices&id=65aa9f91d403c62292b316bd",
          name: "Matrix Multiplication"
        },
        {},
        {}
      )}</div> <br> <br> <br> <br> <br> <br> <br> <br> <div class="text-xs" data-svelte-h="svelte-12jmunk">version 0.0.2</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bez-RniF.js.map
