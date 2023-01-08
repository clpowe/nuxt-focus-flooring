<script setup></script>

<template>
	<div class="masonry">
		<slot />
	</div>
</template>

<style scoped>
	.masonary {
		column-count: 2;
	}
	/* 
	@supports (width: min(30ch, 100%)) {
		.masonary {
			grid-template-columns: repeat(auto-fit, minmax(min(29ch, 100%), 1fr));
		}
	} */
</style>
