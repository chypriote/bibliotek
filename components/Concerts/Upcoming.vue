<template>
	<div class="card">
		<h4 class="card-title">Concerts à venir</h4>
		<div class="card-content">
			<template v-for="(concert, id) of concerts" :key="id">
				<concerts-display-single :concert="concert" />
			</template>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Concert } from '~/types/Concert'

interface MyCustomParsedContent extends ParsedContent {
	data: Concert[]
}
const { data: concerts } = await useAsyncData(
	'upcoming-concerts',
	() => queryContent<MyCustomParsedContent>('concerts')
		.where({ date: { $gt: (new Date()).toISOString().substring(0, 10) } })
		.limit(5)
		.find()
)

</script>

<style scoped>
.row + .row {
	margin-top: 1rem;
}
</style>
