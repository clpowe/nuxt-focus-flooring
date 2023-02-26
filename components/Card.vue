<template>
	<Box padding="" :class="{ 'border-2': border }">
		<Framer :width="1" :height="1">
			<svg-icon :name="svg" v-if="svg" :class="style" />
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
		},
		style: {
			type: String,
			default: 'h-28 mb-2'
		}
	})
</script>

<style scoped>
	img {
		height: 4rem;
	}
</style>
