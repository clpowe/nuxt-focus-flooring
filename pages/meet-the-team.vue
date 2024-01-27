<script setup lang="ts">
	useHead({
		title: 'Focus Flooring - Meet the team'
	})

	const category = ref<string>('All')

	type TeamMember = {
		id: number
		image: string
		firstName: string
		lastName: string
		title: string
		bio: string
		category: string
	}

	const { data: team } = await useAsyncData('teammembers', () =>
		$fetch('/team')
	)

	// console.log(data.value)

	const curruntMember = ref<Number | null>(null)

	const catagories = ref([
		'All',
		'Leadership',
		'Preconstruction',
		'Project Planning',
		'Field Management',
		'Field'
	])

	const filtered = computed(() => {
		return useFilter(team.value, category.value)
	})

	const handleClick = (index: number) => {
		if (curruntMember.value == index) {
			curruntMember.value = null
		} else {
			curruntMember.value = index
		}
	}

	function handleClose() {
		curruntMember.value = null
	}
</script>

<template>
	<div>
		<Hero>Meet the <span>team</span></Hero>

		<div class="container">
			<div class="form-control w-full max-w-xs mb-8">
				<select
					class="select w-full select-bordered max-w-xs"
					v-model="category"
				>
					<option v-for="cat in catagories" :value="cat">
						{{ cat }}
					</option>
				</select>
			</div>

			<div class="">
				<main id="main">
					<h2 class="margin-bottom">{{ category }}</h2>
					<div class="team-container">
						<TeamMember
							v-for="(member, index) in filtered"
							:key="member.id"
							:data-index="index"
							:selected="curruntMember"
							v-bind="member"
							@click="handleClick(member.id)"
							@close="handleClose"
						/>
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
