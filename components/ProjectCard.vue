<script setup>
	defineProps({
		id: {
			type: Number
		},
		name: {
			type: String
		},
		size: {
			type: String
		},
		cost: {
			type: Number
		},
		client: {
			type: String
		},
		scope: {
			type: String
		},
		image: {
			type: String
		},
		alt: {
			type: String
		},
		catagory: {
			type: String
		}
	})
</script>

<template>
	<div class="sideby">
		<nuxt-img
			:src="image"
			:alt="alt"
			format="webp"
			height="500"
			fit="cover"
			:placeholder="100"
			sizes="sm:100vw md:60vw lg:80vw"
		/>

		<div class="space-y-4">
			<h3>{{ name }}</h3>
			<p>Size: {{ size }}</p>
			<!-- <p>Total Project Cost: {{ useMakeCurrency(cost) }}</p> -->
			<p>Client: {{ client }}</p>
			<p>Scope: {{ scope }}</p>
		</div>
	</div>
</template>

<style scoped>
	.sideby {
		display: grid;
		container-type: inline-size;
		gap: var(--s2);
		grid-template-columns: 1fr;
	}

	.sideby > img {
		display: block;
	}

	@container (min-width: 700px) {
		.sideby {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
