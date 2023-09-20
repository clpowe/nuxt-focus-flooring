<script setup>
	defineProps({
		title: String
	})
</script>

<template>
	<div class="hero min-h-screenbg-[var(--midnight)]">
		<div class="hero-content text-center">
			<div class="max-w-[60ch] grid content-center text-center items-center">
				<h1 class="text-5xl font-bold max-w-[60ch] mb-4">
					<slot name="header" />
				</h1>
				<p class="text-[var(--focus-white)] text-center">
					Cost Certainty. Real Time Schedule Management. “Zero Punch”
					Philosophy.
				</p>
				<p class="text-white z-10 mb-4 text-center self-center">
					Advanced Solutions in Commercial Flooring & Wall Tile
				</p>
				<slot name="actions" />
			</div>
		</div>
	</div>

	<!-- <div class="">
		<div class="hero container grid grid-cols-1 md:grid-cols-3 -row-start-1">
			<div class="content col-start-1 col-span-1 md:col-span-2">
				<div class="space-y-4 w-full">
					<h1>
						
					</h1>
					
				</div>
				<div class="dot"></div>
			</div>
			<div
				class="w-full h-full relative hidden md:grid place-content-center col-start-1 -row-start-1 p-4 text-xl"
			> -->
	<!-- <nuxt-img
					provider="imagekit"
					src="HomeHero.jpg"
					fit="cover"
					format="webp"
					class="absolute object-cover h-full w-full top-0 h-image"
				/> -->
	<!-- </div>
		</div>
	</div> -->
</template>

<style scoped>
	.hero {
		position: relative;
		height: 700px;
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
