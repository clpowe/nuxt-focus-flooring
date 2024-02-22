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
		selected: Number
	})

	let show = computed(() => props.selected === props.id)
</script>

<template>
	<div v-bind="$attrs" class="card shadow-xl text-left">
		<figure>
			<nuxt-img
				:src="srcImg"
				loading="lazy"
				format="webp"
				width="479"
				sizes="200px md:400px"
				class="h-auto"
				placeholder
				:alt="`Photo of ${firstName} ${lastName}`"
			/>
		</figure>
		<div class="card-body justify-between">
			<div>
				<h3 class="">{{ firstName }} {{ lastName }}</h3>
				<p class="text-sm">{{ title }}</p>
			</div>
			<div v-if="bio" class="card-actions mt-2 justify-between">
				<button
					@click="$emit('open')"
					class="btn btn-primary text-[var(--focus-white)] btn-xs w-full"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>

	<div
		v-if="show && bio"
		class="card sm:card-side shadow-xl text-[var(-midnight)] col-span-full relative overflow-hidden"
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
