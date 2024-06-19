<template>
	<Navigation />
	<UMain class="mb-0">
		<a href="#main" class="skip-link button visually-hidden">Skip to main</a>

		<slot />
	</UMain>
	<Footer />
	<SpeedInsights />
</template>

<script lang="ts" setup>
	import { SpeedInsights } from '@vercel/speed-insights/nuxt'
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

	useHead({
		script: [
			{
				innerHTML: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mtc2uj1qwg");`
			}
		]
	})
</script>
