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

			<nav role="navigation" class="menubar-navigation" aria-label="primary">
				<ul
					class="menubar-navigation"
					role="menubar"
					aria-label="Mythical University"
				>
					<Cluster>
						<li role="none">
							<NuxtLink prefetch to="/" role="menuitem">Home</NuxtLink>
						</li>
						<li role="none">
							<NuxtLink
								prefetch
								to="/about-us"
								role="menuitem"
								aria-haspopup="true"
								aria-expanded="false"
								>About us
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="down"
									width="12"
									height="9"
									viewBox="0 0 12 9"
								>
									<polygon points="1 0, 11 0, 6 8"></polygon></svg
							></NuxtLink>
							<ul class="" role="menu" aria-label="About">
								<li role="none">
									<NuxtLink prefetch to="/our-history" role="menuitem"
										>Our History</NuxtLink
									>
								</li>

								<li role="none">
									<NuxtLink prefetch to="/meet-the-team" role="menuitem"
										>Meet the team</NuxtLink
									>
								</li>

								<li role="none">
									<NuxtLink prefetch to="/culture-and-comunity" role="menuitem"
										>Culture and comunity</NuxtLink
									>
								</li>
								<li role="none">
									<NuxtLink prefetch to="/join-our-team" role="menuitem"
										>Join our team</NuxtLink
									>
								</li>
							</ul>
						</li>
						<li role="none">
							<NuxtLink prefetch to="/our-process" role="menuitem"
								>Our Process</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink prefetch to="/portfolio" role="menuitem"
								>Portfolio</NuxtLink
							>
						</li>
						<li role="none">
							<NuxtLink prefetch to="/contact/general-contact" role="menuitem"
								>Contact</NuxtLink
							>
						</li>
					</Cluster>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="postcss">
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

	.menubar-navigation {
		display: flex;
		margin-left: auto;
		text-transform: uppercase;
		text-decoration: none;

		& li li {
			display: block;
		}

		& > li > [role='menuitem'] {
			display: inline-block;
		}

		& [role='menuitem'] svg {
			fill: currentcolor;
			stroke: currentcolor;
		}

		& [role='menuitem'] svg.down {
			padding-left: 0.125em;
		}

		& [role='menuitem'] svg.right {
			position: absolute;
			padding-top: 0.35em;
			right: 0.75em;
		}

		& [role='menuitem'][aria-expanded='true'] svg.down {
			transform: rotate(180deg);
		}

		& [role='menuitem'][aria-expanded='true'] svg.right {
			transform: rotate(90deg) translate(5px, -5px);
		}

		/* focus styling */
		&.focus {
			padding: 0;
			border: #034575 solid 3px;
		}

		& > li > [aria-expanded='true'],
		& > li > [role='menuitem']:focus,
		& > li > [role='menuitem']:hover {
			outline: none;
			color: var(--focus-yellow);
		}

		& > li > [role='menuitem']:focus,
		& > li > [role='menuitem']:hover {
			padding: 2px;
			padding-bottom: 4px;
			border: 2px solid #034575;
		}
	}

	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}
</style>
