<script setup lang="ts">
	import { z } from 'zod'
	import type { FormError, FormSubmitEvent } from '#ui/types'

	useSeoMeta({
		title: 'Join our team | Focus Flooring',
		description:
			"Join the team at Focus Flooring and be part of an organization dedicated to eliminating client risks through precise processes. We're committed to fostering a positive and collaborative culture that empowers our team to illuminate the industry. Make an impact with us and grow your career in commercial flooring. Interested in joining? Fill out the form or contact us at 813-280-0621. Together, we can achieve greater success."
	})

	const route = useRoute()
	useHead(() => ({
		link: [
			{
				rel: 'canonical',
				href: 'https://focus-flooring.com' + route.path
			}
		]
	}))

	const communityPictures = [
		{
			img: 'community/IMG_0300-2.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_9789.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_0570.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_0430.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_0184.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_0563.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_8186.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1564.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1229.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1267.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1746.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_6450.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/IMG_9967.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1185.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/DSCF9955.jpg',
			alt: 'focus floor team photo'
		},
		{
			img: 'community/_DSF1549__1_.jpg',
			alt: 'focus floor team photo'
		}
	]

	// Form

	const interest = [
		'Marketing',
		'Skilled Labor',
		'Project Planning/Management',
		'Field Management/Site Supervision'
	]

	const state = reactive({
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		phone: undefined,
		howDidYouHear: undefined,
		deptOfInterest: undefined,
		comments: undefined
	})

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
	let pending = ref(false)
	let success = ref(false)
	let fail = ref(false)
	async function onSubmit(event: FormSubmitEvent<Schema>) {
		pending.value = true
		try {
			const res: any = await $fetch('/join-our-team', {
				method: 'POST',
				body: event.data
			})
			if (res.statusCode === 200) {
				pending.value = false
				success.value = true
			}
		} catch (error) {
			pending.value = false
			fail.value = true
			console.log(error)
		}
	}
</script>

<template>
	<div>
		<div class="">
			<Hero img="/TheCora.png">Join our<span>team</span></Hero>

			<main id="main" class="main pt-16">
				<article class="container space-y-6">
					<div>
						<h2
							class="font-bold uppercase text-4xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-4"
						>
							<span
								class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
								>Culture</span
							>
						</h2>
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
								height="380"
								width="333"
								sizes="100vw sm:400px md:600px lg:800px xl:1400px"
								quality="90"
								format="webp"
							/>
						</div>
					</div>
				</article>
				<article class="max-w-lg mx-auto">
					<h2
						class="font-bold uppercase text-4xl lg:text-4xl text-gray-800 dark:text-gray-200 mb-4"
					>
						<span
							class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
							>Join</span
						>
						Our Team to Make a
						<span
							class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
							>Difference</span
						>
					</h2>
					<div v-if="success">
						Thank you we will contact you soon
						<button @click="handleReset">Reset</button>
					</div>
					<div v-else-if="fail">
						Sorry something has gone wrong on our end. Please try again later
						<button @click="handleReset">Reset</button>
					</div>
					<div v-else>
						<div class="margin-bottom space-y-2">
							<p>
								Joining us means being part of something bigger. Your role makes
								our team, community, and impact grow. Interested? We're eager to
								hear from you.</p
							>
						</div>
						<p class="mb-8">
							To reach us, simply fill out the form below, and we’ll be in
							contact as soon as possible. Or, you can call us at any of our
							locations.
						</p>
						<UForm
							:schema="schema"
							:state="state"
							class="max-w-lg mx-auto"
							@submit="onSubmit"
						>
							<UFormGroup
								label="First Name"
								name="firstName"
								v-slot="{ error }"
							>
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
									aria-label="Select Department of Interest"
									v-model="state.deptOfInterest"
									:options="interest"
								/>
							</UFormGroup>
							<UFormGroup label="Comments" name="comments">
								<UTextarea
									padded
									size="md"
									color="gray"
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
