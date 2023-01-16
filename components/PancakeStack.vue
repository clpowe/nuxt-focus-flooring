<template>
	<div class="pancake-stack">
		<slot><!-- optional fallback --></slot>
	</div>
</template>

<style>
	.pancake-stack {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>
