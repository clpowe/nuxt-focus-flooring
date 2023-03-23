<template>
	<div class="card">
		<div v-if="svg || img">
			<svg-icon :name="svg" v-if="svg" class="h-14" />
			<img :src="image" v-if="img" role="presentation" />
		</div>
		<div>
			<component :is="component" class="mb-[var(--s-1)]" v-if="title">{{
				title
			}}</component>
			<slot />
		</div>
	</div>
</template>

<script setup>
	defineProps({
		image: {
			type: String
		},
		svg: {
			type: String
		},
		title: {
			type: String
		},
		component: {
			type: String
		},
		border: {
			type: Boolean,
			default: false
		},
		style: {
			type: String,
			default: 'h-28 mb-2'
		}
	})
</script>

<style scoped>
	img {
		height: 4rem;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--s1);
		padding: 0cqi;
	}

	@container (min-width: 700px) {
		.card {
			display: flex;
			flex-grow: 1;
			flex-direction: column;
		}
	}
</style>
