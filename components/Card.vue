<template>
	<Framer :width="1" :height="1" v-if="image">
		<img :src="image" role="presentation" />
	</Framer>
	<component :is="component" class="title">{{ title }}</component>
	<slot />
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

<style scoped>
	img {
		height: 4rem;
	}

	.title {
		margin-top: var(--s-1);
		margin-bottom: var(--s-5);
	}
</style>
