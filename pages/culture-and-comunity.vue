<script setup>


	useHead({
		title: 'Focus Flooring - Culture and Comunity'
	})

	onMounted(()=>{

		document.querySelectorAll('.horizontal-media-scroller')
		.forEach(scroller => rovingIndex({
			element: scroller,
			target: 'a',
		}))
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
		img:'/commitmentToComunity_01.jpg',
		alt:'Working with our community'
		},
		{
		img:'/commitmentToComunity_02.jpg',
		alt:'Working with our community'
		},
		{
		img:'/commitmentToComunity_03.jpg',
		alt:'Working with our community'
		},
		{
		img:'/commitmentToComunity_04.jpg',
		alt:'Working with our community'
		},
		{
		img:'/commitmentToComunity_05.jpg',
		alt:'Working with our community'
		},
	]
</script>

<template>
	<div>
		<Stack size="4">
			<Hero>Culture and <span>Community</span></Hero>

			<main id="main" class="main">
				<article class="container">
					<div class="space-y-[var(--s6)]">
						<div>
							<h2>Culture</h2>
							<p class="max-w-lg">
								<blockquote class=" lg:text-4xl mb-4 italic font-bold">
									“Illuminate our industry with positivity, partnership, &
									precision”…
								</blockquote>
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
					</div>
				</article>

				<article class="container">
					<div class="space-y-6">
						<h2>Community</h2>
						<ul class="partnerlist columns-2 md:columns-4 space-y-2">
							<li v-for="item in communityList" class="">
								{{ item }}
							</li>
						</ul>


						<ul class="horizontal-media-scroller">
							
							<li class="" v-for="picture in communityPictures" :key="picture.img">
								<figure>
									<picture>
										<nuxt-img
											:src="picture.img"
											:alt="picture.alt"
											fit="cover"
											format="webp"
											quality="80"
										/>
									</picture>
								</figure>
							</li>
							
							<!-- <li>
								<figure>
									<picture>
										<nuxt-img
											src="/commitmentToComunity_02.jpg"
											alt=""
											fit="cover"
											format="webp"
										quality="80"
										/>
									</picture>
								</figure>
							</li>

							<li>
								<figure>
									<picture>
										<nuxt-img
											src="/commitmentToComunity_03.jpg"
											alt=""
											fit="cover"
											format="webp"
										quality="80"
										/>
									</picture>
								</figure>
							</li>

							<li>
								<figure>
									<picture>
										<nuxt-img
											src="/commitmentToComunity_04.jpg"
											alt=""
											fit="cover"
											format="webp"
										quality="80"
										/>
									</picture>
								</figure>
							</li> 

						<li>
							<figure>
								<picture>
									<nuxt-img
										src="/commitmentToComunity_05.jpg"
										alt=""
										fit="cover"
										format="webp"
										quality="80"
									/>
								</picture>
							</figure>
						</li>-->

						</ul>
					</div>
				</article>
			</main>
		</Stack>
	</div>
</template>

<style scoped lang="scss">

// .horizontal-media-scroller {
//   --size: 1500px;

//   display: grid;
//   grid-auto-flow: column;
//   gap: calc(var(--gap) / 2);
//   margin: 0;

//   padding-inline-start: var(--gap);
//   padding-inline-end: var(--gap);
//   padding-block-start: calc(var(--gap) / 2);
//   padding-block-end: calc(var(--gap) / 2);

//   overflow-x: auto;
//   overscroll-behavior-inline: contain;
//   scroll-snap-type: inline mandatory;
//   scroll-padding-left: var(--gap);
//   scroll-padding-right: var(--gap);
//   scroll-padding-inline: var(--gap);

//   @media (prefers-reduced-motion: no-preference) {
//     scroll-behavior: smooth;
//   }

//   & > li {
//     display: inline-block;

//     /*  container padding fix  */
//     &:last-of-type figure {
//       position: relative;

//       &::after {
//         content: "";
//         position: absolute;

//         inline-size: var(--gap);
//         block-size: 100%;

//         inset-block-start: 0;
//         inset-inline-end: calc(var(--gap) * -1);
//       }
//     }
//   }

//   & figure {
//     scroll-snap-align: start;
//   }

//   & a {
//     display: inline-block;
//     text-decoration: none;
//     color: inherit;
//     outline-offset: 12px;

//     &:focus {
//       outline-offset: 7px;
//     }

//     @media (prefers-reduced-motion: no-preference) {
//       transition: outline-offset .25s ease;
//     }
//   }
// }

</style>
