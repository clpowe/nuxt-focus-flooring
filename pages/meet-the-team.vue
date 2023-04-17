<script setup lang="ts">
	useHead({
		title: 'Focus Flooring - Meet the team'
	})

	const catagory = ref<string>('All')
	const drawerVisible = useDrawer()

	type TeamMember = {
		id: number
		image: string
		firstName: string
		lastName: string
		title: string
		bio: string
		catagory: string
	}

	const curruntMember = ref<TeamMember | null>(null)

	const team = ref<TeamMember[]>([
		{
			id: 1,
			image: '/JacquesDuval.jpeg',
			firstName: 'Jacques',
			lastName: 'Duval',
			title: 'President',
			bio: 'As the visual translator, Jacques is able to produce digital media that speaks to the heart of who we are. Jacques is an active member of Revealing Truth Ministries in Tampa and enjoys spending time with his family.',
			catagory: 'Leadership'
		},
		{
			id: 2,
			image: '/RobertMelanson.jpeg',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'General Superintendent',
			bio: 'Rob is a third generation flooring installer specializing in ceramic tile. Having 24 years experience in the flooring industry, Rob serves as Envision’s in-house quality control/quality assurance flooring specialist. Spending time with family, fishing and coaching his sons football team are a few of his hobbies.',
			catagory: 'Leadership'
		},
		{
			id: 3,
			image: '/McCarter.jpg',
			firstName: 'McCarter',
			lastName: 'Jackson',
			title: 'Preconstruction Director',
			bio: 'As Project Engineer, McCarter handles pre-planning and technical activities related to Envision projects. McCarter is a North Carolina native who is passionate about martial arts, enjoys spending time with his family, playing golf and officiating youth sports.',
			catagory: 'Preconstruction'
		},
		{
			id: 4,
			image: '/JudithH.jpeg',
			firstName: 'Judith',
			lastName: 'Henriquez',
			title: 'Preconstruction Tech',
			bio: 'As a Pre-Construction Tech, Judith utilizes her years of experience in construction to analyze plans and prepare bid proposals for Envision Flooring projects. In her spare time, Judith enjoys going to the beach, kayaking and spending time with my family. ',
			catagory: 'Preconstruction'
		},
		{
			id: 5,
			image: '/DeLaniRolle.jpeg',
			firstName: 'De Lani',
			lastName: 'Rolle',
			title: 'Marketing Coordinator',
			bio: 'A graduate of the University of South Florida with a Bachelor of Arts in Communication, De Lani is part of Envision’s C.O.L Team as Marketing Coordinator, and will assist with all marketing needs for Envision. While not working, De Lani enjoys spending time with her family and videography. ',
			catagory: 'Marketing/BD'
		},

		{
			id: 6,
			image: '/PamelaCooke.jpeg',
			firstName: 'Pamela',
			lastName: 'Cooke',
			title: 'Product Coordinator',
			bio: ' Pamela coordinates within the varies teams to implement office procedures, record keeping and billing.  Pamela is a member of Revealing Truth Ministries in Tampa and enjoys going to the movies and watching the Bucs play.  She has two daughters and two grandchildren.',
			catagory: 'Project Planning'
		},
		{
			id: 7,
			image: '/SaritaRamos.jpeg',
			firstName: 'Sarita',
			lastName: 'Ramos',
			title: 'Assistant Superintendent',
			bio: 'Sarita coordinates with the field and office personnel to effectively communicate the progress of the project’s production, change events, constraints, quality and all necessary reporting. Sarita is originally from St. Croix, U.S Virgin Islands, and in her spare time, enjoys spending time with her family at the beach, fishing, horseback riding, car racing and completing DIY projects.',
			catagory: 'Field Management'
		},

		{
			id: 8,
			image: '/CharlayneGoyens.jpeg',
			firstName: 'Charlayne',
			lastName: 'Goyens',
			title: 'Internal Operations Coordinator',
			bio: 'Residing in the Tampa Bay Area with 2 children, 3 stepchildren and 2 grandchildren, Charlayne enjoys spending time with her family, reading and the beach.',
			catagory: 'Admin'
		},
		{
			id: 9,
			image: 'placeholder',
			firstName: 'Andy',
			lastName: '',
			title: 'Field Tech',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field'
		},
		{
			id: 10,
			image: 'placeholder',
			firstName: 'Santiago',
			lastName: '',
			title: 'Field',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field'
		},
		{
			id: 11,
			image: 'placeholder',
			firstName: 'Fransico',
			lastName: '',
			title: 'Field Tech',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field'
		},
		{
			id: 12,
			image: 'placeholder',
			firstName: 'Diego',
			lastName: '',
			title: 'Warehouse Coordinator',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field'
		}
	])

	const catagories = ref([
		'All',
		'Leadership',
		'Preconstruction',
		'Marketing/BD',
		'Project Planning',
		'Field Management',
		'Admin',
		'Field'
	])

	const filtered = computed(() => {
		return useFilter(team.value, catagory.value)
	})

	const handleClick = (index: number) => {
		curruntMember.value = team.value[index - 1]
		drawerVisible.value = true
	}

	function closeDrawer() {
		drawerVisible.value = false
	}
</script>

<template>
	<div>
		<Hero>Meet the <span>team</span></Hero>
		<Drawer :drawerVisible="drawerVisible" @close="closeDrawer">
			<div v-if="curruntMember" class="">
				<div class="space-y-[var(--s1)]">
					<nuxt-img
						provider="imagekit"
						:src="`/team_members/${curruntMember.image}`"
						:alt="`A photo of ${curruntMember.firstName} ${curruntMember.lastName}`"
						fit="cover"
						height="300"
						width="358"
						format="webp"
						quality="90"
					/>

					<div class="font-bold uppercase">
						<p>{{ curruntMember.firstName }}</p>
						<p>{{ curruntMember.lastName }}</p>
					</div>
					<p class="text-[var(--focus-yellow)]">{{ curruntMember.title }}</p>
					<div>
						<p class="font-bold uppercase">Bio</p>
						<p>{{ curruntMember.bio }}</p>
					</div>
				</div>
			</div>
		</Drawer>

		<div class="container">
			<div class="parent">
				<aside>
					<label class="sq-radio" v-for="cat in catagories" style="padding: 0">
						<input type="radio" name="radio" v-model="catagory" :value="cat" />
						<span class="chip">{{ cat }}</span>
					</label>
				</aside>
				<main id="main">
					<h2>{{ catagory }}</h2>
					<div class="flex flex-wrap gap-5 relative">
						<TeamMember
							v-for="(member, index) in filtered"
							:key="member.id"
							:data-index="index"
							v-bind="member"
							@click="handleClick(member.id)"
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
		background-color: #fff;
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
