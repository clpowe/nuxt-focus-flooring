<template>
	<header class="">
		<img src="" alt="" />
		<div>
			<nav class="nav" aria-label="primary">
				<NuxtLink prefetch to="/">Home</NuxtLink>
				<NuxtLink prefetch to="/about-us">About us</NuxtLink>
				<div>
					<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
					<NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
					<NuxtLink prefetch to="/culture-and-comunity"
						>Culture and comunity</NuxtLink
					>
					<NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>
				</div>
				<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>
				<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>
				<NuxtLink prefetch to="/contact/general-contact">Contact</NuxtLink>
			</nav>
		</div>
	</header>
</template>

<style>
	.nav {
		display: flex;
	}
</style>
