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
		<img :src="image" alt="" />
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
			width: 400px;
		}
	}
</style>
