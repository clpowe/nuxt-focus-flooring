<script setup>
	defineProps({
		title: String
	})
</script>

<template>
	<div class="hero">
		<div class="container content">
			<h1>
				<slot />
			</h1>
			<div class="dot"></div>
		</div>
		<div class="image"></div>
	</div>
</template>

<style scoped>
	.hero {
		position: relative;
		height: 30vh;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--midnight);
	}
	.image {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background-image: url('../aviation.jpeg');
		background-position: center center;
		filter: opacity(1) brightness(0.1) grayscale(1) saturate(0) contrast(0.8);
		mix-blend-mode: luminosity;
		height: 30vh;
		width: 100%;
		margin: auto;
		max-width: 2000px;
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
