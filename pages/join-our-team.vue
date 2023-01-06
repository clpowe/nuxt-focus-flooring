<script setup>
	const formData = ref({
		firstName: '',
		lastName: '',
		email: '',
		telephoneNumber: '',
		jobTitle: '',
		industry: '',
		hearAboutUs: '',
		commentMessage: '',
		requst: ''
	})

	async function handleSubmit(data) {
		const fData = new FormData()

		for (let [key, value] of Object.entries(data)) {
			fData.append(key, value)
		}

		try {
			await $fetch(
				'https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec',
				{
					method: 'POST',
					body: fData
				}
			)
		} catch (e) {
			console.error(e)
		}

		// const action =
		// 	'https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec'

		// fetch(action, {
		// 	method: 'Post',
		// 	body: data
		// }).then(() => {
		// 	formData.value = {
		// 		firstName: '',
		// 		lastName: '',
		// 		email: '',
		// 		telephoneNumber: '',
		// 		jobTitle: '',
		// 		industry: '',
		// 		hearAboutUs: '',
		// 		commentMessage: '',
		// 		requst: ''
		// 	}
		// })
	}
</script>

<template>
	<div>
		<div>
			<h1>Join our team</h1>
		</div>
		<div>
			<p>
				At Focus Flooring, we see each one of our projects as an opportunity to
				eliminate our clients’ risks through our processes. When you join our
				team you are becoming a part of something bigger than us.
			</p>
			<p>
				Our team, community, and impact becoming greater starts with you!
				Interested in joining us? We want to hear from you.
			</p>
		</div>
		<main id="main">
			<div>
				<h2>General Contact</h2>
			</div>
			<p>
				To reach us, simply fill out the form below, and we’ll be in contact as
				soon as possible. Or, you can call us at any of our locations.
			</p>
			<ClientOnly>
				<FormKit
					type="form"
					method="post"
					action="https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec"
					:value="formData"
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
						help="What industry do you currently work in"
						placeholder="Currnent Industry"
					/>
					<FormKit
						type="textarea"
						name="hearAboutUs"
						label="How did you hear about us?"
						rows="5"
						placeholder="How did you hear about us?"
					/>
					<FormKit
						type="textarea"
						name="commentMessage"
						label="Comment / Message"
						rows="10"
						placeholder="Comments/Message"
					/>
					<FormKit
						type="radio"
						name="request"
						label="To help us fulfill your request, please select your area(s) of interest:"
						:options="[
							'Request A Quote',
							'Product samples',
							'General Product Literature',
							'Product Care Information',
							'Sales Representative Contact',
							'Request A Presentation'
						]"
					/>
				</FormKit>
			</ClientOnly>
		</main>
	</div>
</template>
