<script setup lang="ts">
	const props = defineProps({
		id: Number,
		srcImg: String,
		firstName: String,
		lastName: String,
		title: String,
		bio: String,
		group: String,
		spaner: Boolean,
		slug: String,
		selected: Number
	})

	let show = computed(() => props.selected === props.id)
</script>

<template>
	<div
		v-bind="$attrs"
		class="flex flex-col bg-white border shadow-sm rounded-xl"
	>
		<NuxtImg
			:src="srcImg"
			loading="lazy"
			width="479"
			sizes="200px md:400px"
			class="w-full h-auto rounded-t-xl"
			placeholder
			:alt="`Photo of ${firstName} ${lastName}`"
		/>

		<div class="p-4 md:p-5">
			<h3 class="text-lg font-bold text-gray-800">
				{{ firstName }} {{ lastName }}
			</h3>
			<div>
				<p class="text-sm">{{ title }}</p>
			</div>
			<div v-if="bio" class="card-actions mt-2 justify-between">
				<NuxtLink
					:to="`/meet-the-team/${slug}/`"
					class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-midnight text-white disabled:opacity-50 disabled:pointer-events-none"
				>
					Learn More
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style>
	.bio {
		column-fill: auto;
	}
	.slide-up-enter-active,
	.slide-up-leave-active {
		transition: all 0.25s ease-out;
	}

	.slide-up-enter-from {
		opacity: 0;
		transform: translateY(30px);
	}

	.slide-up-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}
</style>
