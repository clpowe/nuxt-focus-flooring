<script setup>
	defineProps({
		show: {
			type: Boolean,
			required: true,
			default: false
		}
	})
</script>

<template>
	<Teleport to="body">
		<div v-if="show">
			<div class="drawer">
				<slot />
			</div>
			<div class="drawer-mask"></div>
		</div>
	</Teleport>
</template>

<style scoped>
	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
		height: 100%;
		background: white;
		z-index: 200;
		transition: all 0.2s;
	}

	.drawer-mask {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: #000;
		opacity: 0.3;
		z-index: 199;
	}
</style>
