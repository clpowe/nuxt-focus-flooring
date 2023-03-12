<script setup>
	const about = ref(false)
	const expanded = ref(false)
	// const previousOverflow = ref('')
	const navDrawerVisible = useNavDrawer()

	const mobileNav = ref(true)

	const { width } = useWindowSize()

	const mobile = computed(() => {
		if (width.value <= 800) {
			return true
		} else {
			mobileNav.value = false
			return false
		}
	})

	function handleClick() {
		expanded.value = !expanded.value
	}

	function openMobileNav() {
		navDrawerVisible.value = !navDrawerVisible.value
	}

	function closeDrawer() {
		navDrawerVisible.value = false
	}
</script>

<template>
	<header class="header">
		<div class="container navigation">
			<NuxtLink prefetch to="/">
				<img
					src="/Focus_Flooring_logo_white_main_.png"
					alt="Focus Flooring Logo"
					width="200"
				/>
			</NuxtLink>

			<nav role="navigation" class="menubar-navigation" aria-label="primary">
				<ul
					v-show="!mobile"
					class="menubar-navigation disclosure-nav"
					role="menubar"
					aria-label="Focus Flooring"
				>
					<Cluster>
						<li role="none">
							<NuxtLink
								prefetch
								to="/"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Home</NuxtLink
							>
						</li>
						<li role="none" ref="menulink">
							<NuxtLink
								prefetch
								@mouseover="handleClick"
								ref="about"
								class="has-submenu"
								:class="{ open: expanded }"
								to="/about-us"
								role="menuitem"
								aria-haspopup="true"
								exactActiveClass="nuxt-link-active"
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
								v-show="expanded"
								:class="{ grid: expanded }"
								class="sub-menu"
								role="menu"
								aria-label="About"
								ref="submenu"
								@mouseleave="handleClick"
								@mouseover="expanded = true"
							>
								<li role="none">
									<NuxtLink
										prefetch
										to="/our-history"
										role="menuitem"
										exactActiveClass="nuxt-link-active"
										>Our History</NuxtLink
									>
								</li>

								<li role="none">
									<NuxtLink
										prefetch
										to="/meet-the-team"
										role="menuitem"
										exactActiveClass="nuxt-link-active"
										>Meet the team</NuxtLink
									>
								</li>

								<li role="none">
									<NuxtLink
										prefetch
										to="/culture-and-comunity"
										role="menuitem"
										exactActiveClass="nuxt-link-active"
										>Culture and comunity</NuxtLink
									>
								</li>
								<li role="none">
									<NuxtLink
										prefetch
										to="/join-our-team"
										role="menuitem"
										exactActiveClass="nuxt-link-active"
										>Join our team</NuxtLink
									>
								</li>
							</ul>
						</li>
						<li role="none">
							<NuxtLink
								prefetch
								to="/our-process"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Our Process</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/portfolio"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Portfolio</NuxtLink
							>
						</li>
						<li role="none">
							<NuxtLink
								prefetch
								to="/contact/general-contact"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Contact</NuxtLink
							>
						</li>
					</Cluster>
				</ul>
				<div class="menu-icon" v-show="mobile">
					<Icon name="line-md:menu" size="1.25em" @click="openMobileNav" />
				</div>
				<Drawer :drawerVisible="navDrawerVisible" @close="closeDrawer">
					<ul class="" role="menubar" aria-label="Focus Flooring">
						<li role="none">
							<NuxtLink
								prefetch
								to="/"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Home</NuxtLink
							>
						</li>
						<li role="none" ref="menulink">
							<NuxtLink
								prefetch
								to="/about-us"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>About us
							</NuxtLink>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/our-history"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Our History</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/meet-the-team"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Meet the team</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/culture-and-comunity"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Culture and comunity</NuxtLink
							>
						</li>
						<li role="none">
							<NuxtLink
								prefetch
								to="/join-our-team"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Join our team</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/our-process"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Our Process</NuxtLink
							>
						</li>

						<li role="none">
							<NuxtLink
								prefetch
								to="/portfolio"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Portfolio</NuxtLink
							>
						</li>
						<li role="none">
							<NuxtLink
								prefetch
								to="/contact/general-contact"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>Contact</NuxtLink
							>
						</li>
					</ul>
				</Drawer>
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
		width: 100%;
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

	.menu-icon {
		position: absolute;
		height: 100%;
		top: 0;
		right: 1rem;
		display: flex;
		align-items: center;
	}
	.drawer-icon {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
	}
	.dropDownNav {
		display: flex;
		flex-direction: column;
		position: fixed;
		width: 100%;
		max-width: 250px;
		height: 100%;
		background-color: var(--midnight);
		top: 0;
		left: 0;
		padding-block: var(--s5);
		padding-inline: var(--s1);
		gap: var(--s-1);
		z-index: 15;
	}

	.nuxt-link-active {
		color: var(--focus-yellow);
	}
</style>
