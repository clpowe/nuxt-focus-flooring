<script setup>
function handleBuy(e) {
    console.log(e)
    let pass = window.prompt()
    if (pass === 'FFFstore01') {
        window.location.href =
            'https://envision-cs.com/store/Focus-Flooring-c156562751'
    } else {
        return window.location
    }
}

</script>

<template>
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-[var(--midnight)] text-sm py-4">
        <nav class="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
            aria-label="Global">
            <NuxtLink to="/" class="btn btn-ghost text-xl sm:order-1 flex-none">
                <img src="/Focus_Flooring_logo_white.svg" alt="Focus Flooring Logo" width="120" />
            </NuxtLink>

            <div class="sm:order-3 flex items-center gap-x-2">
                <button type="button"
                    class="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-transparent text-gray-800 shadow-sm  disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-collapse="#navbar-alignment" aria-controls="navbar-alignment" aria-label="Toggle navigation">
                    <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6" />
                        <line x1="3" x2="21" y1="12" y2="12" />
                        <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                    <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>

            </div>
            <div id="navbar-alignment"
                class="hs-collapse py-2 hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2">
                <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                    <NuxtLink to="/our-history" class="text-white">Our History</NuxtLink>
                    <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
                        <button id="hs-mega-menu-basic-dr" type="button"
                            class="flex items-center w-full bg-transparent text-white font-medium">
                            About
                            <svg class="ms-1 flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        <div
                            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden grid">
                            <NuxtLink prefetch to="/about-us">About Us</NuxtLink>

                            <NuxtLink prefetch to="/meet-the-team">Meet the team</NuxtLink>
                            <NuxtLink prefetch to="/join-our-team">Join our team</NuxtLink>
                        </div>
                    </div>
                    <NuxtLink to="/our-process" class="text-white">Our Process</NuxtLink>
                    <NuxtLink prefetch to="/portfolio" class="text-white">Portfolio</NuxtLink>
                    <NuxtLink prefetch to="/contact/general-contact" class="text-white">Contact
                    </NuxtLink>
                    <button href="https://envision-cs.com/store/Focus-Flooring-c156562751" @click="handleBuy(event)"
                        ref="lastFocusableElement" class=" text-focus-yellow-500 ">Shop
                    </button>
                </div>
            </div>
        </nav>
    </header>
    <!-- <header class="header">
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
						<a
							href="https://envision-cs.com/store/Focus-Flooring-c156562751"
							@click="handleBuy"
							class=""
							>Shop</a
						>
					</li>
				</ul>
			</div>
		</div>
	</header> -->
</template>

<style scoped>
dialog {
    position: absolute;
    top: 0;
    left: 0;
}

header {
    position: relative;
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

.nav {
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

.sub-menu>li {
    flex: content;
    gap: 1rem;
}

@media (min-width: 801px) {
    .nav {
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
