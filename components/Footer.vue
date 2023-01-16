<template>
	<footer>
		<div class="container">
			<div>
				<h2>Quick Links</h2>

				<NuxtLink prefetch to="/">Home</NuxtLink>
				<NuxtLink prefetch to="/about-us">About us</NuxtLink>

				<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
				<NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
				<NuxtLink prefetch to="/culture-and-comunity"
					>Culture and comunity</NuxtLink
				>
				<NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>

				<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
				<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
				<NuxtLink prefetch to="/contact/general-contact">Contact</NuxtLink>
			</div>

			<address>
				<h2>Address</h2>
				<p>5000 Acline Drive East Tampa, FL 33619</p>
				<p>Po Box 89098 Tampa FL 33689</p>
				<p>(813) 997-0330</p>
			</address>

			<p>Copyright © 2022 FOCUS FLOORING</p>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		background-color: var(--midnight);
		color: var(--focus-white);

		& h2 {
			color: var(--focus-yellow);
		}
		& h2::after {
			color: var(--focus-yellow);
		}
	}
</style>
