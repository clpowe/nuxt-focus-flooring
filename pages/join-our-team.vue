<script setup>
	useHead({
		title: 'Focus Flooring - Join our team'
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
		'Metropolitan Ministries',
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
			img: 'community/IMG_0300-2.jpg'
		},
		{
			img: 'community/IMG_9789.jpg'
		},
		{
			img: 'community/IMG_0570.jpg'
		},
		{
			img: 'community/IMG_0430.jpg'
		},
		{
			img: 'community/IMG_0184.jpg'
		},
		{
			img: 'community/IMG_0563.jpg'
		},
		{
			img: 'community/IMG_8186.jpg'
		},
		{
			img: 'community/_DSF1564.jpg'
		},
		{
			img: 'community/_DSF1229.jpg'
		},
		{
			img: 'community/_DSF1267.jpg'
		},
		{
			img: 'community/_DSF1746.jpg'
		},
		{
			img: 'community/IMG_6450.jpg'
		},
		{
			img: 'community/IMG_9967.jpg'
		},
		{
			img: 'community/_DSF1185.jpg'
		},
		{
			img: 'community/DSCF9955.jpg'
		},
		{
			img: 'community/_DSF1549__1_.jpg'
		}
	]

	const success = ref(false)
	const fail = ref(false)

	async function handleSubmit(data) {
		const fData = new FormData()

		//console.log(data)

		if (data) {
			for (let [key, value] of Object.entries(data)) {
				fData.append(key, value)
			}
		}

		try {
			const res = await $fetch(
				'https://script.google.com/macros/s/AKfycbyzPPvQS9fBZIcFEq3w755xxFlaCgA8pOs47K_DXhhxWFY95zJ9GdJ-gn6gbHGNZPZWSA/exec',
				{
					method: 'POST',
					body: fData
				}
			)
			//console.log(res)
			if (res.result === 'success') {
				success.value = true
			}
			if (res.result === 'error') {
				fail.value = true
				throw new Error(res.error)
			}
		} catch (e) {
			fail.value = true
			//console.error(e)
		}
	}

	function handleReset() {
		success.value = false
		fail.value = false
	}
</script>

<template>
	<div>
		<div class="">
			<Hero>Join our<span>team</span></Hero>

			<main id="main" class="main pt-16">
				<article class="container space-y-6">
					<div>
						<h2 class="margin-bottom">Culture</h2>
						<p class="max-w-lg">
							<strong
								>Illuminating our industry with positivity, partnership, &
								precision</strong
							>
							starts within. We look to be the light to our team so that
							together we can light up the industry.
						</p>
					</div>
					<div
						class="my-grid grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4"
					>
						<div v-for="pic in communityPictures">
							<NuxtImg
								:src="pic.img"
								:alt="pic.alt"
								provider="imagekit"
								fit="cover"
								height="350"
								width="400"
								quality="90"
								loading="lazy"
								format="webp"
							/>
						</div>
					</div>
				</article>
				<article>
					<div v-if="success">
						Thank you we will contact you soon
						<button @click="handleReset">Reset</button>
					</div>
					<div v-else-if="fail">
						Sorry something has gone wrong on our end. Please try again later
						<button @click="handleReset">Reset</button>
					</div>
					<div v-else class="container">
						<div>
							<h2 class="margin-bottom">Join our team</h2>
						</div>
						<div class="margin-bottom space-y-2">
							<p>
								At Focus Flooring, we see each one of our projects as an
								opportunity to eliminate our clients’ risks through our
								processes.
							</p>
							<p>
								When you join ur team you are becoming a part of something
								bigger than us.
							</p>
							<p>
								Our team, community, and impact becoming greater starts with
								you!
							</p>
							<p>Interested in joining us? We want to hear from you.</p>
						</div>
						<p class="mb-8">
							To reach us, simply fill out the form below, and we’ll be in
							contact as soon as possible. Or, you can call us at any of our
							locations.
						</p>
						<ClientOnly>
							<FormKit
								type="form"
								method="post"
								:actions="false"
								action="https://script.google.com/macros/s/AKfycbyzPPvQS9fBZIcFEq3w755xxFlaCgA8pOs47K_DXhhxWFY95zJ9GdJ-gn6gbHGNZPZWSA/exec"
								@submit="handleSubmit"
							>
								<FormKit
									type="text"
									name="firstName"
									label="First Name"
									help="Enter your first name"
									placeholder="First Name"
								/>
								<FormKit
									type="text"
									name="lastName"
									label="Last Name"
									help="Enter your last name"
									placeholder="Last Name"
								/>

								<FormKit
									type="email"
									name="email"
									validation="required"
									label="Email Address"
									help="Please enter your email address"
									placeholder="Email address"
								/>
								<FormKit
									type="tel"
									name="phone"
									validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
									:validation-messages="{
										matches: 'Phone number must be in the format xxx-xxx-xxxx'
									}"
									validation-visibility="dirty"
									label="Phone Number"
									help="Please enter your phone Number"
									placeholder="xxx-xxx-xxxx"
								/>

								<div class="grid grid-col-1 md:grid-cols-2 gap-4"></div>
								<FormKit
									class="w-full"
									type="textarea"
									name="howDidYouHear"
									label="How did you hear about us?"
									rows="5"
									placeholder="How did you hear about us?"
								/>
								<FormKit
									type="radio"
									name="deptOfInterest"
									label="To help us fulfill your request, please select your area(s) of interest:"
									decorator-icon="check"
									multiple=""
									:options="[
										'Skilled Labor',
										'Field Management/Site Supervision',
										'Estimating/Preconstruction',
										'Project Planning/Management',
										'Procurement',
										'Accounting',
										'Internal Operations',
										'Marketing',
										'Sales'
									]"
								/>
								<FormKit
									type="textarea"
									name="comments"
									label="Comment / Message"
									rows="10"
									placeholder="Comments/Message"
								/>
								<button class="btn btn-accent">Submit</button>
							</FormKit>
						</ClientOnly>
					</div>
				</article>
			</main>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.swiper {
		width: 100%;
		height: 100%;
	}
	.swiper-wrapper {
		max-width: 100vw;
		width: 100vw;
	}
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
