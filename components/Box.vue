<script setup>
	const props = defineProps({
		padding: {
			type: String,
			required: true
		}
	})

	const cssPadding = computed(() => {
		return `var(--space, var(${props.padding}))`
	})
</script>

<template>
	<div class="box">
		<slot />
	</div>
</template>

<style scoped>
	.box {
		padding: v-bind(cssPadding);
	}

	.box * {
		color: inherit;
	}
</style>
