<script setup lang="ts">
	definePageMeta({
		key: (route) => route.fullPath
	})

	import { z } from 'zod'
	import type { FormSubmitEvent } from '#ui/types'
	import { GeneralContactSchema } from '~/schemas/GeneralContact'

	type Schema = z.output<typeof GeneralContactSchema>
	const state = reactive({
		first_name: '',
		last_name: '',
		email: '',
		phone_number: '',
		job_title: '',
		industry: '',
		how_did_you_hear_about_us: '',
		message: ''
	})
	const form: Ref<HTMLFormElement | undefined> = ref()

	async function onSubmit(event: FormSubmitEvent<Schema>) {}

	// const iframe = ref<HTMLIFrameElement>()
</script>

<template>
	<div class="max-w-xl">
		<h2>General Contact</h2>
		<p
			>To reach us, simply fill out the form below, and we’ll be in contact as
			soon as possible. Or, you may call us at our Tampa office location.</p
		>
		<UForm ref="form" :state="state" @submit="onSubmit">
			<UFormGroup label="First Name" name="first_name">
				<UInput v-model="state.first_name" />
			</UFormGroup>
			<UFormGroup label="Last Name" name="last_name">
				<UInput v-model="state.last_name" />
			</UFormGroup>
			<UFormGroup label="Email" name="email">
				<UInput v-model="state.email" placeholder="name@domain.com" />
			</UFormGroup>
			<UFormGroup label="Phone Number" name="phone_number">
				<UInput v-model="state.phone_number" placeholder="888-888-8888" />
			</UFormGroup>
			<UFormGroup label="Job Title" name="job_title">
				<UInput
					v-model="state.job_title"
					placeholder="What is your job title?"
				/>
			</UFormGroup>
			<UFormGroup label="Industry" name="industry">
				<UInput
					v-model="state.industry"
					placeholder="What industry are you in?"
				/>
			</UFormGroup>
			<UFormGroup
				label="How did you hear about us?"
				name="how_did_you_hear_about_us"
			>
				<UTextarea
					v-model="state.how_did_you_hear_about_us"
					placeholder="How did you hear about us?"
				/>
			</UFormGroup>
			<UFormGroup label="Message" name="message">
				<UTextarea v-model="state.message" placeholder="Comments / Message" />
			</UFormGroup>
		</UForm>
		<!-- <ClientOnly>
			<iframe
				class="airtable-embed"
				src="https://airtable.com/embed/app2pIu0GZUtM07Kx/pagQDG3JHGtbiEt60/form"
				frameborder="0"
				width="100%"
				height="1200"
				ref="iframe"
				loading="eager"
				style="background: transparent; padding-top: 0"
			></iframe>
		</ClientOnly> -->
	</div>
</template>

<style>
	.airtable-embed {
		margin-top: 0;
	}
	form {
		max-inline-size: none;
	}

	.css-1na73vl {
		padding-top: 48px;
	}
</style>
