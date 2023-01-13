<script setup>
	const drawerVisible = useDrawer()
</script>

<template>
	<Transition>
		<div class="drawer" v-if="drawerVisible">
			<slot />
		</div>
	</Transition>
	<div class="drawer-mask" @click="drawerVisible = false"></div>
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

	.v-enter-active,
	.v-leave-active {
		transform: translateX(0);
		transition: all 0.3s ease;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateX(-100%);
	}
</style>
