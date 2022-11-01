/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			lg: { max: "992px" },
			md: { max: "830px" },
			sm: { max: "480px" },
		},
		container: {
			padding: "20px",
			center: true,
		},
		extend: {
			colors: {
				lightgray: "#d1d1d1",
				lightwhite: "#f7f4f1",
			},
		},
	},
	plugins: [],
};
