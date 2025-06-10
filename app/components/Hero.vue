<script setup>
defineProps({
	title: String,
	img: {
		type: String,
		default: '/aviation.jpeg'
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

		<NuxtImg provider="imagekit" fit="exact" quality="80" aria-hidden="true" format="webp" height="255"
			sizes="100vw sm:400px md:600px lg:800px xl:1000px" :src="img"
			class="w-full absolute h-full object-cover image" placeholder />
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
