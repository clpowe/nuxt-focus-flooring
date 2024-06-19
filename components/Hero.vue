<script setup>
	defineProps({
		title: String,
		img: {
			type: String,
			default: 'aviation.jpeg'
		},
		hasDot: {
			type: Boolean,
			default: true
		}
	})
</script>

<template>
	<div class="my-hero relative overflow-hidden">
		<div class="container content">
			<h1>
				<slot />
			</h1>
			<div v-if="hasDot" class="dot"></div>
		</div>

		<NuxtImg
			fit="exact"
			quality="90"
			height="255"
			sizes="xs:100vw sm:400px md:600px lg:800px xl:1400px"
			:src="img"
			class="w-full absolute h-full object-cover image"
		/>
	</div>
</template>

<style scoped>
	.my-hero {
		position: relative;
		height: 30vh;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--midnight);
	}

	.image {
		filter: opacity(0.8) brightness(0.2) grayscale(1) saturate(0) contrast(0.8);
		mix-blend-mode: luminosity;
		width: 100%;
		margin: auto;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.content {
		display: flex;
		width: 100%;
		align-items: baseline;
		justify-items: center;
	}
</style>
