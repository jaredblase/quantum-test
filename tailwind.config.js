import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: (theme) => ({
			center: true,
			padding: theme('spacing.8'),
		}),
		extend: {
			colors: {
				primary: '#040e19',
			},
			fontFamily: {
				sans: ['Acumin-SemiCondensed', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
}
