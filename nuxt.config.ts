// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'

export default defineNuxtConfig({
	telemetry: false,
	ssr: false,
	app: {
		head: {
			title: 'Musique',
			htmlAttrs: { lang: 'fr' },
		},
	},
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
	modules: [
		'@nuxt/image-edge',
		['@nuxtjs/google-fonts', {
			families: {
				Lato: { wght: [300, 400, 700], ital: [300, 400, 700] },
			},
		}],
		'nuxt-purgecss',
		// '@nuxtjs/robots',
	],
})
