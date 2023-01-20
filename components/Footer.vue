<script setup>
	const year = computed(() => {
		let date = new Date()
		return date.getFullYear()
	})
</script>

<template>
	<footer>
		<div class="container">
			<Grid>
				<div class="quick-links">
					<h2>Quick Links</h2>
					<div class="links-container">
						<div>
							<NuxtLink prefetch to="/">Home</NuxtLink>
							<NuxtLink prefetch to="/about-us">About us</NuxtLink>
							<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
							<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
							<NuxtLink prefetch to="/contact/general-contact"
								>Contact</NuxtLink
							>
						</div>
						<div>
							<NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
							<NuxtLink prefetch to="/culture-and-comunity"
								>Culture and comunity</NuxtLink
							>
							<NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>

							<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
						</div>
					</div>
				</div>

				<address>
					<h2>Address</h2>
					<p>5000 Acline Drive East Tampa, FL 33619</p>
					<p>Po Box 89098 Tampa FL 33689</p>
					<p>(813) 997-0330</p>
				</address>
			</Grid>
		</div>
		<p class="copyright">Copyright ©{{ year }} FOCUS FLOORING</p>
	</footer>
</template>

<style scoped>
	footer {
		background-color: var(--midnight);
		color: var(--focus-white);
		padding-block: var(--s4);

		& h2 {
			color: var(--focus-yellow);
			font-size: 1rem;
		}

		& h2::after {
			display: none;
		}
	}

	.links-container {
		display: flex;
		gap: var(--s2);

		& div {
			display: flex;
			flex-direction: column;
			gap: var(--s-4);
		}

		& a {
			text-transform: uppercase;
			text-decoration: none;
		}
	}

	.copyright {
		font-size: 12px;
		margin-top: var(--s2);
		text-align: center;
		max-inline-size: none;
	}
</style>
