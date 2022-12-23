// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		'reset-css/reset.css',
		'@/assets/app.css',
	],
	postcss: {
		plugins: {
			'postcss-import': {},
			'postcss-nested': {},
		}
	}
})
