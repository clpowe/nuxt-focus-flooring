<script setup>
	defineProps({
		id: {
			type: String
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
		srcImg: {
			type: String
		},
		alt: {
			type: String
		},
		category: {
			type: String
		}
	})

	const show = ref(false)
</script>

<template>
	<UBlogPost
		:image="{ src: srcImg, alt: alt }"
		:title="name"
		description="As Envision Flooring"
		:ui="{
			image: {
				wrapper: 'aspect-[9/10]'
			}
		}"
	>
		<!-- <div class="h-80 object-cover">
			<NuxtImg
				:src="srcImg"
				:alt="alt"
				loading="lazy"
				class="w-full object-cover object-center h-80"
			/>
		</div> -->

		<div class="p-4">
			<p>
				<span class="font-bold">Size: </span>
				<span class="uppercase">{{ size }}</span>
			</p>
			<p><span class="font-bold">Client: </span> {{ client }}</p>
			<p><span class="font-bold">Scope: </span> {{ scope }}</p>
		</div>
	</UBlogPost>
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

	.v-enter-active,
	.v-leave-active {
		transition: transform 0.4s ease;
	}

	.v-enter-from,
	.v-leave-to {
		transform: translateY(-100%);
	}
</style>
