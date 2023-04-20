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
			provider="imagekit"
			:src="`/team_members/${image}`"
			alt=""
			fit="cover"
			quality="90"
			height="300"
			width="300"
			loading="lazy"
			format="webp"
		/>
		<p>{{ firstName }} {{ lastName }}</p>
		<p>{{ title }}</p>
	</div>
</template>

<style>
	.teamMember {
		width: 100;
	}

	@container (min-width: 400px) {
		.teamMember {
			width: 45%;
		}
	}

	@container (min-width: 600px) {
		.teamMember {
			width: 29%;
		}
	}
</style>
