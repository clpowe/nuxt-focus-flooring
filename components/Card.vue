<template>
	<Box padding="" :class="{ 'border-2': border }">
		<Framer :width="1" :height="1">
			<svg-icon :name="svg" v-if="svg" class="h-28 mb-4" />
			<img :src="image" v-if="img" role="presentation" />
		</Framer>
		<component :is="component" class="title">{{ title }}</component>
		<slot />
	</Box>
</template>

<script setup>
	defineProps({
		image: {
			type: String
		},
		svg: {
			type: String
		},
		title: {
			type: String
		},
		component: {
			type: String
		},
		border: {
			type: Boolean,
			default: false
		}
	})
</script>

<style scoped>
	img {
		height: 4rem;
	}
</style>
