<template>
	<div class="with-sidebar">
		<slot />
	</div>
</template>

<style scoped>
	.with-sidebar {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s1);
	}

	.with-sidebar > :first-child {
		flex-grow: 1;
		flex-basis: 20rem;
		max-inline-size: 20rem;
	}

	.with-sidebar > :last-child {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: 50%;
		align-items: flex-start;
	}
</style>
