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
				<div>
					<NuxtLink to="/contact/general-contact">General Contact</NuxtLink>
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
