<template>
	<!-- <div class="bg-[var(--midnight)] h-screen w-screen grid place-content-center">
		<div class="flex justify-center flex-col items-center">
			<img
				src="/Focus_Flooring_logo_white_main_.png"
				height="200"
				class="max-w-md"
				alt="focus flooring logo"
			/>
			<h1>Coming Soon</h1>
		</div>
	</div> -->

	<a href="#main" class="skip-link button visually-hidden">Skip to main</a>
	<PancakeStack>
		<Navigation />
		<div>
			<slot />
		</div>
		<Footer />
	</PancakeStack>
</template>

<script lang="ts" setup>
	useSchemaOrg([
		defineLocalBusiness({
			name: 'Focus Flooring',
			address: {
				streetAddress: '5000 Acline Drive East, Suite B',
				addressLocality: 'Tampa',
				addressRegion: 'FL',
				postalCode: '33619',
				addressCountry: 'US'
			},
			image: ''
		}),
		defineWebSite({
			name: 'Focus Flooring'
		}),
		defineWebPage()
	])
</script>
