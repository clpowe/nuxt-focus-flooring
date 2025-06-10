<script setup lang="ts">
	import { onMounted } from 'vue'

	useSeoMeta({
		title: 'Meet the team | Focus Flooring',
		description:
			'Focus Flooring, a 100% minority-owned business, specializes in versatile, client-centered commercial flooring, delivering seamless results from project inception to completion.'
	})

	const route = useRoute()
	const isMounted = ref(false)

	useHead(() => ({
		link: [
			{
				rel: 'canonical',
				href: 'https://focus-flooring.com' + route.path
			}
		]
	}))

	const category = ref<string>('All')
	const curruntMember = ref<string | null>(null)

	type TeamMember = {
		id: string
		image: string
		firstName: string
		lastName: string
		title: string
		bio: string
		category: string
		slug: string
	}

	// Use lazy loading with suspense for better hydration handling
	const { data: team, status } = useFetch('/api/team', {
		transform: (data) => {
			return data.map((m) => ({
				...m,
				slug: `${m.firstName?.toLowerCase().trim()}${m.lastName?.toLowerCase().trim()}`
			}))
		},
		lazy: true,
		key: 'teamMembers'
	})

	const catagories = computed(() => {
		if (!team.value) return ['All']
		const set = new Set(['All'])
		team.value.forEach((m) => set.add(m.category!))
		return [...set]
	})

	const filtered = computed(() => {
		if (!team.value) return []
		//@ts-ignore
		return useFilter(team.value, category.value)
	})

	// Consolidate click handlers into one function
	const handleClick = (index: string) => {
		curruntMember.value = curruntMember.value === index ? null : index
	}

	const handleClose = () => {
		curruntMember.value = null
	}

	onMounted(() => {
		isMounted.value = true
	})

</script>

<template>
	<div>
		<Hero>Meet the <span>team</span></Hero>

		<div
			class="sticky top-0 form-control w-full bg-[var(--midnight)] mb-8 py-4 z-10 shadow-xl"
		>
			<div class="container">
				<ClientOnly>
					<USelectMenu v-model="category" :options="catagories" />
				</ClientOnly>
			</div>
		</div>

		<div class="container relative pb-14">
			<div class="">
				<main id="main">
					<h2 class="margin-bottom">{{ category }}</h2>
					<div v-if="status === 'pending'">
						<div
							class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 grid-flow-dense"
						>
							<div v-for="member in 8">
								<USkeleton class="rounded-lg w-full aspect-[308/385]" />
								<USkeleton class="mt-4 h-5" />
								<USkeleton class="h-2" />
								<USkeleton class="mt-4 h-8" />
							</div>
						</div>
					</div>
					<div v-else>
						<div
							class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 grid-flow-dense"
							v-auto-animate
							id="team-grid"
						>
							<LazyTeamMember
								v-for="(member, index) in filtered"
								:key="member.id"
								:data-index="index"
								:selected="curruntMember"
								v-bind="member"
								@open="handleClick(member.id)"
								@close="handleClose"
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.parent {
		display: grid;
		grid-template-columns: 1fr;
	}

	aside {
		width: 100%;
		display: flex;
		max-inline-size: 100%;
		overflow-x: scroll;
		gap: 1rem;
		padding: 0.5rem;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	@media (min-width: 741px) {
		.parent {
			display: grid;
			grid-template-columns: minmax(140px, 25%) 1fr;
		}
		aside {
			display: flex;
			flex-direction: column;
			overflow: visible;
		}
	}

	label {
		font-size: 1rem;
		display: flex;
		align-items: center;
		margin: 0;
	}

	.list-move,
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	.list-leave-active {
		position: absolute;
	}

	.team-container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
		grid-auto-flow: dense;
	}

	@media (min-width: 741px) {
		.team-container {
			display: grid;
			gap: 1rem;
			grid-auto-flow: dense;
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}

	.chip {
		background-color: var(--grey-2);
		color: var(--midnight);
		padding: 0 25px;
		font-size: 1rem;
		line-height: 50px;
		border-radius: 25px;
		text-align: center;
		width: fit-content;
		white-space: nowrap;
	}
</style>