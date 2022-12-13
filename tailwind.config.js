/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: "Travel",
		screens: {
			sm: "390px",
			md: "720px",
			lg: "1280px",
			xl: "1920px",
			"4k": "3840px",
		},
		fontSize: {
			h1: "128px",
			h2: "24px",
			h3: "20px",
			h4: "16px",
			h5: "14px",
			p: "16px",
		},

		extend: {
			colors: {
				mainbg: "#191D29",
				limeGreen: "#9DFE00",
				cyanBlue: "#14D9E5",
			},
		},
	},
	plugins: [],
};
