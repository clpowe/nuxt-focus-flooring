<script setup lang="ts">
	useHead({
		link: [
			{
				rel: 'preload',
				href: 'https://iz5hjhzjql5fyivm.public.blob.vercel-storage.com/Focus%20Flooring_%20Our%20Story.mp4',
				as: 'video'
			}
		]
	})

	const whatWeDo = [
		{
			id: 1,
			component: 'h3',
			svg: 'carpet',
			image: '/carpet.svg',
			title: 'Carpet Flooring',
			content:
				'We will help you specify, procure and install carpet for any commercial application.'
		},
		{
			id: 2,
			component: 'h3',
			svg: 'wood',
			image: '/wood.svg',
			title: 'Wood Flooring',
			content:
				'With countless solid and engineered wood flooring options available today, we’ll guide you to the best hardwood for your budget, design and facility.'
		},
		{
			id: 3,
			component: 'h3',
			svg: 'ceramic',
			image: '/ceramic.svg',
			title: 'Ceramic and Stone tile',
			content:
				'We have completed installations of nearly every ceramic and stone  tile including detailed patterns, mosaics and large format tile.'
		},
		{
			id: 4,
			component: 'h3',
			svg: 'concrete',
			image: '/concrete.svg',
			title: 'Concrete Surfacing',
			content:
				'From concrete polish to resinous flooring or terrazzo, concrete surfacing may be the perfect solution for your facility.'
		},
		{
			id: 5,
			component: 'h3',
			svg: 'lvt',
			image: '/lvt.svg',
			title: 'LVT Flooring',
			content:
				'Luxury vinyl tile (LVT) is one of the most popular selections for a  range of commercial applications with beautiful design and patterns available to meet the performance demands of your building.'
		},
		{
			id: 6,
			component: 'h3',
			svg: 'resilient',
			image: '/resilient.svg',
			title: 'Resilient Flooring',
			content:
				'With innovative, new materials and constructions emerging in the market, resilient flooring can help you achieve a one-of-a-kind look  that lasts. Heat weld sheet vinyl, athletic. flooring, and more.'
		},
		{
			id: 7,
			component: 'h3',
			svg: 'laminate',
			image: '/laminate.svg',
			title: 'Commercial Grade Laminate Flooring',
			content:
				'Versatile, cost-effective materials in a variety of colors and installation patterns to meet nearly any design vision within touch budget constraints.'
		},
		{
			id: 8,
			component: 'h3',
			svg: 'accessories',
			image: '/IconSix.svg',
			title: 'Flooring Accessories',
			content:
				'From transitions to stair treads, flooring accessories are specialty products that will tie together your design and product needs.'
		}
	]

	const vid = ref<HTMLVideoElement | null>(null)

	import Poster from '../assets/poster.webp'

	function playPause() {
		if (!vid.value) return
		if (vid.value.paused) {
			vid.value.play()
		} else {
			vid.value.pause()
		}
	}
</script>

