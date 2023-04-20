<script setup>
	useHead({
		title: 'Focus Flooring - Culture and Comunity'
	})

	onMounted(() => {
		document
			.querySelectorAll('.horizontal-media-scroller')
			.forEach((scroller) =>
				rovingIndex({
					element: scroller,
					target: 'a'
				})
			)
	})

	const communityList = [
		'ACE Mentor',
		'American Heart Association',
		'AMIkids',
		'Amplify Clearwater (Clearwater Chamber of Commerce)',
		'Associated Builders and Contractors Florida ',
		'Gulf Coast',
		'Boys & Girls Club',
		'Bullard Family Foundation',
		'CDC of Tampa',
		'Embracing Legacy',
		'Florida Educational Facilities Planners’ Association',
		'Ford Next Generation Learning',
		'Greater Tampa Chamber of Commerce',
		'Habitat for Humanity',
		'Hernando Education Foundation',
		'HCC Foundation',
		'Hillsborough Alliance for Black Educators',
		'Hillsborough Education Foundation',
		'Leadership Tampa Bay',
		'Lutz Preparatory School',
		'Manatee Education Foundation',
		'Metropolitian Ministries',
		'Moffitt Cancer Center',
		'National Association of Black Women in Construction',
		'Pasco Education Foundation',
		'Pepin Academies',
		'PHSC Foundation',
		'Pinellas Education Foundation',
		'Revealing Truth Ministries',
		'Safety Harbor Chamber of Commerce',
		'Special Olympics',
		'Salvation Army',
		'Start Right Now',
		'Tampa Organization of Black Affairs (TOBA)',
		'Toys for Tots',
		'University of South Florida',
		'Upper Tampa Bay Chamber of Commerce'
	]

	const communityPictures = [
		{
			img: '/commitmentToComunity_01.jpg',
			alt: 'Working with our community'
		},
		{
			img: '/commitmentToComunity_02.jpg',
			alt: 'Working with our community'
		},
		{
			img: '/commitmentToComunity_03.jpg',
			alt: 'Working with our community'
		},
		{
			img: '/commitmentToComunity_04.jpg',
			alt: 'Working with our community'
		},
		{
			img: '/commitmentToComunity_05.jpg',
			alt: 'Working with our community'
		}
	]
</script>

<template>
	<div>
		<div class="">
			<Hero>Culture and <span>Community</span></Hero>

			<main id="main" class="main pt-16">
				<article class="container space-y-6">
					<div>
						<h2>Culture</h2>
						<p class="max-w-lg">
							<strong
								>Illuminate our industry with positivity, partnership, &
								precision</strong
							>
							it starts within. We look to be the light to our team so that
							together we can light up the industry.
						</p>
					</div>
					<SidebySide>
						<Card title="Collaborating with Colors" component="h3">
							<p class="max-w-lg">
								Our comprehensive pre-construction process will ensure you can
								count on our team to produce a quality proposal and
								pre-construction experience, whether it be at the budget phase
								or final phase of estimating.
							</p>
						</Card>

						<nuxt-img
							src="/collaboratingWithColors_01.jpg"
							alt=""
							fit="cover"
							format="webp"
							quality="80"
							sizes="sm:100vw lg:600px"
						/>
					</SidebySide>

					<SidebySide>
						<Card title="Team Building" component="h3">
							<p class="max-w-lg">
								Our comprehensive pre-construction process will ensure you can
								count on our team to produce a quality proposal and
								pre-construction experience, whether it be at the budget phase
								or final phase of estimating.
							</p>
						</Card>

						<nuxt-img
							src="/teamBuilding_01.jpg"
							alt=""
							fit="cover"
							format="webp"
							quality="80"
							sizes="sm:100vw lg:600px"
						/>
					</SidebySide>
				</article>

				<article class="container space-y-6">
					<h2>Community</h2>
					<ul class="partnerlist columns-2 md:columns-4 space-y-2">
						<li v-for="item in communityList" class="">
							{{ item }}
						</li>
					</ul>
				</article>
			</main>
			<ul class="carousel mt-20 gap-4">
				<li
					class="carousel-item"
					v-for="picture in communityPictures"
					:key="picture.img"
				>
					<nuxt-img
						:src="picture.img"
						:alt="picture.alt"
						fit="cover"
						width="450"
						format="webp"
						quality="80"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.media-scroller {
		margin-top: 4rem;
		--_spacer: 0.5rem;
		display: grid;
		gap: var(--_spacer);
		grid-auto-flow: column;
		grid-auto-columns: 100%;

		padding: 0 var(--_spacer) var(--_spacer);

		overflow-x: auto;
		overscroll-behavior-inline: contain;
	}

	.media-element {
		display: grid;
		grid-template-rows: min-content;
		gap: var(--_spacer);
		padding: var(--_spacer);
		background: var(--surface-2);
		border-radius: var(--radius-2);
		box-shadow: var(--shadow-2);
	}
	.snaps-inline {
		scroll-snap-type: inline mandatory;
		scroll-padding-inline: var(--_spacer, 1rem);
	}

	@media (min-width: 400px) {
		.media-scroller {
			grid-auto-columns: 45%;
		}
	}
</style>
