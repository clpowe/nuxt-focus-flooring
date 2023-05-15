<template>
	<div class="bg-[var(--midnight)] h-screen w-screen grid place-content-center">
		<div class="flex justify-center flex-col items-center">
			<img
				src="/Focus_Flooring_logo_white_main_.png"
				height="200"
				class="max-w-md"
				alt="focus flooring logo"
			/>
			<h1>Coming Soon</h1>
		</div>
	</div>

	<!-- <a href="#main" class="skip-link button visually-hidden">Skip to main</a>
	<PancakeStack>
		<Navigation />
		<div>
			<slot />
		</div>
		<Footer />
	</PancakeStack> -->
</template>

<script lang="ts" setup>
	useSchemaOrg([
		defineLocalBusiness({
			name: 'Focus Flooring',
			address: {
				streetAddress: '123 Main St',
				addressLocality: 'Harlan',
				addressRegion: 'MA',
				postalCode: '01234',
				addressCountry: 'US'
			},
			image: 'https://emojiguide.org/images/emoji/n/3ep4zx1jztp0n.png'
		}),
		defineWebSite({
			name: 'Focus Flooring'
		}),
		defineWebPage()
	])
</script>
