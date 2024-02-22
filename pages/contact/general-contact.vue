<script setup lang="ts">
	definePageMeta({
		key: (route) => route.fullPath
	})

	const iframe = ref<HTMLIFrameElement>()

	onMounted(() => {
		// if (iframe.value) {
		// 	iframe.value.contentWindow?.addEventListener('load', () => {
		// 		console.log('hello')
		// 		const form = document.getElementsByClassName('css-1na73vl')
		// 		console.log(form)
		// 	})
		// } else {
		// 	return
		// }
	})

	watchEffect(() => {})
</script>

<template>
	<div class="max-w-xl">
		<ClientOnly>
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
		</ClientOnly>
	</div>
	<!-- <div v-if="success">
		Thank you we will contact you soon
		<button @click="handleReset">Reset</button>
	</div>
	<div v-else-if="fail">
		Sorry something has gone wrong on our end. Please try again later
		<button @click="handleReset">Reset</button>
	</div>
	<div v-else>
		<h3 class="mb-4">General Contact</h3>
		<p class="mb-8 text-[var(--grey-6)]">
			To reach us, simply fill out the form below, and we’ll be in contact as
			soon as possible. Or, you may call us at our Tampa office location.
		</p>
		<ClientOnly>
			<FormKit
				type="form"
				method="post"
				:actions="false"
				action="https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec"
				@submit="handleSubmit"
				class="form"
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
					name="telephoneNumber"
					validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
					:validation-messages="{
						matches: 'Phone number must be in the format xxx-xxx-xxxx'
					}"
					validation-visibility="dirty"
					label="Phone Number"
					help="Please enter your phone number"
					placeholder="xxx-xxx-xxxx"
				/>

				<FormKit
					type="text"
					name="jobTitle"
					validation="required"
					label="Job Title"
					help="Please enter your current job title"
					placeholder="Job Title"
				/>
				<FormKit
					type="text"
					name="industry"
					validation="required"
					label="Industry"
					help="What sector do you currently work in"
					placeholder="Current Sector"
				/>

				<FormKit
					type="textarea"
					name="hearAboutUs"
					label="How did you hear about us?"
					rows="5"
					placeholder="How did you hear about us?"
					class="max-w-none w-full"
				/>
				<FormKit
					type="textarea"
					name="commentMessage"
					label="Comment / Message"
					rows="10"
					placeholder="Comments/Message"
				/>

				<button class="btn btn-accent">Submit</button>
			</FormKit>
		</ClientOnly>
	</div> -->
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
