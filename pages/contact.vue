<script setup></script>

<template>
	<div>
		<h1>Contact</h1>
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
