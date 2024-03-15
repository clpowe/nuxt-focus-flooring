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
	<!-- Hero -->
	<div class="relative overflow-hidden bg-[var(--midnight)] hero">
		<!-- Gradients -->
		<!-- <div
			aria-hidden="true"
			class="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
		>
			<div
				class="bg-gradient-to-r from-[var(--midnight)] to-[var(--focus-yellow)] blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"
			></div>
			<div
				class="bg-gradient-to-tl from-[var(--midnight)] via-[var(--focus-yellow-light)] to-[var(--focus-yellow)] blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"
			></div>
		</div> -->
		<!-- End Gradients -->

		<div class="relative z-10 pb-28">
			<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
				<div class="max-w-2xl text-center mx-auto">
					<!-- Title -->
					<div class="mt-5">
						<h1
							class="block font-semibold text-white text-4xl md:text-5xl lg:text-6xl mx-auto"
						>
							<slot name="header" />
						</h1>
					</div>
					<!-- End Title -->

					<div class="mt-5 max-w-3xl">
						<p class="text-[var(--focus-white)] text-center">
							Cost Certainty. Real Time Schedule Management. “Zero Punch”
							Philosophy.
						</p>
						<p class="text-white z-10 mb-4 text-center self-center">
							Advanced Solutions in Commercial Flooring & Wall Tile
						</p>
					</div>

					<!-- Buttons -->
					<div class="mt-8 gap-3 flex justify-center">
						<slot name="actions" />
					</div>
					<!-- End Buttons -->
				</div>
			</div>
		</div>
	</div>
	<!-- End Hero -->
	<!-- <div class="hero bg-[var(--midnight)] relative overflow-hidden">
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
	</div> -->
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
		background-image: url('/grid.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: bottom;
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
</style>
