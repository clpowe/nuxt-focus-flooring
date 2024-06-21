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

	const links = [
		{
			label: 'Our History',
			to: '/our-history'
		},
		{
			label: 'About',
			children: [
				{
					label: 'About Us',
					to: '/about-us'
				},
				{
					label: 'Meet the team',
					to: '/meet-the-team'
				},
				{
					label: 'Join our team',
					to: '/join-our-team'
				}
			]
		},
		{
			label: 'Our Process',
			to: '/our-process'
		},
		{
			label: 'Portfolio',
			to: '/portfolio'
		},
		{
			label: 'Contact',
			to: '/contact/general-contact'
		}
	]
</script>

<template>
	<UHeader :links="links" class="reletive">
		<template #logo>
			<NuxtImg
				src="/Focus_Flooring_logo_white.svg"
				alt="Focus Flooring Logo"
				width="120"
				fit="contain"
				height="30"
			/>
		</template>
		<template #right>
			<UButton
				href="https://envision-cs.com/store/Focus-Flooring-c156562751"
				@click="handleBuy(event)"
				ref="lastFocusableElement"
				color="focusyellow"
				class="text-midnight-950"
			>
				Shop
			</UButton>
		</template>
		<template #panel>
			<UNavigationTree :links="links" />
		</template>
	</UHeader>
</template>

<style scoped></style>
