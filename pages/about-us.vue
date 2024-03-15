<script setup>
	useHead({
		title: 'Focus Flooring - About us'
	})

	const coreValues = [
		{
			id: 1,
			component: 'h3',
			title: 'Be the solution',
			content:
				'Our success and fulfillment depends on our willingness to always seek to help and provide solutions.',
			list: [
				'Help first',
				'We are the easy button',
				'We pride ourselves on being the solution',
				'Clarity Breeds Confidence'
			]
		},
		{
			id: 2,
			component: 'h3',
			title: 'Find a better way',
			content: 'Impossible is for the unwilling.',
			list: [
				'Adapt to change',
				'Impossible is never a fact, it’s a belief',
				'“I get to” vs. “I have to” attitude',
				'Don’t make excuses, make adjustments'
			]
		},

		{
			id: 3,
			component: 'h3',
			title: 'Be humbly confident',
			content: 'Hold your head high while never looking down on others.',
			list: [
				'Humility is the surest sign of strength',
				'Coachable',
				'Be empathetic towards others',
				'Ability without humility is a liability'
			]
		},
		{
			id: 4,
			component: 'h3',
			title: 'It’s bigger than you',
			content:
				'Your gifts, talents and resources aren’t only for you or about you. Without believing in something bigger than yourself you’ll only seek to serve yourself.',
			list: [
				'Always seek to give the advantage',
				'Do it as if it were your own',
				'Great leaders have a servants heart'
			]
		},
		{
			id: 5,
			component: 'h3',
			title: 'Be the light',
			content:
				'Being positive should never be based on circumstances but based on an internal belief.',
			list: ['Optimism', 'Always assume positive intent']
		}
	]
	const threeUniques = [
		{
			id: 1,
			component: 'h3',
			title: 'Minority Owned',
			content:
				'Focus Flooring is 100% minority-owned with the ability to compete on large scale projects at the prime level.'
		},
		{
			id: 2,
			component: 'h3',
			title: 'CM Approach',
			content:
				'Our approach to flooring will be seen from the conception of your project to completion, because we approach it with a CM mindset. This approach ultimately ensures we are focused on the things that matters most to our clients from the very beginning.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'Versatile',
			content:
				'Our ability to specialize in all aspects of commercial flooring, with the ability to scale up or scale down based on the project need allows our team to be versatile when it comes to meeting your flooring needs on any project.'
		}
	]
</script>

