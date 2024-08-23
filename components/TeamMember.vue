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
		selected: String
	})

	let show = computed(() => props.selected === props.id)
</script>

<template>
	<UBlogPost
		:title="`${firstName} ${lastName}`"
		:image="{
			provider: 'airtable',
			src: srcImg,
			alt: `Photo of ${firstName} ${lastName}`,
			sizes: `150px sm:225px md:350px`,
			placeholder: '[50,35]'
		}"
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
			@click="$emit('open')"
		>
			Learn More
		</UButton>
	</UBlogPost>
	<div
		v-if="show && bio"
		class="card sm:card-side text-[var(-midnight)] col-span-full relative overflow-hidden"
	>
		<div class="card-body">
			<div class="card-actions justify-end">
				<button
					tabindex="0"
					class="btn btn-xs self-end btn-primary text-[var(--focus-white)]"
					@click="$emit('close')"
				>
					close
				</button>
			</div>
			<div class="max-w-[65ch] mx-auto">
				<div
					class="mb-4 text-[clamp(3rem,9vw,5rem)] font-black uppercase leading-[.9em]"
				>
					{{ firstName }}<br />
					{{ lastName }}
				</div>

				<div class="">
					<h4 class="mb-4 font-bold text-xl">Bio</h4>
					<div class="bio-section">
						<p class="bio text-sm prose" v-html="bio"></p>
					</div>
				</div>
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
