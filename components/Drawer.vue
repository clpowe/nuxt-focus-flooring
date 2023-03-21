<script setup>
	defineProps({
		drawerVisible: {
			type: Boolean,
			required: true
		}
	})

	function closeDrawer() {
		document.body.style.overflow = 'scroll'
		drawerVisible = false
	}
</script>

<template>
	<Teleport to="body">
		<transition name="drawer">
			<div v-if="drawerVisible" class="drawer flex flex-col p-4">
				<Icon
					class="ml-auto mb-4 cursor-pointer"
					name="line-md:close"
					size="1.25em"
					@click="$emit('close')"
				/>
				<slot />
			</div>
		</transition>
	</Teleport>
	<transition name="backdrop">
		<div v-if="drawerVisible" class="backdrop" @click="$emit('close')"></div>
	</transition>
</template>

<style scoped>
	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		max-width: 35ch; /* initially */
		height: 100%;
		background: var(--midnight);
		z-index: 500;
		will-change: auto;
		color: var(--focus-white);
	}

	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		background-color: var(--midnight);
		height: 100vh;
		width: 100%;
		opacity: 0.6;
		z-index: 499;
	}

	.drawer-enter-active,
	.drawer-leave-active {
		transition: 0.5s ease all;
	}

	.drawer-enter-from {
		transform: translateX(-100%);
	}
	.drawer-leave-to {
		transform: translateX(-100%);
	}

	.backdrop-enter-active,
	.backdrop-leave-active {
		transition: 0.6s ease all;
	}

	.backdrop-enter-from {
		opacity: 0;
	}
	.backdrop-leave-to {
		opacity: 0;
	}
</style>
