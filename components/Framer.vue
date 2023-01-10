<script setup>
	const props = defineProps({
		width: {
			type: Number,
			required: true
		},
		height: {
			type: Number,
			required: true
		}
	})
</script>

<template>
	<div class="framer">
		<slot />
	</div>
</template>

<style scoped>
	.frame {
		--n: v-bind(width);
		--d: v-bind(height);
		aspect-ratio: var(--n) / var(--d);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;

		& > img,
		& > video {
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
		}
	}
</style>
