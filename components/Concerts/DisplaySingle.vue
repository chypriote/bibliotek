<template>
	<div class="row concert">
		<div class="col col-4">
			<img
				v-if="concert.picture"
				:src="useAsset(concert.picture)"
				class="avatar"
				:alt="concert.title"
			/>
		</div>
		<div class="col-8">
			<div class="name">
				<p class="text-accent font-heavy text-bigger">{{ concert.title }}</p>
				<p class="text-muted">{{ concert.location }}</p>
			</div>
			<p class="text-small  text-muted">{{ format(new Date(concert.date), 'dd/MM/yyyy') }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns'
import { Concert } from '~/types/Concert'
function useAsset (path: string): string {
	const assets = import.meta.glob('~/assets/**/*', {
		eager: true,
		import: 'default',
	})
	// @ts-expect-error: wrong type info
	return assets['/assets/concerts/' + path]
}
defineProps<{
	concert: Concert
}>()
</script>

<style scoped>
.concert {
	margin-bottom: 1rem;
}
.avatar {
	background-color: #fff;
	box-shadow: 0 0 0 1px #1b1f2426;
	display: inline-block;
	flex-shrink: 0;
	line-height: 1;
	overflow: hidden;
	border-radius: 50%;
	height: 100%;
	object-fit: cover;
}
.name {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	margin-bottom: .5rem;
	line-height: 1.1;
}
</style>
