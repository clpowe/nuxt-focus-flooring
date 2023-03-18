<template>
	<div class="content">
		<slot />
	</div>
</template>

<style scoped>
	.content {
		container-type: inline-size;
		display: flex;
		flex-wrap: wrap;
		gap: var(--s5);
	}
</style>