<template>
	<header>
		<HomeHero>
			<template v-slot:header>
				<span>Eliminating your risk</span> through our process
			</template>
			<template v-slot:actions>
				<div class="actions justify-center flex flex-col sm:flex-row">
					<UButton
						to="/contact/general-contact"
						class="text-midnight-950"
						color="focusyellow"
						>contact us</UButton
					>
					<UButton
						to="/our-process"
						class="hover:text-midnight-950"
						variant="outline"
						color="focusyellow"
						>Learn more</UButton
					>
				</div>
			</template>
		</HomeHero>
	</header>
	<main id="main" class="main">
		<div class="max-w-4xl -mt-24 mx-auto z-40 relative" @click="playPause">
			<video
				width="720"
				height="480"
				poster="/assets/poster.webp"
				controlslist="nofullscreen nodownload"
				class="relative"
				ref="vid"
				preload="none"
			>
				<source
					src="https://iz5hjhzjql5fyivm.public.blob.vercel-storage.com/Focus%20Flooring_%20Our%20Story.mp4"
					type="video/webm"
				/>
				<source
					src="https://iz5hjhzjql5fyivm.public.blob.vercel-storage.com/Focus%20Flooring_%20Our%20Story.mp4"
					type="video/mp4"
				/>

				Your browser does not support the video tag.
			</video>
		</div>

		<div
			class="max-w-[85rem] px-4 pt-20 pb-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
		>
			<div class="md:grid md:grid-cols-2 md:items-center md:gap-12">
				<div>
					<nuxt-img
						class=""
						src="/WhoWeAre.webp"
						format="webp"
						alt="Man instaliing flooring wearing a yellow shirt"
					/>
				</div>
				<!-- End Col -->

				<div class="mt-5 sm:mt-10 lg:mt-0">
					<div class="space-y-6 sm:space-y-8">
						<!-- Title -->
						<div class="space-y-2 md:space-y-4">
							<h2
								class="font-bold uppercase text-4xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-4"
							>
								<span
									class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
									>Who</span
								>
								We Are
							</h2>
							<div class="space-y-4">
								<p>
									At Focus Flooring, we offer advanced solutions in commercial
									flooring and wall tile.
								</p>
								<p>
									We have disciplined our flooring processes to focus on the
									details that greatly impact our clients and deliver a high
									quality service they can count on.
								</p>
								<p>
									Focus Flooring is a minority-owned firm based out of Tampa,
									Florida with a
									<strong
										>guarantee to eliminate your risk through our internal
										processes.</strong
									>
								</p>
							</div>
						</div>
						<!-- End Title -->
					</div>
				</div>
				<!-- End Col -->
			</div>
		</div>

		<div
			class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid-bg"
		>
			<!-- Blockquote -->
			<div class="lg:mx-auto lg:w-3/5">
				<h2
					class="font-bold uppercase text-4xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-4"
				>
					<span
						class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
						>Our</span
					>
					History
				</h2>

				<div class="mt-6 lg:mt-10 text-center">
					<p>
						The flooring division begins to outgrow being a “division” and
						begins to require a space of its own. The Envision team discovered
						that though both the construction management division and flooring
						division of the business are both client, systems, and process
						driven, the flooring business at this scale required very different
						systems, processes and team members than the construction management
						business.
					</p>
					<p class="pb-4">
						Learn more about our journey from Envision Flooring to Focus
						Flooring
					</p>
					<UButton
						to="/our-history"
						class="text-midnight-950"
						color="focusyellow"
						>Our History</UButton
					>
				</div>
			</div>
			<!-- End Blockquote -->
		</div>

		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<h2
				class="font-bold uppercase text-4xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-4"
			>
				<span
					class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
					>What</span
				>
				We do
			</h2>
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
				<!-- Icon Block -->
				<div v-for="item in whatWeDo" :key="item.id" class="">
					<svg-icon :name="item.svg" class="h-14" />

					<div
						class="bg-gradient-to-r from-[var(--focus-yellow)] via-[var(--focus-yellow-light)] to-white/0 h-0.5 mt-6"
					>
						<div class="bg-[var(--midnight)] w-9 h-0.5"></div>
					</div>
					<div class="mt-5">
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">
							{{ item.title }}
						</h3>
						<p class="mt-1 text-gray-600 dark:text-gray-400">
							{{ item.content }}
						</p>
					</div>
				</div>
				<!-- End Icon Block -->
			</div>
		</div>

		<section class="max-w-[85rem] mx-auto pt-14">
			<h2 class="font-bold px-4 uppercase text-4xl lg:text-4xl mb-10">
				Sectores we
				<span
					class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
					>serve</span
				>
			</h2>
			<ExpanderMenuCopy />
		</section>

		<section class="max-w-[85rem] px-4 py-14 mx-auto bg-[var(--midnight)]">
			<HowWe />
		</section>
	</main>
</template>

<style scoped>
	.grid-bg {
		background-image: url('/grid2.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: bottom;
	}

	.actions {
		gap: 1rem;
	}

	video {
		width: 100%;
	}

	.pic {
		position: relative;
		container-type: inline-size;
	}

	.pic::after {
		content: '';
		height: 100%;
		width: 100cqw;
		position: absolute;
		background-color: var(--focus-yellow);
		left: 5%;
		bottom: -5%;
		z-index: -1;
	}

	/* p {
		animation: fade linear both;
		animation-timeline: view();
		animation-range: entry 50% cover 50%;
	} */

	@keyframes fade {
		from {
			opacity: 0;
			transform: translateY(150%);
		}
		to {
			opacity: 1;
			transform: translateY(0%);
		}
	}
</style>
