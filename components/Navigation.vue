<script setup>
	const expanded = ref(false)

	function handleClick() {
		expanded.value = !expanded.value
	}
</script>

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
					class="menubar-navigation disclosure-nav"
					role="menubar"
					aria-label="Focus Flooring"
				>
					<Cluster>
						<li role="none">
							<NuxtLink prefetch to="/" role="menuitem">Home</NuxtLink>
						</li>
						<li role="none" ref="menulink">
							<NuxtLink
								prefetch
								class="has-submenu"
								:class="{ open: expanded }"
								to="/about-us"
								role="menuitem"
								aria-haspopup="true"
								:aria-expanded="expanded"
								>About us
							</NuxtLink>
							<button
								ref="button"
								type="button"
								:aria-expanded="expanded"
								aria-controls="id_about_menu"
								aria-label="More About pages"
								@click="handleClick"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="down"
									width="12"
									height="9"
									viewBox="0 0 12 9"
								>
									<polygon points="1 0, 11 0, 6 8"></polygon>
								</svg>
							</button>
							<ul
								:class="{ grid: expanded }"
								class="sub-menu"
								role="menu"
								aria-label="About"
								ref="submenu"
								@mouseover="expanded = true"
							>
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

		& .sub-menu {
			position: absolute;
			background-color: var(--midnight);
			padding: var(--s-1);
			top: 70%;
			display: v-bind(`${expanded ? 'grid': 'none'}`);
		}

		& button {
			background: transparent;
			border: none;
		}

		& button svg {
			fill: var(--focus-white);
			stroke: fill;
		}

		& button:hover svg {
			fill: var(--focus-yellow);
			stroke: fill;
		}

		& button svg.down {
			padding-left: 0.125em;
		}

		& button svg.right {
			position: absolute;
			padding-top: 0.35em;
			right: 0.75em;
		}

		& button[aria-expanded='true'] svg.down {
			transform: rotate(180deg);
		}

		& button[aria-expanded='true'] svg.right {
			transform: rotate(90deg) translate(5px, -5px);
		}
	}

	.grid {
		display: grid;
	}

	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}
</style>
