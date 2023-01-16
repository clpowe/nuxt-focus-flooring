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
