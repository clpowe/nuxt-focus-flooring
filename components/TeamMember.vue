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
	<div class="">
		<img :src="image" alt="" />
		<p>{{ firstName }}</p>
		<p>{{ lastName }}</p>
		<p>{{ title }}</p>
	</div>
</template>

<style></style>
