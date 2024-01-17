<script setup>
	function handleBuy() {
		let pass = window.prompt()
		if (pass === 'Jesus') {
			window.location.href =
				'https://envision-cs.com/store/Focus-Flooring-c156562751'
		}
	}

	const details = ref(null)
	const drawerInput = ref(null)

	const route = useRoute()

	watch(
		() => route.fullPath,
		() => {
			if (details.value.open) details.value.removeAttribute('open')

			if (drawerInput.value.checked) drawerInput.value.checked = false
		},
		{ deep: true, immediate: false }
	)

	function close() {
		drawerInput.value.checked = false
	}
</script>

<template>
	<header class="header">
		<div class="navbar bg-primary">
			<div class="navbar-start flex justify-start">
				<div class="flex">
					<div class="drawer lg:hidden" @keydown.escape="close">
						<input
							id="my-drawer"
							type="checkbox"
							class="drawer-toggle"
							ref="drawerInput"
						/>
						<div class="drawer-content">
							<label for="my-drawer" class="btn btn-primary drawer-button"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/></svg
							></label>
						</div>
						<div class="drawer-side">
							<label
								for="my-drawer"
								aria-label="close sidebar"
								class="drawer-overlay"
							>
							</label>

							<ul
								tabindex="0"
								class="menu menu-lg min-h-full z-[1] p-4 shadow bg-primary w-80"
							>
								<button class="btn" @click="close">Close</button>

								<li>
									<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
								</li>
								<li>
									<a>About</a>
									<ul class="p-2">
										<li>
											<NuxtLink prefetch to="/about-us">About Us</NuxtLink>
										</li>
										<li>
											<NuxtLink prefetch to="/meet-the-team"
												>Meet the team</NuxtLink
											>
										</li>
										<li>
											<NuxtLink prefetch to="/join-our-team"
												>Join our team</NuxtLink
											>
										</li>
									</ul>
								</li>
								<li>
									<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
								</li>
								<li>
									<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
								</li>
								<li>
									<NuxtLink
										prefetch
										to="/contact/general-contact"
										ref="lastFocusableElement"
										>Contact</NuxtLink
									>
								</li>
							</ul>
						</div>
					</div>

					<NuxtLink prefetch to="/" class="btn btn-ghost text-xl">
						<img
							src="/Focus_Flooring_logo_white.svg"
							alt="Focus Flooring Logo"
							width="120"
						/>
					</NuxtLink>
				</div>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1" style="--tw-text-opacity: unset">
					<li>
						<NuxtLink prefetch to="/our-history" class="text-white"
							>Our History</NuxtLink
						>
					</li>
					<li>
						<details ref="details">
							<summary>About</summary>
							<ul class="p-2 bg-primary w-40">
								<li>
									<NuxtLink prefetch to="/about-us">About Us</NuxtLink>
								</li>
								<li>
									<NuxtLink prefetch to="/meet-the-team"
										>Meet the team</NuxtLink
									>
								</li>
								<li>
									<NuxtLink prefetch to="/join-our-team"
										>Join our team</NuxtLink
									>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
					</li>
					<li>
						<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
					</li>
					<li>
						<NuxtLink
							prefetch
							to="/contact/general-contact"
							ref="lastFocusableElement"
							>Contact</NuxtLink
						>
					</li>
					<li>
						<a @click="handleBuy" class="">Shop</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<style scoped>
	dialog {
		position: absolute;
		top: 0;
		left: 0;
	}
	.header {
		--tw-text-opacity: unset;

		position: relative;
		background-color: var(--midnight);
		color: var(--focus-white);
		padding-block: var(--s-1);
		border-bottom: 2px solid var(--focus-yellow);
		z-index: 50;
		width: 100%;
	}

	.navigation {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
	}

	nav {
		display: none;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--midnight);
		height: 100vh;
		z-index: 50;
		padding: 2rem 1rem;
		max-width: 20rem;
		width: 100%;
		transform: translateX(-100%);
		font-size: 1.25rem;
	}

	.backdrop {
		display: none;
		position: absolute;
		height: 100vh;
		width: 100vh;
		top: 0;
		left: 0;
		background-color: var(--midnight);
		z-index: 49;
		opacity: 0;
	}

	.sub-menu {
		display: grid;
		position: static;
		background: var(--midnight);
		width: 12rem;
		padding: 1rem;
		gap: 0.5rem;
	}
	.sub-menu > li {
		flex: content;
		gap: 1rem;
	}

	@media (min-width: 801px) {
		nav {
			flex-direction: row;
			position: static;
			margin-left: auto;
			height: auto;
			padding: 0;
			display: flex;
			max-width: 100%;
			justify-content: flex-end;
			transform: translateX(0%);
			text-transform: uppercase;
			gap: var(--s1);
			font-size: var(--s-1);
		}

		.backdrop {
			display: none;
		}
		.dropdown {
			position: relative;
		}

		.sub-menu {
			position: absolute;
			display: flex;
			flex-direction: column;
			background-color: var(--midnight);
		}
	}

	.menu-icon {
		margin-left: auto;
	}

	.menu {
		--tw-text-opacity: unset;
	}
</style>
