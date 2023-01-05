<script setup>
	definePageMeta({
		key: (route) => route.fullPath
	})
</script>

<template>
	<h3>Lets talk</h3>
	<p>
		To reach us, simply fill out the form below, and we’ll be in contact as soon
		as possible. Or, you can call us at any of our locations.
	</p>
	<ClientOnly>
		<FormKit type="form">
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
</template>
