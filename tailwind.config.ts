import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				black: '#020617',
				light: '#f8fafc',
				dark: '#0f172a',
				'gray-dark': '#020617',
				gray: '#8492a6',
				'gray-light': '#d3dce6',
				blue: '#1861bf',
				orange: '#dd584c',
				green: '#0baa41',
				purple: '#7e5bef',
				pink: '#ff49db',
				yellow: '#ffc82c',
			},
		},
	},
	plugins: [],
};
export default config;
