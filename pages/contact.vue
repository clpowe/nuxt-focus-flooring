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
				<ul class="menu menu-horizontal lg:menu-vertical bg-base-100">
					<li><NuxtLink to="/contact/general-contact">Let's Talk</NuxtLink></li>
					<li>
						<NuxtLink to="/contact/project-consultation"
							>Project Consultation</NuxtLink
						>
					</li>
				</ul>

				<main id="main">
					<NuxtPage />
				</main>
			</Sidebar>
		</div>
	</div>
</template>
