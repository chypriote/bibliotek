<template>
	<div class="row">
		<div class="col-4">
			<img
				src="https://erdorin.org/wp-content/uploads/2022/11/avantasia-a-paranormal-evening-with-the-moonflower-society.jpg"
				class="avatar"
				alt="Vinyle Name"
			/>
		</div>
		<div class="col-8">
			<div class="name">
				<p class="text-accent font-heavy text-bigger">Artiste name</p>
				<p class="text-muted">L'Olympia</p>
			</div>
			<p class="text-small  text-muted">1 mars 2023</p>
		</div>
	</div>
</template>

<script lang="ts">
</script>

<style scoped>
.avatar {
	background-color: #fff;
	box-shadow: 0 0 0 1px #1b1f2426;
	display: inline-block;
	flex-shrink: 0;
	line-height: 1;
	overflow: hidden;
	border-radius: 50%;
}
.name {
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	line-height: 1.1;
}
</style>
