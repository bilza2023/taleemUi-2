import { c as create_ssr_component, v as validate_component } from './ssr-fIbI7xQ0.js';
import './SvelteToast.svelte_svelte_type_style_lang-ppxS5-uB.js';
import './client-3PNagXEF.js';
import { I as Icons, H as HdgWithIcon, N as NavBtn } from './NavBtn-CiMARtw_.js';
import './index-4LUj-XhK.js';
import './exports-mq_1S73-.js';

const css = {
  code: '.main.svelte-1bybtas{line-height:1.9em}h2.svelte-1bybtas{padding-left:8px;background-color:#28323f;color:yellow}li.svelte-1bybtas{padding-left:12px;-webkit-text-decoration:dotted;text-decoration:dotted}li.svelte-1bybtas::before{content:"►";padding-right:5px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="bg-gray-800 px-4 py-6 text-white main text-xl svelte-1bybtas"><div class="flex justify-center mb-4">${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, {}, {}, {
    default: () => {
      return `Welcome to skillzaa.com`;
    }
  })}</div> <div class="flex justify-start p-1 m-0 text-sm"><div class="w-3/12 bg-orange-800 hover:bg-green-800">${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Jump To Courses",
      icon: Icons.RUN,
      url: "/"
    },
    {},
    {}
  )}</div></div> <header data-svelte-h="svelte-1mtltpc"><p>Skillzaa.com is one of its kind Education and learning plateform. It is your Gateway to Quality and Affordable Education in Pakistan</p></header> <section data-svelte-h="svelte-kfhuu0"><h2 class="svelte-1bybtas">Empowering Every Student</h2> <p>At skillzaa.com, we&#39;re on a mission to bridge the educational gap in Pakistan, especially in Scientific subjects and STEM. Our platform provides top-quality lectures, presentations, and lessons to empower students with knowledge.</p></section> <section data-svelte-h="svelte-1bxouob"><h2 class="svelte-1bybtas">Why skillzaa.com?</h2> <ul><li class="svelte-1bybtas"><strong>Non-Video Format:</strong> Overcoming slow internet and high data costs, our content is not video-based, ensuring accessibility for all.</li> <li class="svelte-1bybtas"><strong>Mobile-First Design:</strong> We understand the importance of your mobile device. Prepare for exams with everything you need in your pocket.</li> <li class="svelte-1bybtas"><strong>Flexible Learning:</strong> Study at your own pace, whether it&#39;s one question at a time or an entire exercise in an hour.</li> <li class="svelte-1bybtas"><strong>Accessible Education:</strong> An excellent alternative for those without access to expensive tuition or unable to travel to traditional institutes.</li></ul></section> <section data-svelte-h="svelte-hv1io"><h2 class="svelte-1bybtas">Your Learning Journey Starts Here</h2> <p>Embark on a personalized learning experience tailored to your needs. Our platform is optimized for mobile devices, ensuring a seamless educational journey, even in challenging conditions.</p></section> <footer data-svelte-h="svelte-1cf1e0b"><p>Join us in revolutionizing education in Pakistan. skillzaa.com - Where Learning Knows No Boundaries.</p></footer> <br> <br> <br> <br> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-gn4fCcdD.js.map
