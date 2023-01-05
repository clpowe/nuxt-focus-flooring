<script setup>
	const props = defineProps({
		size: {
			type: String,
			required: true
		}
	})

	const cssSize = computed(() => {
		return `var(--space, var(${props.size}))`
	})
</script>

<template>
	<div class="stack">
		<slot />
	</div>
</template>

<style>
	[class^='stack'] > * {
		margin-block: 0;
	}

	.stack > * + * {
		margin-block-start: v-bind(cssSize);
	}
</style>
