<template>
	<div class="card">
		<h4 class="card-title">Derniers vinyles</h4>
		<div class="card-content">
			<template v-for="(vinyle, id) of vinyles" :key="id">
				<vinyles-display-single :vinyle="vinyle" />
			</template>
		</div>
		<div class="card-actions">
			<nuxt-link to="vinyles/collection">Liste</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Vinyle } from '~/types/Vinyle'

interface MyCustomParsedContent extends ParsedContent {
	data: Vinyle[]
}
const { data: vinyles } = await useAsyncData(
	'latest-vinyles',
	() => queryContent<MyCustomParsedContent>('vinyles').sort({ date: -1 }).limit(5).find()
)

</script>

<style scoped>
.row + .row {
	margin-top: 1rem;
}
</style>
