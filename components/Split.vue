<template>
	<article>
		<div class="wrapper">
			<div class="grid grid-cols-1 gap-8 space-y-12">
				<div class="picture">
					<slot name="image" />
				</div>
				<div class="content">
					<slot name="content" />
				</div>
			</div>
		</div>
	</article>
</template>

<style scoped>
	article {
		container-type: inline-size;
	}

	.picture {
		@apply relative h-64;
	}

	.wrapper {
		@apply mx-auto max-w-screen-xl px-4 py-8;
	}

	@container (min-width: 640px) {
		.wrapper {
			@apply py-12 px-6;
		}

		.picture {
			@apply h-80;
		}
	}

	@container (min-width: 1024px) {
		.wrapper {
			@apply grid-cols-2 gap-16 py-16 px-8;
		}

		.picture {
		}

		.content {
		}
	}
</style>
