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

			<main id="main" class="container">
				<article>
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
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<Card title="Team Building" component="h3">
							<p>
								Our comprehensive pre-construction process will ensure you can
								count on our team to produce a quality proposal and
								pre-construction experience, whether it be at the budget phase
								or final phase of estimating.
							</p>
						</Card>
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
					</Stack>
				</article>

				<article>
					<Stack size="2">
						<h2>Our commitment to our community</h2>
						<ul>
							<li v-for="item in communityList">
								<p>{{ item }}</p>
							</li>
						</ul>
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
						<img src="/placeholder.webp" alt="" />
					</Stack>
				</article>
			</main>
		</Stack>
	</div>
</template>
