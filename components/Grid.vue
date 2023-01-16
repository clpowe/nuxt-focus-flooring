<template>
	<div class="grid">
		<slot />
	</div>
</template>

<style scoped>
	.grid {
		display: grid;
		grid-gap: 1rem;
	}

	@supports (width: min(30ch, 100%)) {
		.grid {
			grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));
		}
	}
</style>
