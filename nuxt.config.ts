// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

export default defineNuxtConfig({
	telemetry: false,
	css: [
		'reset-css/reset.css',
		'@/assets/app.css',
	],
	vite: {
		plugins: [
			eslintPlugin({ cache: true, fix: true }),
			StylelintPlugin({ fix: true }),
		],
	},
	postcss: {
		plugins: {
			'postcss-import': {},
			'postcss-nested': {},
		},
	},
})
