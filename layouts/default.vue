<template>
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
