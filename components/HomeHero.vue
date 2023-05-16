<script setup>
	defineProps({
		title: String
	})
</script>

<template>
	<div class="bg-[var(--midnight)]">
		<div class="hero container grid grid-cols-1 md:grid-cols-2 -row-start-1">
			<div class="content col-start-1">
				<div class="space-y-4">
					<h1>
						<slot name="header" />
					</h1>
					<p class="text-[var(--focus-white)] text-xl max-w-md">
						Cost Certainty | Real Time Schedule Management | “Zero Punch”
						Philosophy
					</p>
					<slot name="actions" />
				</div>
				<div class="dot"></div>
			</div>
			<div
				class="w-full h-full relative hidden md:grid place-content-center col-start-1 -row-start-1 p-4 text-xl"
			>
				<p class="text-white z-10 max-w-sm text-center">
					Advanced Solutions in Commercial Flooring & Wall Tile
				</p>
				<nuxt-img
					provider="imagekit"
					src="HomeHero.jpg"
					fit="cover"
					format="webp"
					class="absolute object-cover h-full w-full top-0 h-image"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.hero {
		position: relative;
		height: 800px;
		width: 100%;

		align-items: center;
		background-color: var(--midnight);
	}
	.h-image {
		filter: opacity(1) brightness(0.1) grayscale(1) saturate(0) contrast(0.8);
	}

	.content {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		align-items: baseline;
		justify-items: center;
		z-index: 2;
	}

	@media (max-width: 670px) {
		.hero {
			height: 100vh;
		}
	}
</style>
