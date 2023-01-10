<template>
	<Stack size="--s-1">
		<Framer :width="1" height="1">
			<img :src="image" role="presentation" />
		</Framer>
		<component :is="component">{{ title }}</component>
		<slot />
	</Stack>
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
