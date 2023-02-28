<script setup>
	const drawerVisible = useDrawer()
	const previousOverflow = ref('auto')

	onMounted(() => {
		// Lock the scrollbar by removing overflow if we have any
		previousOverflow.value = document.body.style.overflow
		document.body.style.overflow = 'hidden'
	})
	onBeforeUnmount(() => {
		// Restore the overflow and position
		document.body.style.overflow = previousOverflow.value
	})
</script>

<template>
	<Teleport to="body">
		<div v-show="drawerVisible">
			<div class="drawer">
				<slot />
			</div>

			<!-- <div
			class="backdrop"
			v-show="drawerVisible"
			@click="drawerVisible = false"
		></div> -->
		</div>
	</Teleport>
</template>

<style scoped>
	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		max-width: 40ch; /* initially */
		height: 100%;
		padding-left: 0; /* initially */
		border-left: 1px solid whitesmoke;
		background: white;
		z-index: 500;
	}

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		background-color: var(--midnight);
		height: 100vh;
		width: 100%;
		opacity: 0.6;
		z-index: 10;
	}
</style>
