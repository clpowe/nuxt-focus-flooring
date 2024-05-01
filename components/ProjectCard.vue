<script setup lang="ts">
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

	const isOpen = ref(false)
</script>

<template>
	<UBlogPost
		:image="{ src: srcImg, alt: alt }"
		:title="name"
		description="As Envision Flooring"
		:ui="{
			title:
				'text-gray-900 dark:text-white text-xl whitespace-normal font-semibold  group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200',
			image: {
				wrapper: 'aspect-[9/10]'
			}
		}"
	>
		<UButton
			label="Learn More"
			class="text-midnight-950"
			color="focusyellow"
			@click="isOpen = true"
		/>
	</UBlogPost>
	<UModal
		v-model="isOpen"
		:ui="{
			rounded: 'rounded-2xl',
			width: 'w-full sm:max-w-5xl '
		}"
	>
		<UCard
			:ui="{
				base: 'h-full flex flex-col',
				rounded: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
				body: {
					base: 'grow'
				}
			}"
		>
			<template #header>
				<div class="flex items-center justify-between">
					<h3
						class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
					>
						{{ name }}
					</h3>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="isOpen = false"
					/>
				</div>
			</template>
			<NuxtImg :src="srcImg" class="w-full" :alt="alt" />
			<div class="p-4">
				<div class="p-4">
					<p>
						<span class="font-bold">Size: </span>
						<span class="uppercase">{{ size }}</span>
					</p>
					<p><span class="font-bold">Client: </span> {{ client }}</p>
					<p><span class="font-bold">Scope: </span> {{ scope }}</p>
				</div>
			</div>
		</UCard>
	</UModal>
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
