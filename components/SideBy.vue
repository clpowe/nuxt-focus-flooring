<template>
	<div class="sideby">
		<slot name="text" />
		<slot name="image" />
	</div>
</template>

<style>
	.sideby {
		display: flex;
		container-type: inline-size;
		gap: var(--s5);
	}

	.sideby > img {
		display: none;
	}

	@container (min-width: 700px) {
		.sideby > img {
			display: block;
		}
	}
</style>
