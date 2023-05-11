<script setup>
	useHead({
		title: 'Focus Flooring - Join our team'
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
				'https://script.google.com/macros/s/AKfycbyo7yd3TD4JSHG8y_AHr8jBcxQugF7XGV0RuQ42nljEJ7Z4V-pw-EScUHNIznKGCLeuvg/exec',
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
			console.error(e)
		}
	}

	function handleReset() {
		success.value = false
		fail.value = false
	}
</script>

<template>
	<div>
		<Hero>Join our <span>team</span></Hero>

		<main id="main">
			<div class="container margin-bottom space-y-2">
				<p>
					At Focus Flooring, we see each one of our projects as an opportunity
					to eliminate our clients’ risks through our processes.
				</p>
				<p>
					When you join ur team you are becoming a part of something bigger than
					us.
				</p>
				<p>Our team, community, and impact becoming greater starts with you!</p>
				<p>Interested in joining us? We want to hear from you.</p>
			</div>
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
				<p>
					To reach us, simply fill out the form below, and we’ll be in contact
					as soon as possible. Or, you can call us at any of our locations.
				</p>
				<ClientOnly>
					<FormKit
						type="form"
						method="post"
						action="https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec"
						@submit="handleSubmit"
					>
						<div class="grid grid-col-1 md:grid-cols-2 gap-4">
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
						</div>
						<div class="grid grid-col-1 md:grid-cols-2 gap-4">
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
						</div>
						<div class="grid grid-col-1 md:grid-cols-2 gap-4">
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
						</div>
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
							decorator-icon="check"
							multiple=""
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
			</div>
		</main>
	</div>
</template>
