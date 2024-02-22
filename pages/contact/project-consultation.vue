<script setup>
	definePageMeta({
		key: (route) => route.fullPath
	})

	const success = ref(false)
	const fail = ref(false)

	async function handleSubmit(data) {
		const fData = new FormData()

		if (data) {
			for (let [key, value] of Object.entries(data)) {
				fData.append(key, value)
			}
		}

		try {
			const res = await $fetch(
				'https://script.google.com/macros/s/AKfycbwQLbLBMhdzIxT9_83Ez88WXdjYMAJPYoAHTW-IFesBRBb1RxgqKGKzlAHSi3nnOllG/exec',
				{
					method: 'POST',
					body: fData
				}
			)
			if (res.result === 'success') {
				success.value = true
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
	<div class="max-w-xl">
		<iframe
			class="airtable-embed"
			src="https://airtable.com/embed/appL4MkUPOT899Tfd/pag5RKIch5iMxwm6x/form"
			frameborder="0"
			onmousewheel=""
			width="100%"
			height="1700"
			style="background: transparent"
		></iframe>
	</div>
	<!-- <div v-if="success">
		Thank you we will contact you soon
		<button @click="handleReset">Reset</button>
	</div>
	<div v-else-if="fail">
		Sorry something has gone wrong on our end. Please try again later
		<button @click="handleReset">Reset</button>
	</div>
	<div>
		<h3 class="mb-4">HELP US LEARN MORE ABOUT YOUR NEXT PROJECT</h3>
		<p class="mb-8">
			We’re looking forward to transforming your next project with our
			commercial flooring or wall tile services. We’ll help select the best
			materials for your vision, meet the project timeline, and install a
			quality product within the project’s budget. Please fill out the form
			below and our team will be in contact within 48 hours to set up a time to
			discuss further.
		</p>
		<ClientOnly>
			<FormKit
				type="form"
				method="post"
				:actions="false"
				action="https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec"
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
					name="telephoneNumber"
					validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
					:validation-messages="{
						matches: 'Phone number must be in the format xxx-xxx-xxxx'
					}"
					validation-visibility="dirty"
					label="Phone Number"
					help="Please enter your phone Number"
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
					name="How did you hear about us"
					label="How did you hear about us?"
					rows="5"
					placeholder="How did you hear about us?"
				/>
				<FormKit
					type="text"
					name="estStartDate"
					validation="required"
					label="Estimated Start Date"
					placeholder="Estimated Start Date"
				/>
				<FormKit
					type="text"
					name="projectSize"
					validation="required"
					label="Project Size"
					placeholder="Project Size"
				/>
				<FormKit
					type="checkbox"
					multiple
					label="What product(s) are you interested in?*"
					name="projectType"
					:options="[
						'Carpet flooring',
						'Ceramic tile',
						'Concrete surfacing or flooring',
						'Stone tile',
						'Laminate flooring',
						'Resilient flooring',
						'Other'
					]"
					decorator-icon="check"
				/>
				<FormKit
					type="textarea"
					name="projectDescription"
					label="Project Description"
					rows="10"
					placeholder="Project Description"
				/>
				<button class="btn btn-accent">Submit</button>
			</FormKit>
		</ClientOnly>
	</div> -->
</template>

<style scoped>
	p {
		color: var(--grey-6);
	}
</style>
