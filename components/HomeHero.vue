<script setup>
	defineProps({
		title: String
	})

	const blob = ref()
	const { x, y, sourceType } = useMouse()

	watchEffect(() => {
		if (blob.value) {
			blob.value.animate(
				{
					top: `${y.value}px`,
					left: `${x.value}px`
				},
				{ duration: 3000, fill: 'forwards' }
			)
		}
	})
</script>

<template>
	<div class="hero bg-[var(--midnight)] relative overflow-hidden">
		<div class="blur hidden sm:block"></div>
		<div class="blob hidden sm:block" ref="blob"></div>
		<div class="hero-content text-center z-10">
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
</template>

<style scoped>
	.blob {
		background: linear-gradient(
			to right,
			rgba(23, 29, 26, 1) 0%,
			rgba(204, 231, 11, 1) 100%
		);
		aspect-ratio: 1;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		animation: rotate 20s infinite;
	}

	@keyframes rotate {
		from {
			rotate: 0deg;
		}
		50% {
			scale: 1 1.5;
		}
		to {
			rotate: 360deg;
		}
	}

	.blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 2;
		backdrop-filter: blur(200px);
	}
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
