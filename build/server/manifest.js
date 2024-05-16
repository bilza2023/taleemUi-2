const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fbise10math/fbise10math.js","fbise10math/images/thumbnail.png","fbise9math/chapterLinks_1.js","fbise9math/chapterLinks_2.js","fbise9math/chapterLinks_3.js","fbise9math/chapterLinks_4.js","fbise9math/fbise9math.js","fbise9math/images/1.6q2.png","fbise9math/images/8.1-q2-p-1.png","fbise9math/images/8.1-q2-p-2.png","fbise9math/images/8.1-q2-p-3.png","fbise9math/images/8.1-q2-p-5.png","fbise9math/images/ex4.1-q2_matrix_multiplication.png","fbise9math/images/multiplication_step-0.png","fbise9math/images/multiplication_step-01.png","fbise9math/images/multiplication_step-02.png","fbise9math/images/multiplication_step-03.png","fbise9math/images/multiplication_step-04.png","fbise9math/images/text2-4-8-6.png","fbise9math/images/theorem10.1.1.png","fbise9math/images/theorem10.1.2.png","fbise9math/images/thumbnail.png","fbise9math/test.mp3","mathImages/1920x1080.png","mathImages/bg.png","mathImages/chemistry_10thFBSIE.png","mathImages/chemistry_9thFBSIE.png","mathImages/female.png","mathImages/female2.png","mathImages/graph.png","mathImages/male.png","mathImages/math.png","mathImages/math_10thFBSIE.png","mathImages/math_8thFBSIE.png","mathImages/math_9thFBSIE.png","mathImages/physics_10thFBSIE.png","mathImages/physics_9thFBSIE.png","mathImages/potrate.jpg","mathImages/theorem10.1.2.png","mathImages/urdu_10thFBSIE.png","mathImages/urdu_8thFBSIE.png","mathImages/urdu_9thFBSIE.png","matrices/chapterLinks_1.js","matrices/images/matrix_rows_columns.png","matrices/images/multiplication_step-0.png","matrices/images/multiplication_step-01.png","matrices/images/multiplication_step-02.png","matrices/images/multiplication_step-03.png","matrices/images/multiplication_step-04.png","matrices/images/thumbnail.png","matrices/matrices.js"]),
	mimeTypes: {".png":"image/png",".js":"text/javascript",".mp3":"audio/mpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.czJs33jM.js","app":"_app/immutable/entry/app.9J_deRSc.js","imports":["_app/immutable/entry/start.czJs33jM.js","_app/immutable/chunks/entry.Y92BIrfN.js","_app/immutable/chunks/scheduler.k9AsmmqN.js","_app/immutable/chunks/index.PPAuALvV.js","_app/immutable/entry/app.9J_deRSc.js","_app/immutable/chunks/scheduler.k9AsmmqN.js","_app/immutable/chunks/index.u3lC7Y1-.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-EGrWT-9o.js')),
			__memo(() => import('./chunks/1-I7FVbwmk.js')),
			__memo(() => import('./chunks/2-ciV-8PFz.js')),
			__memo(() => import('./chunks/3-bd0h400W.js')),
			__memo(() => import('./chunks/4-oY4Q76yt.js')),
			__memo(() => import('./chunks/5-YhOG883P.js')),
			__memo(() => import('./chunks/6-kjeuD03o.js')),
			__memo(() => import('./chunks/7-u1YMtYCV.js')),
			__memo(() => import('./chunks/8-XufBkDCE.js')),
			__memo(() => import('./chunks/9-OjHXVyF3.js')),
			__memo(() => import('./chunks/10-RxRxYK1W.js')),
			__memo(() => import('./chunks/11-hL8em5xv.js')),
			__memo(() => import('./chunks/12-gf7rnHPu.js')),
			__memo(() => import('./chunks/13-EJZnEdYV.js')),
			__memo(() => import('./chunks/14-bZs4riZy.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/app/matrix",
				pattern: /^\/app\/matrix\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/dockers",
				pattern: /^\/blog\/dockers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/taleem",
				pattern: /^\/blog\/taleem\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/change_forgot_password",
				pattern: /^\/change_forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/forgot_password",
				pattern: /^\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/payment",
				pattern: /^\/payment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/syllabus",
				pattern: /^\/syllabus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/verify",
				pattern: /^\/verify\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
