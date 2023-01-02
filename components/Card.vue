<template>
	<div>
		<img :src="image" role="presentation" />
		<component :is="component">{{ title }}</component>
		<slot />
	</div>
</template>

<script setup>
	defineProps({
		image: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: true
		},
		component: {
			type: String,
			required: true
		}
	})
</script>
