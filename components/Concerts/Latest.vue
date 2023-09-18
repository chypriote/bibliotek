<template>
	<div class="card">
		<h4 class="card-title">Derniers concerts</h4>
		<div class="card-content">
			<div class="row">
				<div v-for="(concert, id) of concerts" :key="id" class="col col-3">
					<concerts-display-single :concert="concert" />
				</div>
			</div>
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
	'latest-concerts',
	() => queryContent<MyCustomParsedContent>('concerts')
		.where({ date: { $lt: (new Date()).toISOString().substring(0, 10) } })
		.sort({ date: -1 })
		.limit(5)
		.find()
)

</script>

<style scoped>
.row + .row {
	margin-top: 1rem;
}
</style>