<template>
	<div>
		<Hero>About <span>Us</span></Hero>

		<main id="main" class="main max-w-4xl mx-auto py-8">
			<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				<!-- Grid -->
				<div class="grid md:grid-cols-2 gap-12">
					<div class="">
						<h2
							class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"
						>
							Three Uniques
						</h2>
						<p class="mt-3 text-gray-800 dark:text-gray-400">
							Focus Flooring, a minority-owned enterprise, excels in competing
							on expansive projects and prioritizes client needs through a
							comprehensive CM approach from project inception to conclusion.
							Specializing in commercial flooring, our adaptable team adjusts to
							project demands seamlessly.
						</p>
					</div>
					<!-- End Col -->

					<div class="space-y-6 lg:space-y-10">
						<!-- Icon Block -->
						<div class="flex">
							<div class="ms-5 sm:ms-8">
								<h3
									class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
								>
									Minority Owned
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Focus Flooring is 100% minority-owned with the ability to
									compete on large scale projects at the prime level.
								</p>
							</div>
						</div>
						<!-- End Icon Block -->

						<!-- Icon Block -->
						<div class="flex">
							<!-- Icon -->

							<div class="ms-5 sm:ms-8">
								<h3
									class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
								>
									CM Approach
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Our approach to flooring will be seen from the conception of
									your project to completion, because we approach it with a CM
									mindset. This approach ultimately ensures we are focused on
									the things that matters most to our clients from the very
									beginning.
								</p>
							</div>
						</div>
						<!-- End Icon Block -->

						<!-- Icon Block -->
						<div class="flex">
							<!-- Icon -->

							<div class="ms-5 sm:ms-8">
								<h3
									class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
								>
									Versatile
								</h3>
								<p class="mt-1 text-gray-600 dark:text-gray-400">
									Our ability to specialize in all aspects of commercial
									flooring, with the ability to scale up or scale down based on
									the project need allows our team to be versatile when it comes
									to meeting your flooring needs on any project.
								</p>
							</div>
						</div>
						<!-- End Icon Block -->
					</div>
					<!-- End Col -->
				</div>
				<!-- End Grid -->
			</div>
			<!-- End Icon Blocks -->

			<!-- <article id="three-uniques" class="container">
				<h2 class="margin-bottom">Three Uniques</h2>
				<div class="mx-auto parent">
					<Card
						v-for="item in threeUniques"
						:key="item.id"
						:title="item.title"
						:component="item.component"
					>
						<p>{{ item.content }}</p>
					</Card>
				</div>
			</article> -->

			<!-- Testimonials -->
			<div
				id="our-purpose"
				class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
			>
				<!-- Blockquote -->
				<blockquote class="lg:mx-auto lg:w-3/5">
					<h2 class="text-2xl font-bold md:text-3xl md:leading-tight">
						Our Purpose
					</h2>

					<div class="mt-6 lg:mt-10 text-center">
						<p
							class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800"
						>
							<svg
								class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
								width="16"
								height="13"
								viewBox="0 0 16 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
									fill="currentColor"
								/>
							</svg>
							<span
								class="relative z-10 italic text-gray-800 dark:text-gray-200"
								>At Focus Flooring, we believe our purpose is to illuminate the
								industry with partnership, positivity and precision.</span
							>
						</p>
					</div>
				</blockquote>
				<!-- End Blockquote -->
			</div>
			<!-- End Testimonials -->

			<!-- <article id="our-purpose" class="container">
				<h2 class="mb-4">Our Purpose</h2>
				<p>
					At Focus Flooring, we believe our purpose is to illuminate the
					industry with partnership, positivity and precision.
				</p>
			</article> -->

			<!-- FAQ -->
			<div
				id="core-values"
				class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
			>
				<!-- Title -->
				<div class="max-w-2xl mb-10 lg:mb-14">
					<h2
						class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200"
					>
						Core Values
					</h2>
				</div>
				<!-- End Title -->

				<div class="max-w-5xl mx-auto">
					<!-- Grid -->
					<div class="grid sm:grid-cols-2 gap-6 md:gap-12">
						<div v-for="item in coreValues" :key="item.id">
							<h3
								class="text-lg font-semibold text-gray-800 dark:text-gray-200"
							>
								{{ item.title }}
							</h3>
							<p class="mt-1 text-gray-600 dark:text-gray-400">
								{{ item.content }}
							</p>
							<ul>
								<li class="flex space-x-3" v-for="i in item.list">
									<!-- Solid Check -->
									<span
										class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-zinc-50 text-zinc-600 dark:bg-blue-800/30 dark:text-blue-500"
									>
										<svg
											class="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<!-- End Solid Check -->

									<span class="text-xs sm:text-xs text-gray-500">
										{{ i }}
									</span>
								</li>
							</ul>
						</div>
						<!-- End Col -->
					</div>
					<!-- End Grid -->
				</div>
			</div>

			<!-- <article id="core-values" class="container">
				<h2 class="margin-bottom">Core Values</h2>

				<p class="mb-8">
					Our core values are the framework in which we evaluate our choices and
					make all decisions. When our core values are in harmony with our daily
					actions and behaviors - that is where true success lies.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:grid-cols-3">
					<div v-for="item in coreValues" :key="item.id" class="carousel-item">
						<div>
							<h3>{{ item.title }}</h3>
							<p class="mt-2">{{ item.content }}</p>
						</div>
					</div>
				</div>
			</article> -->
		</main>
	</div>
</template>

<style scoped>
	ul {
		list-style-position: inside;
		counter-reset: li;
	}

	li {
		display: grid;
		grid-template-columns: auto 1fr;

		gap: var(--s-5);
		align-items: baseline;

		counter-increment: li;
	}

	li::before {
		font-size: var(--s2);
	}

	.parent {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
	}
</style>
