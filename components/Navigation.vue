<template>
	<header class="header">
		<div class="container navigation">
			<NuxtLink prefetch to="/">
				<img
					src="/FocusLogo.svg"
					alt="Focus Flooring Logo"
					height="50"
					width="176"
				/>
			</NuxtLink>

			<nav role="navigation" class="nav" aria-label="primary">
				<Cluster>
					<NuxtLink prefetch to="/">Home</NuxtLink>
					<div class="dropdown">
						<NuxtLink prefetch to="/about-us">About us</NuxtLink>

						<ul class="dropdown-content">
							<li>
								<NuxtLink prefetch to="/our-history">Our History</NuxtLink>
							</li>

							<li>
								<NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
							</li>

							<li>
								<NuxtLink prefetch to="/culture-and-comunity"
									>Culture and comunity</NuxtLink
								>
							</li>

							<li>
								<NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>
							</li>
						</ul>
					</div>
					<NuxtLink prefetch to="/our-process">Our Process</NuxtLink>

					<NuxtLink prefetch to="/portfolio">Portfolio</NuxtLink>

					<NuxtLink prefetch to="/contact/general-contact">Contact</NuxtLink>
				</Cluster>
			</nav>
		</div>
	</header>
</template>

<style scoped>
	.header {
		position: relative;
		background-color: var(--midnight);
		color: var(--focus-white);
		padding-block: var(--s-1);
		border-bottom: 2px solid var(--focus-yellow);
		z-index: 50;
	}

	.navigation {
		display: flex;
	}

	.nav {
		display: flex;
		margin-left: auto;
		text-transform: uppercase;
		text-decoration: none;

		& .dropdown {
			display: block;
			position: relative;
			clear: both;
			transition-duration: 0.5s;
		}

		& .dropdown:hover {
			cursor: pointer;
		}

		& .dropdown .dropdown-content {
			visibility: hidden;
			opacity: 0;
			min-width: 5rem;
			position: absolute;
			transition: all 0.5s ease;
			left: -200%;
			display: none;
		}

		& .dropdown:hover > .dropdown-content,
		& .dropdown:focus-within > .dropdown-content,
		& .dropdown .dropdown-content:hover,
		& .dropdown .dropdown-content:focus {
			visibility: visible;
			opacity: 1;
			display: flex;
		}

		& .dropdown .dropdown-content li {
			clear: both;
			max-inline-size: none;
		}
	}

	.dropdown-content {
		background-color: var(--midnight);
		padding: var(--s-1);
		width: auto;
		display: flex;
		max-inline-size: none;
		gap: var(--s-1);
	}
	.dropdown-content li {
		max-inline-size: none;
		font-size: 0.8em;
		width: max-content;
	}

	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}
</style>
