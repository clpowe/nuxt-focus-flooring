<script setup>
	useHead({
		title: 'Focus Flooring - Culture and Comunity'
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
</script>

<template>
	<div>
		<Stack size="4">
			<Hero>Culture and <span>Comunity</span></Hero>

			<main id="main">
				<article class="container">
					<Stack size="2">
						<h2>Culture</h2>
						<p>
							“Illuminate our industry with positivity, partnership and
							precision”… it starts within. We look to be the light to our team
							so that together we can light up the industry.
						</p>
						<Card title="Collaborating with Colors" component="h3">
							<p>
								Our comprehensive pre-construction process will ensure you can
								count on our team to produce a quality proposal and
								pre-construction experience, whether it be at the budget phase
								or final phase of estimating.
							</p>
						</Card>
						<Grid>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/collaboratingWithColors_01.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
						</Grid>
						<Card title="Team Building" component="h3">
							<p>
								Our comprehensive pre-construction process will ensure you can
								count on our team to produce a quality proposal and
								pre-construction experience, whether it be at the budget phase
								or final phase of estimating.
							</p>
						</Card>
						<Grid>
							<Framer :width="12" :height="9">
								<nuxt-img src="/teamBuilding_01.jpg" alt="" fit="cover" />
							</Framer>
						</Grid>
					</Stack>
				</article>

				<article class="container">
					<Stack size="2">
						<h2>Our commitment to our community</h2>
						<ul class="partnerlist">
							<Grid>
								<li v-for="item in communityList">
									<p>{{ item }}</p>
								</li>
							</Grid>
						</ul>
						<Grid>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/commitmentToComunity_01.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/commitmentToComunity_02.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/commitmentToComunity_03.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/commitmentToComunity_04.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
							<Framer :width="12" :height="9">
								<nuxt-img
									src="/commitmentToComunity_05.jpg"
									alt=""
									fit="cover"
								/>
							</Framer>
						</Grid>
					</Stack>
				</article>
			</main>
		</Stack>
	</div>
</template>

<style scoped>
	.partnerlist {
		max-inline-size: none;
	}
</style>
