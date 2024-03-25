<script setup lang="ts">
	const props = defineProps({
		id: String,
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
	<UBlogPost
		:title="`${firstName} ${lastName}`"
		:image="{ src: srcImg, alt: `Photo of ${firstName} ${lastName}` }"
		:description="title"
		:ui="{
			image: {
				wrapper: 'aspect-[9/10]'
			}
		}"
	>
		<UButton
			color="midnight"
			v-if="bio"
			class="mt-4 bg-midnight-950"
			:to="`/meet-the-team/${slug}/`"
		>
			Learn More
		</UButton>
	</UBlogPost>
	<!-- <div
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
			<div>
				<UButton color="primary" v-if="bio" :to="`/meet-the-team/${slug}/`">
					Learn More
				</UButton>
			</div>
		</div>
	</div> -->
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
