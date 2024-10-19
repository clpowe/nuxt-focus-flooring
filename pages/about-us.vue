<script setup>
	useServerHead({
		title: 'Focus Flooring | About us',
		link: [
			{
				rel: 'canonical',
				href: 'https://focus-flooring.com/about-us'
			}
		]
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
	<Hero>About <span>Us</span></Hero>

	<UPage>
		<UPageBody id="main">
			<ULandingSection
				title="Three Uniques"
				description="Focus Flooring, a minority-owned enterprise, excels in competing
							on expansive projects and prioritizes client needs through a
							comprehensive CM approach from project inception to conclusion.
							Specializing in commercial flooring, our adaptable team adjusts to
							project demands seamlessly."
				align="left"
			>
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
								mindset. This approach ultimately ensures we are focused on the
								things that matters most to our clients from the very beginning.
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
								Our ability to specialize in all aspects of commercial flooring,
								with the ability to scale up or scale down based on the project
								need allows our team to be versatile when it comes to meeting
								your flooring needs on any project.
							</p>
						</div>
					</div>
					<!-- End Icon Block -->
				</div>
			</ULandingSection>

			<ULandingSection
				id="our-purpose"
				title="Our Purpose"
				description="At Focus Flooring, we believe our purpose is to illuminate the
								industry with partnership, positivity and precision."
			>
			</ULandingSection>

			<ULandingSection
				title="Core Values"
				description="Our core values are the framework in which we evaluate our choices and
					make all decisions. When our core values are in harmony with our daily
					actions and behaviors - that is where true success lies."
				align="center"
			>
				<ULandingGrid>
					<ULandingCard
						color="focusyellow"
						class="col-span-6 row-span-2"
						v-for="item in coreValues"
						:key="item.id"
					>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
							{{ item.title }}
						</h3>
						<q class="mt-1 text-gray-600 dark:text-gray-400">
							{{ item.content }}
						</q>
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
					</ULandingCard>
				</ULandingGrid>
			</ULandingSection>
		</UPageBody>
	</UPage>
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
