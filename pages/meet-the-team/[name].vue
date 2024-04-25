<script setup lang="ts">
	import { z } from 'zod'
	import type { FormSubmitEvent } from '#ui/types'
	import { TeamContactSchema } from '~/schemas/TeamContact'

	// Get Team Member
	const route = useRoute()
	const { data: team } = await useTeam()
	const TeamMember = team.value?.find((t) => t.slug === route.params.name)

	definePageMeta({
		layout: 'blank'
	})

	// Submit Form
	type Schema = z.output<typeof TeamContactSchema>
	const state = reactive({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
		formName: TeamMember?.slug,
		sendTo: `${TeamMember?.firstName?.toLowerCase()}@focus-flooring.com`
	})
	const form: Ref<HTMLFormElement | undefined> = ref()

	async function onSubmit(event: FormSubmitEvent<Schema>) {
		event.data.sendto = state.sendTo

		try {
			const res = await $fetch('/api/teamcontact/submit', {
				method: 'POST',
				body: event.data
			})
		} catch (err) {
			console.log(err)
		}
		state.email = ''
		state.formName = ''
		state.message = ''
		state.name = ''
		state.phone = ''
		state.subject = ''
	}
</script>

<template>
	<Hero hasDot="false"> </Hero>
	<div class="container mx-auto relative mb-12">
		<div
			class="relative bg-midnight mx-auto gap-8 max-w-4xl -mt-40 z-10 p-6 grid grid-cols-1 grid-rows-auto md:grid-cols-[350px_auto] md:grid-rows-[auto_1fr] rounded-2xl"
		>
			<div>
				<h1 class="text-5xl">
					{{ TeamMember?.firstName }} {{ TeamMember?.lastName }}
				</h1>
				<p class="text-white">{{ TeamMember?.title }}</p>
			</div>
			<div class="col-start-1 row-span-2 row-start-2 md:row-start-1">
				<NuxtImg :src="TeamMember?.srcImg" class="w-full md:mt-0 rounded-2xl" />
				<ul class="flex flex-col mt-6">
					<li class="listItem" v-if="TeamMember?.address">
						<Icon name="streamline:location-pin-3" size="32" />
						<p>
							<span class="font-bold">Address:</span> {{ TeamMember?.address }}
						</p>
					</li>
					<li class="listItem" v-if="TeamMember?.mobile">
						<Icon name="streamline:phone-mobile-phone" size="32" />
						<a :href="`tel:${TeamMember?.mobile}`">
							<span class="font-bold">Mobile Phone:</span>
							{{ TeamMember?.mobile }}
						</a>
					</li>
					<li class="listItem" v-if="TeamMember?.office">
						<Icon name="streamline:phone" size="32" />
						<a :href="`tel:${TeamMember.office}`">
							<span class="font-bold">Office Phone:</span>
							{{ TeamMember?.office }}
						</a>
					</li>
					<li class="listItem" v-if="TeamMember?.email">
						<Icon name="streamline:mail-send-envelope" size="32" />
						<a :href="`mailto:${TeamMember?.email}`"
							><span class="font-bold">Email:</span> {{ TeamMember?.email }}</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-midnight-950 font-extrabold text-2xl">
					About {{ TeamMember?.firstName }}
				</h2>
				<p class="text-midnight mt-4">{{ TeamMember?.bio }}</p>
				<!-- <div
					v-if="TeamMember.allowMessage"
					class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
				>
					<div class="mx-auto max-w-2xl">
						<UCard>
							<template #header>
								<div class="text-center">
									Send {{ TeamMember?.firstName }} {{ TeamMember?.lastName }} a
									message
								</div>
							</template>

							<UForm
								ref="form"
								:state="state"
								class="space-y-4"
								@submit="onSubmit"
							>
								<UFormGroup label="Your Name" name="name" required>
									<UInput
										variant="outline"
										color="midnight"
										v-model="state.name"
										type="text"
										placeholder="Enter your name"
									/>
								</UFormGroup>

								<UFormGroup label="Your Email" name="email" required>
									<UInput
										variant="outline"
										color="midnight"
										v-model="state.email"
										type="email"
										placeholder="Enter your email"
										icon="i-heroicons-envelope"
									/>
								</UFormGroup>

								<UFormGroup label="Contact Number" name="phone" required>
									<UInput
										variant="outline"
										color="midnight"
										v-model="state.phone"
										type="text"
									/>
								</UFormGroup>

								<UFormGroup label="Subject" name="subject" required>
									<UInput
										variant="outline"
										color="midnight"
										v-model="state.subject"
										type="text"
									/>
								</UFormGroup>

								<UFormGroup label="Message" name="message" required>
									<UTextarea
										variant="outline"
										color="midnight"
										v-model="state.message"
										type="text"
									/>
								</UFormGroup>

								<input :value="state.sendTo" type="hidden" name="sendTo" />

								<input name="formName" :value="state.formName" type="hidden" />

								<UButton
									class="bg-midnight-950"
									color="midnight"
									variant="solid"
									type="submit"
								>
									Submit
								</UButton>
							</UForm>
						</UCard>
					</div>
				</div> -->
			</div>
		</div>
		<!-- Comment Form -->
	</div>
</template>

<style scoped>
	.listItem {
		@apply inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg;
	}
</style>
