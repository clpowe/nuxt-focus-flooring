<template>
	<div class="cluster">
		<slot />
	</div>
</template>

<style>
	.cluster {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space, 1rem);
		justify-content: flex-start;
		align-items: center;
	}
</style>
