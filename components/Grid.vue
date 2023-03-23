<template>
	<div
		class="my-grid grid grid-cols-1 sm:grid-cols-2 gap-16 lg:grid-cols-3 xl:grid-cols-4"
	>
		<slot />
	</div>
</template>

<style scoped>
	.my-grid {
		container-type: inline-size;
	}
</style>
