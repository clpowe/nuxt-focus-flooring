<script setup>
	useHead({
		title: 'Focus Flooring - Contact'
	})
</script>

<template>
	<div>
		<Hero>Contact</Hero>

		<div class="container">
			<Sidebar>
				<div class="flex flex-col">
					<NuxtLink to="/contact/general-contact">Let's Talk</NuxtLink>
					<NuxtLink to="/contact/project-consultation"
						>Project Consultation</NuxtLink
					>
				</div>
				<main id="main">
					<NuxtPage />
				</main>
			</Sidebar>
		</div>
	</div>
</template>
