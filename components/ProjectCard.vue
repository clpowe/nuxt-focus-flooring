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
		category: {
			type: String
		}
	})
</script>

<template>
	<div class="card bg-base-100 shadow-xl">
		<figure>
			<nuxt-img
				provider="imagekit"
				:src="image"
				:alt="alt"
				format="webp"
				height="500"
				fit="fit"
				loading="lazy"
				sizes="sm:100vw md:60vw lg:80vw"
				:modifiers="{ aspectRatio: '16/9' }"
			/>
		</figure>
		<div class="p-4">
			<h3 class="card-title">{{ name }}</h3>
			<p class="text-sm mb-4">As Envision Flooring</p>
			<p>
				<span class="font-bold">Size: </span>
				<span class="uppercase">{{ size }}</span>
			</p>
			<p><span class="font-bold">Client: </span> {{ client }}</p>
			<p><span class="font-bold">Scope: </span> {{ scope }}</p>
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
