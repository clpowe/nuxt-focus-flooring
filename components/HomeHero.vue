<script setup>
	defineProps({
		title: String
	})
</script>

<template>
	<div class="relative overflow-hidden bg-[var(--midnight)] hero">
		<div class="relative z-10 pb-28">
			<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
				<div class="max-w-2xl text-center mx-auto">
					<!-- Title -->
					<div class="mt-5">
						<h1
							class="block font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mx-auto"
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
            <div class="absolute inset-x-0 bottom-0 max-w-[100ch] m-auto">
				<svg
					id="uuid-ede1c65f-6d61-4296-8317-3ea68a441a71"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 1552 776"
				>
					<defs>
						<radialGradient
							id="uuid-58a7a71f-3bb0-4b76-a463-fa64ba41cc0f"
							cx="771.93"
							cy="497.02"
							fx="771.93"
							fy="915.91"
							r="652.24"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#cce70b" />
							<stop offset=".87" stop-color="#cce70b" stop-opacity="0" />
						</radialGradient>
					</defs>
					<path
						d="M1455,0H0v776h1552V0h-97ZM1456,1h95v95h-95V1ZM1359,1h95v95h-95V1ZM1454,678h-95v-95h95v95ZM1357,678h-95v-95h95v95ZM1260,678h-95v-95h95v95ZM1163,678h-95v-95h95v95ZM1066,678h-95v-95h95v95ZM969,678h-95v-95h95v95ZM872,678h-95v-95h95v95ZM775,678h-95v-95h95v95ZM678,678h-95v-95h95v95ZM581,678h-95v-95h95v95ZM484,678h-95v-95h95v95ZM387,678h-95v-95h95v95ZM290,678h-95v-95h95v95ZM193,678h-95v-95h95v95ZM98,98h95v95h-95v-95ZM195,98h95v95h-95v-95ZM292,98h95v95h-95v-95ZM389,98h95v95h-95v-95ZM486,98h95v95h-95v-95ZM583,98h95v95h-95v-95ZM680,98h95v95h-95v-95ZM777,98h95v95h-95v-95ZM874,98h95v95h-95v-95ZM971,98h95v95h-95v-95ZM1068,98h95v95h-95v-95ZM1165,98h95v95h-95v-95ZM1262,98h95v95h-95v-95ZM1357,486v95h-95v-95h95ZM1260,486v95h-95v-95h95ZM1163,486v95h-95v-95h95ZM1066,486v95h-95v-95h95ZM969,486v95h-95v-95h95ZM872,486v95h-95v-95h95ZM775,486v95h-95v-95h95ZM678,486v95h-95v-95h95ZM581,486v95h-95v-95h95ZM484,486v95h-95v-95h95ZM387,486v95h-95v-95h95ZM290,486v95h-95v-95h95ZM195,290v-95h95v95h-95ZM292,290v-95h95v95h-95ZM389,290v-95h95v95h-95ZM486,290v-95h95v95h-95ZM583,290v-95h95v95h-95ZM680,290v-95h95v95h-95ZM777,290v-95h95v95h-95ZM874,290v-95h95v95h-95ZM971,290v-95h95v95h-95ZM1068,290v-95h95v95h-95ZM1165,290v-95h95v95h-95ZM1260,389v95h-95v-95h95ZM1163,389v95h-95v-95h95ZM1066,389v95h-95v-95h95ZM969,389v95h-95v-95h95ZM872,389v95h-95v-95h95ZM775,389v95h-95v-95h95ZM678,389v95h-95v-95h95ZM581,389v95h-95v-95h95ZM484,389v95h-95v-95h95ZM387,389v95h-95v-95h95ZM292,387v-95h95v95h-95ZM389,387v-95h95v95h-95ZM486,387v-95h95v95h-95ZM583,387v-95h95v95h-95ZM680,387v-95h95v95h-95ZM777,387v-95h95v95h-95ZM874,387v-95h95v95h-95ZM971,387v-95h95v95h-95ZM1068,387v-95h95v95h-95ZM1260,387h-95v-95h95v95ZM195,292h95v95h-95v-95ZM195,389h95v95h-95v-95ZM1357,484h-95v-95h95v95ZM1357,387h-95v-95h95v95ZM1357,290h-95v-95h95v95ZM98,195h95v95h-95v-95ZM98,292h95v95h-95v-95ZM98,389h95v95h-95v-95ZM98,486h95v95h-95v-95ZM1454,581h-95v-95h95v95ZM1454,484h-95v-95h95v95ZM1454,387h-95v-95h95v95ZM1454,290h-95v-95h95v95ZM1454,193h-95v-95h95v95ZM1262,1h95v95h-95V1ZM1165,1h95v95h-95V1ZM1068,1h95v95h-95V1ZM971,1h95v95h-95V1ZM874,1h95v95h-95V1ZM777,1h95v95h-95V1ZM680,1h95v95h-95V1ZM583,1h95v95h-95V1ZM486,1h95v95h-95V1ZM389,1h95v95h-95V1ZM292,1h95v95h-95V1ZM195,1h95v95h-95V1ZM98,1h95v95h-95V1ZM1,1h95v95H1V1ZM96,98v95H1v-95h95ZM96,195v95H1v-95h95ZM96,292v95H1v-95h95ZM96,389v95H1v-95h95ZM96,486v95H1v-95h95ZM96,583v95H1v-95h95ZM96,775H1v-95h95v95ZM193,775h-95v-95h95v95ZM290,775h-95v-95h95v95ZM387,775h-95v-95h95v95ZM484,775h-95v-95h95v95ZM581,775h-95v-95h95v95ZM678,775h-95v-95h95v95ZM775,775h-95v-95h95v95ZM872,775h-95v-95h95v95ZM969,775h-95v-95h95v95ZM1066,775h-95v-95h95v95ZM1163,775h-95v-95h95v95ZM1260,775h-95v-95h95v95ZM1357,775h-95v-95h95v95ZM1454,775h-95v-95h95v95ZM1551,775h-95v-95h95v95ZM1456,678v-95h95v95h-95ZM1456,581v-95h95v95h-95ZM1456,484v-95h95v95h-95ZM1456,387v-95h95v95h-95ZM1456,290v-95h95v95h-95ZM1456,193v-95h95v95h-95Z"
						style="
							fill: url(#uuid-58a7a71f-3bb0-4b76-a463-fa64ba41cc0f);
							stroke-width: 0px;
						"
					/>
				</svg>
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
