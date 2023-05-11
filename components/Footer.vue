<script setup>
	const year = computed(() => {
		let date = new Date()
		return date.getFullYear()
	})
</script>

<template>
	<footer aria-label="Site Footer ">
		<div
			class="container px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-12 lg:px-8"
		>
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
				<NuxtLink prefetch to="/">
					<img
						src="/Focus_Flooring_logo_white.svg"
						alt="Focus Flooring Logo"
						width="200"
					/>
				</NuxtLink>
			</div>
			<div
				class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
			>
				<div>
					<nav aria-label="Footer Navigation" class="mt-6">
						<ul class="space-y-4 text-lg">
							<li>
								<NuxtLink prefetch to="/">Home</NuxtLink>
							</li>

							<li>
								<NuxtLink
									prefetch
									to="/core-values"
									role="menuitem"
									exactActiveClass="nuxt-link-active"
									>Core Values</NuxtLink
								>
							</li>

							<li>
								<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
							</li>

							<li>
								<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
							</li>

							<li>
								<NuxtLink prefetch to="/contact/general-contact"
									>Contact</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</div>

				<div>
					<nav aria-label="Footer Navigation" class="mt-6">
						<ul class="space-y-4 text-lg">
							<li>
								<NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
							</li>

							<li>
								<NuxtLink prefetch to="/culture-and-comunity"
									>Culture and Community</NuxtLink
								>
							</li>

							<li>
								<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
							</li>
							<li>
								<NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>
							</li>
						</ul>
					</nav>
				</div>

				<div>
					<address class="mt-6">
						5000 Acline Drive East, Suite B<br />
						Tampa, FL 33619, United States<br />
						<br />
						P: 813-280-0621
					</address>

					<ul class="flex gap-6 mt-8">
						<li>
							<a
								href="https://www.facebook.com/profile.php?id=100092414250682"
								rel="noreferrer"
								target="_blank"
								class="text-[var(--focus-white)] transition hover:opacity-75 flex gap-2"
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="">Facebook</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/focus-flooring/"
								rel="noreferrer"
								target="_blank"
								class="text-[var(--focus-white)] transition hover:opacity-75 flex gap-2"
							>
								<svg
									class="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 56.693 56.693"
									aria-hidden="true"
								>
									<g>
										<path
											d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"
										/>
										<path
											d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"
										/>
									</g>
								</svg>
								<span class="">Linkedin</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p class="copyright">
				&copy; {{ year }} Focus Flooring. All rights reserved
			</p>
		</div>
	</footer>
</template>

<style scoped>
	footer {
		background-color: var(--midnight);
		color: var(--focus-white);
		font-size: 1rem;
		/* padding-block: var(--s4); */

		& h2 {
			color: var(--focus-yellow);
			font-size: 1rem;
		}

		& h2::after {
			display: none;
		}
	}

	.copyright {
		font-size: 12px;
		margin-top: var(--s2);
		/* text-align: center; */
		max-inline-size: none;
	}
</style>
