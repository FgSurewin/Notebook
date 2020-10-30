module.exports = {
	title: "NoteBook",
	themeConfig: {
		logo: "/images/logo.JPG",
		nav: [
			// {
			// 	text: "Languages",
			// 	ariaLabel: "Language Menu",
			// 	items: [
			// 		{ text: "Chinese", link: "/language/chinese/" },
			// 		{ text: "Japanese", link: "/language/japanese/" },
			// 	],
			// },
			// { text: "Contact", link: "/contact/" },
			{ text: "Calculus", link: "/calculus/" },
			// { text: "Introduction", link: "/introduction/" },
			// {
			// 	text: "Web",
			// 	items: [
			// 		{ text: "frontEnd", link: "/web/front/" },
			// 		{ text: "backEnd", link: "/web/back/" },
			// 	],
			// },
		],
		sidebar: {
			"/calculus/": [
				{
					title: "Review", // 必要的
					// path: "/calculus/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: ["pythagorean", "function", "ex_function"],
				},
				{
					title: "Limit",
					collapsable: false,
					sidebarDepth: 1,
					children: ["limit", "continuity", "discontinuity"],
				},
			],
			"/introduction/": [
				{
					title: "Intro",
					path: "/introduction/",
					collapsable: false,
					sidebarDepth: 1,
					children: ["", "testOne", "testTwo"],
				},
			],
			"/web/front/": [
				{
					title: "Group 1",
					path: "/web/front/",
					collapsable: false,
					sidebarDepth: 1,
					children: ["", "react", "vue"],
				},
			],
			"/web/back/": [
				{
					title: "Group 1",
					path: "/web/back/",
					collapsable: false,
					sidebarDepth: 1,
					children: [""],
				},
			],
			"/": [
				"" /* / */,
				"contact" /* /contact.html */,
				"about" /* /about.html */,
			],
		},
	},
	// markdown: {
	// 	config: (md) => {
	// 		md.use(require("markdown-it-katex"));
	// 	},
	// },

	plugins: [
		[
			"vuepress-plugin-mathjax",
			{
				target: "svg",
				macros: {
					"*": "\\times",
				},
				showError: true,
			},
		],
	],
};
