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
		},
		route: {
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
		<nuxt-link :to="route" class="btn btn-yellow">See More</nuxt-link>
		<div class="cover"></div>
		<nuxt-img
			:src="image"
			alt=""
			fit="fit"
			format="webp"
			quality="80"
			loading="lazy"
		/>
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
		overflow: hidden;
		overflow-wrap: break-word;
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
		position: absolute;
		top: 1rem;
		width: max-content;

		text-orientation: mixed;
		rotate: 0deg;

		z-index: 2;
		hyphens: auto;
		transform-origin: top left;
		overflow-wrap: break-word;
	}

	@media (min-width: 800px) {
		h3 {
			color: var(--focus-white);
			top: auto;
			bottom: 1rem;
			text-orientation: mixed;
			rotate: -90deg;
			transform-origin: 0 0;
		}
	}

	.btn {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		opacity: 0;
	}
</style>
