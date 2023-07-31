<template>
	<div class="row">
		<div class="col-12 col-md-6 col-lg-4">
			<artists-weekly />
		</div>
		<div class="col-12 col-md-6 col-lg-4">
			<vinyles-wishlist />
			<vinyles-latest />
		</div>
		<div class="col-12 col-md-6 col-lg-4">
			<nuxt-link to="concerts">Concerts</nuxt-link>
			<concerts-upcoming />
			<concerts-latest />
		</div>
	</div>
</template>

<script lang="ts" setup>
</script>
