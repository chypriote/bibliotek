<template>
	<div class="row">
		<div class="col col-4">
			<img
				v-if="vinyle.picture"
				:src="useAsset(vinyle.picture + '.jpg')"
				class="avatar"
				:alt="vinyle.album"
			/>
		</div>
		<div class="col col-8">
			<div class="vl-details">
				<p class="text-accent font-heavy text-bigger" :class="{'vl-name': vinyle.album.length > 20}">{{ vinyle.album }}</p>
				<p class="">{{ vinyle.artist }}</p>
			</div>
			<p v-if="vinyle.note" class="text-small text-muted">{{ vinyle.note }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Vinyle } from '~/types/Vinyle'

function useAsset (path: string): string {
	const assets = import.meta.glob('~/assets/**/*', {
		eager: true,
		import: 'default',
	})
	// @ts-expect-error: wrong type info
	return assets['/assets/vinyles/' + path]
}
defineProps<{
	vinyle: Vinyle
}>()
</script>

<style scoped>
.col {
	padding-right: calc(var(--grid-gutter-width) / 4);
	padding-left: calc(var(--grid-gutter-width) / 4);
}
.avatar {
	background-color: #fff;
	box-shadow: 0 0 0 1px #1b1f2426;
	display: inline-block;
	flex-shrink: 0;
	line-height: 1;
	overflow: hidden;
	height: 100%;
	object-fit: cover;
}
.vl-details {
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	line-height: 1.1;
	overflow: hidden;
}
.vl-name {
	overflow: hidden;
	white-space: nowrap;
	word-break: break-all;
	text-overflow: ellipsis;
	transition: 3.3s;
	transition-timing-function: linear;

	&:hover {
		margin-left: -300px;
	}
}
</style>
