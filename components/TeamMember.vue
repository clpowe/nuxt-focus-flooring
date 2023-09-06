<script setup lang="ts">
	defineProps({
		id: Number,
		image: String,
		firstName: String,
		lastName: String,
		title: String,
		bio: String,
		group: String,
		spaner: Boolean
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
			height="350"
			width="300"
			loading="lazy"
			format="webp"
			class="object-cover"
		/>
		<p class="font-bold text-lg mt-2">{{ firstName }} {{ lastName }}</p>
		<p class="text-sm">{{ title }}</p>
	</div>
</template>

<style>
	.full {
		grid-column: 1/-1;
	}
	/* .teamMember {
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
	} */
</style>
