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
      return `Welcome To Matrices Course`;
    }
  })}</div> <div class="flex justify-start p-1 m-0 text-sm"><div class="w-3/12 bg-orange-800 hover:bg-green-800">${validate_component(NavBtn, "NavBtn").$$render(
    $$result,
    {
      title: "Jump To Course",
      icon: Icons.RUN,
      url: "/syllabus?tcode=matrices"
    },
    {},
    {}
  )}</div></div> <p data-svelte-h="svelte-294k7p">Welcome to the Matrix Mathematics Course! In this engaging and comprehensive course designed for grade 8/9 students, we will delve into the fascinating world of matrices. Matrices, a fundamental concept in mathematics, play a crucial role in various fields, from computer graphics to solving complex systems of equations. This course aims to equip you with a solid understanding of matrices, covering essential topics and practical applications. Get ready to explore, learn, and apply matrix operations in a way that sparks your curiosity and enhances your problem-solving skills.</p> ${validate_component(HdgWithIcon, "HdgWithIcon").$$render($$result, { icon: Icons.Template }, {}, {
    default: () => {
      return `Course Outline:`;
    }
  })} <h2 class="svelte-1bybtas" data-svelte-h="svelte-156zol0">1. Matrix Introduction:</h2> <ul data-svelte-h="svelte-1jpyp67"><li class="svelte-1bybtas">Basic definition and representation</li> <li class="svelte-1bybtas">Elements, rows, and columns</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-5wu963">2. Matrix Order:</h2> <ul data-svelte-h="svelte-1g13brj"><li class="svelte-1bybtas">Understanding the order of matrices</li> <li class="svelte-1bybtas">Size and dimensions</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-sgbx43">3. Types of Matrices:</h2> <ul data-svelte-h="svelte-15i5pmo"><li class="svelte-1bybtas">Row matrix, column matrix, and square matrix</li> <li class="svelte-1bybtas">Identity matrix and zero matrix</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-138etvx">4. Matrix Operations with Numbers:</h2> <ul data-svelte-h="svelte-yptzhc"><li class="svelte-1bybtas">Addition, subtraction, multiplication, and division</li> <li class="svelte-1bybtas">Scalar multiplication</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1nvqkbo">5. Matrix Operations with Other Matrices:</h2> <ul data-svelte-h="svelte-pdkqj4"><li class="svelte-1bybtas">Element-wise operations</li> <li class="svelte-1bybtas">Hadamard product</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-2mtgwh">6. Matrix Multiplication:</h2> <ul data-svelte-h="svelte-1elpqdx"><li class="svelte-1bybtas">Rules and properties</li> <li class="svelte-1bybtas">Applications in real-world scenarios</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1a4pkz8">7. Transpose of Matrix:</h2> <ul data-svelte-h="svelte-1kqjmul"><li class="svelte-1bybtas">Definition and properties</li> <li class="svelte-1bybtas">Symmetric and skew-symmetric matrices</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1et6jfe">8. Determinant of a Matrix:</h2> <ul data-svelte-h="svelte-9ajp98"><li class="svelte-1bybtas">Calculation methods</li> <li class="svelte-1bybtas">Importance in solving systems of equations</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-9oxe5s">9. Adjoint:</h2> <ul data-svelte-h="svelte-pj3ifp"><li class="svelte-1bybtas">Finding the adjoint of a matrix</li> <li class="svelte-1bybtas">Applications in inverse calculation</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1561trh">10. Matrix Inverse Method:</h2> <ul data-svelte-h="svelte-ox3a55"><li class="svelte-1bybtas">Understanding the concept of inverse matrices</li> <li class="svelte-1bybtas">Calculating the inverse using various methods</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-171751w">11. Cramer&#39;s Rule:</h2> <ul data-svelte-h="svelte-11eh4l5"><li class="svelte-1bybtas">Solving systems of linear equations using Cramer&#39;s Rule</li> <li class="svelte-1bybtas">Practical applications</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1qy4jp5">12. Applications of Matrices:</h2> <ul data-svelte-h="svelte-1vq19xu"><li class="svelte-1bybtas">Real-world examples in computer graphics</li> <li class="svelte-1bybtas">Applications in solving practical problems</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-sbonzc">13. Matrix Properties:</h2> <ul data-svelte-h="svelte-o0ndsa"><li class="svelte-1bybtas">Symmetric matrices and their characteristics</li> <li class="svelte-1bybtas">Skew-symmetric and idempotent matrices</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-1sw92q7">14. Solving Systems of Equations:</h2> <ul data-svelte-h="svelte-1eerlh1"><li class="svelte-1bybtas">Applying matrices to solve systems of linear equations</li> <li class="svelte-1bybtas">Understanding the connection between matrices and simultaneous equations</li></ul> <h2 class="svelte-1bybtas" data-svelte-h="svelte-grw4hp">Conclusion</h2> <p data-svelte-h="svelte-1d8x0v4">This course promises an exciting journey into the world of matrices, providing you with valuable knowledge and skills that extend beyond the classroom. Let&#39;s embark on this learning adventure together!</p> <br> <br> <br> <br> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2hVtsX8s.js.map
