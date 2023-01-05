<script setup>
	definePageMeta({
		key: (route) => route.fullPath
	})
</script>

<template>
	<h3>Let’s talk about your next project</h3>
	<p>
		Request a consultation to discuss contract flooring services for your next
		project. We’ll help you select the best materials for your design vision,
		meet your project timelines and get a great new floor within your project
		budget. Just fill out the form below, and we’ll be in contact within 48
		hours to set up a time to talk.
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
				type="radio"
				label="What product(s) are you interested in?*"
				name="projectType"
				:options="[
					'Carpet flooring',
					'Ceramic tile',
					'Concrete surfacing or flooring',
					'Stone tile',
					'Laminate flooring',
					'Resilient flooring'
				]"
			/>
			<FormKit
				type="textarea"
				name="projectDescription"
				label="Project Description"
				rows="10"
				placeholder="Project Description"
			/>
		</FormKit>
	</ClientOnly>
</template>
