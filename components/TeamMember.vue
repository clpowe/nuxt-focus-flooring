<script setup lang="ts">
	defineProps({
		id: Number,
		image: String,
		firstName: String,
		lastName: String,
		title: String,
		bio: String,
		group: String
	})
</script>

<template>
	<div class="teamMember">
		<nuxt-img
			:src="image"
			alt=""
			fit="cover"
			height="400"
			sizes="sm:100vw md:50vw lg:400px"
			loading="lazy"
		/>
		<p>{{ firstName }}</p>
		<p>{{ lastName }}</p>
		<p>{{ title }}</p>
	</div>
</template>

<style>
	.teamMember {
		width: auto;
	}

	@container (min-width: 600px) {
		.teamMember {
			width: 300px;
		}
	}
</style>
