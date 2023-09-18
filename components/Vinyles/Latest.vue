<template>
	<div class="card">
		<h4 class="card-title">Derniers vinyles</h4>
		<div class="card-content">
			<div class="row">
				<div v-for="(vinyle, id) of vinyles" :key="id" class="col col-3">
					<vinyles-display-single :vinyle="vinyle" />
				</div>
			</div>
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
	() => queryContent<MyCustomParsedContent>('vinyles').sort({ date: -1 }).limit(8).find()
)

</script>

<style scoped>
.row + .row {
	margin-top: 1rem;
}
</style>
