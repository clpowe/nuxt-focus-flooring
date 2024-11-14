<template>
  <Navigation />
  <UMain class="mb-0">
    <a href="#main" class="skip-link button visually-hidden">Skip to main</a>
    <NuxtLoadingIndicator />

    <slot />
  </UMain>
  <Footer />
  <SpeedInsights />
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
useSchemaOrg([
  defineLocalBusiness({
    name: "Focus Flooring",
    address: {
      streetAddress: "5000 Acline Drive East, Suite B",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33619",
      addressCountry: "US",
    },
    image: "",
  }),
  defineWebSite({
    name: "Focus Flooring",
  }),
  defineWebPage(),
]);
</script>
