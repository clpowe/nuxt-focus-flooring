<script setup lang="ts">
	import { z } from 'zod'
	import type { FormSubmitEvent } from '#ui/types'

	useHead({
		title: 'Focus Flooring - Join our team',
		meta: [
			{
				name: 'description',
				content:
					"Join the team at Focus Flooring and be part of an organization dedicated to eliminating client risks through precise processes. We're committed to fostering a positive and collaborative culture that empowers our team to illuminate the industry. Make an impact with us and grow your career in commercial flooring. Interested in joining? Fill out the form or contact us at 813-280-0621. Together, we can achieve greater success."
			}
		]
	})

	const { data } = await useFetch('/api/join-our-team')

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

	// Form

	const interest = [
		'Marketing',
		'Skilled Labor',
		'Project Planning/Management',
		'Field Management/Site Supervision'
	]

	const schema = z.object({
		firstName: z.string().min(1, 'Required'),
		lastName: z.string().min(1, 'Required'),
		email: z.string().min(1, 'Required'),
		phone: z.string().min(1, 'Required'),
		howDidYouHear: z.string(),
		deptOfInterest: z.string(),
		comments: z.string()
	})

	type Schema = z.output<typeof schema>

	const state = reactive({
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		howDidYouHear: undefined,
		deptOfInterest: undefined,
		comments: undefined
	})

	// async function handleSubmit(data) {
	// 	const fData = new FormData()

	// 	//console.log(data)

	// 	if (data) {
	// 		for (let [key, value] of Object.entries(data)) {
	// 			fData.append(key, value)
	// 		}
	// 	}

	// 	try {
	// 		const res = await $fetch(
	// 			'https://script.google.com/macros/s/AKfycbyzPPvQS9fBZIcFEq3w755xxFlaCgA8pOs47K_DXhhxWFY95zJ9GdJ-gn6gbHGNZPZWSA/exec',
	// 			{
	// 				method: 'POST',
	// 				body: fData
	// 			}
	// 		)
	// 		//console.log(res)
	// 		if (res.result === 'success') {
	// 			success.value = true
	// 		}
	// 		if (res.result === 'error') {
	// 			fail.value = true
	// 			throw new Error(res.error)
	// 		}
	// 	} catch (e) {
	// 		fail.value = true
	// 		//console.error(e)
	// 	}
	// }

	// function handleReset() {
	// 	success.value = false
	// 	fail.value = false
	// }
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
					<div v-else class="max-w-lg mx-auto">
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
						<UForm :schema="schema" :state="state" class="max-w-lg mx-auto">
							<UFormGroup label="First Name" name="firstName">
								<UInput
									padded
									size="md"
									color="gray"
									variant="outline"
									v-model="state.firstName"
								/>
							</UFormGroup>
							<UFormGroup label="Last Name" name="lastName">
								<UInput
									padded
									size="md"
									color="gray"
									variant="outline"
									v-model="state.lastName"
								/>
							</UFormGroup>
							<UFormGroup label="Email" name="email">
								<UInput
									padded
									size="md"
									color="gray"
									variant="outline"
									v-model="state.email"
								/>
							</UFormGroup>
							<UFormGroup label="Phone Number" name="phone">
								<UInput
									padded
									size="md"
									color="gray"
									variant="outline"
									v-model="state.phone"
								/>
							</UFormGroup>
							<UFormGroup
								label="How did you hear about us?"
								name="howDidYouHear"
							>
								<UTextarea
									padded
									size="md"
									color="gray"
									variant="outline"
									v-model="state.howDidYouHear"
								/>
							</UFormGroup>
							<UFormGroup
								label="What is your department of interest?"
								name="deptOfInterest"
							>
								<USelectMenu
									padded
									size="md"
									v-model="state.deptOfInterest"
									:options="interest"
								/>
							</UFormGroup>
							<UFormGroup label="Comments" name="comments">
								<UTextarea
									padded
									size="md"
									color="focusyellow"
									variant="outline"
									v-model="state.comments"
								/>
							</UFormGroup>
							<UButton
								variant="solid"
								type="submit"
								class="text-midnight-950"
								color="focusyellow"
							>
								Submit
							</UButton>
						</UForm>
					</div>
				</article>
			</main>
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
