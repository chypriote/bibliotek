// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	telemetry: false,
	css: [
		'reset-css/reset.css',
		'@/assets/app.css',
	],
	modules: [
		['@nuxtjs/eslint-module', { cache: true, fix: true }],
		['@nuxtjs/stylelint-module', { fix: true }],
	],
	postcss: {
		plugins: {
			'postcss-import': {},
			'postcss-nested': {},
		},
	},
})
