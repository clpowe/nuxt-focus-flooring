<template>
	<div class="sidebyside">
		<slot />
	</div>
</template>

<style scoped>
	.sidebyside {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(30ch, 100%), 1fr));
		align-items: center;
		gap: var(--s1);
	}

	@media (max-width: 800px) {
		.sidebyside {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>
