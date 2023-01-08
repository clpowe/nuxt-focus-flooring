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
			type: String
		},
		title: {
			type: String
		},
		component: {
			type: String
		}
	})
</script>
