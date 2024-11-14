<template>
	<div class="with-sidebar">
		<slot />
	</div>
</template>

<style scoped>
	.with-sidebar {
		display: flex;
		flex-direction: column;
		gap: var(--s1);
	}

	@media (min-width: 768px) {
		.with-sidebar {
			display: grid;
			grid-template-columns: minmax(100px, 25%) 1fr;
			gap: var(--s1);
		}
	}
</style>
