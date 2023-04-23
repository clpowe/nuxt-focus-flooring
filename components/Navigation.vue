<script setup>
	import { animate } from 'motion'
	import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

	const expanded = ref(false)

	const navigation = ref()
	const backdrop = ref()

	const { hasFocus, activate, deactivate } = useFocusTrap(navigation)

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

	function openDrawer() {
		navigation.value.style.display = 'flex'
		backdrop.value.style.display = 'block'
		animate(
			navigation.value,
			{ transform: ['translateX(0)'] },
			{ easing: 'ease-out' }
		)
		animate(backdrop.value, { opacity: [0, 0.7] }, { easing: 'ease-out' })
		document.body.style.overflow = 'hidden'
	}

	function openDrawerTab() {
		openDrawer()
		activate()
	}

	function closeDrawer() {
		animate(
			navigation.value,
			{ transform: ['translateX(-100%)'] },
			{ easing: 'ease-out' }
		).finished.then(() => {
			navigation.value.style.removeProperty('transform')
			navigation.value.style.removeProperty('display')
		})
		animate(
			backdrop.value,
			{ opacity: [0.7, 0] },
			{ easing: 'ease-out' }
		).finished.then(() => {
			backdrop.value.style.removeProperty('display')
		})
		document.body.style.overflow = 'scroll'
		deactivate()
	}

	onMounted(() => {
		document.addEventListener('keydown', (e) => {
			if (window.innerWidth > 801) return
			if (hasFocus) {
				if (e.key === 'Escape') {
					closeDrawer()
				}
			}
		})
	})
</script>

<template>
	<header class="header">
		<div class="container navigation">
			<NuxtLink prefetch to="/">
				<img
					src="/Focus_Flooring_logo_white.svg"
					alt="Focus Flooring Logo"
					width="150"
				/>
			</NuxtLink>
			<button
				tabindex="0"
				class="menu-icon"
				v-show="mobile"
				@keydown.enter="openDrawerTab"
				@click="openDrawer"
			>
				<Icon name="line-md:menu" size="1.25em" />
			</button>
			<nav
				role="navigation"
				class="menubar-navigation list-none"
				aria-label="primary"
				ref="navigation"
			>
				<button
					v-show="mobile"
					class="ml-auto mb-4"
					@click="closeDrawer"
					ref="firstFocusableElement"
				>
					<Icon name="line-md:close" size="1.25em" />
				</button>
				<li role="none">
					<NuxtLink
						prefetch
						to="/"
						role="menuitem"
						exactActiveClass="nuxt-link-active"
						>Home</NuxtLink
					>
				</li>

				<li role="none" class="dropdown" ref="menulink">
					<button
						ref="button"
						type="button"
						:aria-expanded="expanded"
						aria-controls="id_about_menu"
						aria-label="More About pages"
						@click="handleClick"
						class="flex items-center uppercase gap-1"
					>
						About
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="down fill-[var(--focus-white)]"
							width="12"
							height="9"
							viewBox="0 0 12 9"
						>
							<polygon points="1 0, 11 0, 6 8"></polygon>
						</svg>
					</button>
					<ul
						v-show="expanded"
						class="sub-menu"
						role="menu"
						aria-label="About"
						ref="submenu"
					>
						<li role="none">
							<NuxtLink
								prefetch
								to="/about-us"
								role="menuitem"
								exactActiveClass="nuxt-link-active"
								>About Us</NuxtLink
							>
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
						ref="lastFocusableElement"
						>Contact</NuxtLink
					>
				</li>
			</nav>
			<div class="backdrop" ref="backdrop" @click="closeDrawer"></div>
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
		position: static;
		background: var(--midnight);
		width: 10rem;
		padding: 1rem;
		gap: 0.5rem;
	}
	.sub-menu > li {
		flex: content;
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
</style>
