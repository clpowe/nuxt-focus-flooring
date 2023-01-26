<script setup>
	defineProps({
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	})
</script>

<template>
	<article>
		<h3>{{ title }}</h3>
		<p>
			{{ description }}
		</p>
	</article>
</template>

<style scoped>
	article {
		width: 100%;
	}
</style>
