<script setup>
	defineProps({
		title: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true,
			default: '/Heron_Tampa.jpg'
		},
		description: {
			type: String,
			required: true
		}
	})
</script>

<template>
	<article class="sectore">
		<h3>{{ title }}</h3>
		<p>
			{{ description }}
		</p>
		<nuxt-link class="btn">See More</nuxt-link>
		<div class="cover"></div>
		<nuxt-img :src="image" alt="" fit="fit" />
	</article>
</template>

<style scoped>
	article {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		padding: var(--s1);
		min-height: 100px;
		flex: 1;
	}

	.cover {
		background-color: var(--midnight);
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	img {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		z-index: 1;
		mix-blend-mode: luminosity;
		opacity: 0.2;
	}

	h3 {
		color: var(--focus-white);
		writing-mode: horizontal-tb;
		text-orientation: mixed;
		rotate: 0deg;
		z-index: 2;
		position: relative;
	}

	@media (min-width: 670px) {
		h3 {
			color: var(--focus-white);
			writing-mode: vertical-rl;
			text-orientation: mixed;
			rotate: 180deg;
		}
	}
</style>
