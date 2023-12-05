/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				brand: {
					main: "#121829",
					"primary/900": "#251E62",
					"primary/800": "#0C4265",
					"grey/50": "#EBEEF5",
					"grey/100": "#C3C8D4",
					"grey/200": "#A8AEBF",
					"grey/300": "#8E95A9",
					"grey/400": "#767E94",
					"grey/800": "#20283E",
					"grey/900": "#111827",
					"rose/700": "#BE123C",
					"rose/800": "#9F1239",
					"warning/500": "#FFAD49",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
