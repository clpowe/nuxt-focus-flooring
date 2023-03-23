<template>
	<div class="sideby-container">
		<div class="sideby">
			<slot name="text" />
			<slot name="image" />
		</div>
	</div>
</template>

<style>
	.sideby-container {
		container-type: inline-size;
	}
	.sideby {
		display: flex;
		container-type: inline-size;
		gap: var(--s5);
		flex-direction: column;
	}

	@container (min-width: 700px) {
		.sideby {
			flex-direction: row;
		}
	}
</style>
