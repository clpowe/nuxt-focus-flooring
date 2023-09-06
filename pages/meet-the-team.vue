<script setup lang="ts">
	import VueMultiselect from 'vue-multiselect'
	useHead({
		title: 'Focus Flooring - Meet the team'
	})

	const category = ref<string>('All')
	const drawerVisible = useDrawer()

	type TeamMember = {
		id: number
		image: string
		firstName: string
		lastName: string
		title: string
		bio: string
		category: string
	}

	const curruntMember = ref<TeamMember | null>(null)

	const team = ref<TeamMember[]>([
		{
			id: 1,
			image: '/Jacques_Duval.png',
			firstName: 'Jacques',
			lastName: 'Duval',
			title: 'President',
			bio: 'Jacques Duval has experienced first-hand how much a willing heart can accomplish. In the flooring industry, Jacques started out as a helping hand on various flooring projects. From being a helping hand on projects, to web development and graphic/media production, to business development and sales, to preconstruction, and then to project management, Jacques has played a part in learning the flooring business while helping to develop solutions for the various departments of the business for its success.<br/> <br/>Jacques’ background consists of assisting the preconstruction team in establishing consistent processes, the field team with coordination and logistics efforts, the office team with establishing consistent procurement efforts, creating project management protocols, helping build a proprietary ecosystem that helps supports the company’s operations, to now, being an effective conduit connecting the field to the office while helping the teams accomplish the goals set forth.<br/> <br/>Today, those skills learned have positioned Jacques to continue to be willing and serve as the Executive Lead at Focus Flooring, where he is fortunate to lead and partner with a committed team of like-minded people.<br/> <br/>Jacques believes that having a humble and willing heart has been the key to his success in business and in life.<br/> <br/>“You don’t choose your purpose; you discover it.”<br/> <br/>Outside of Focus Flooring, Jacques is just as committed to achieving great things for his community through his heart to serve people. When not in the office or visiting job sites, Jacques enjoys spending time with his wife, “The Amazing” Claire, and four kids, Grace, Tessa, David, and Faith.',
			category: 'Leadership'
		},
		{
			id: 2,
			image: '/Robert_Melanson.png',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'General Superintendent',
			bio: 'Robert, a third generation flooring installer, serves as Focus Flooring’s General Superintendent with over 25 years of experience in the flooring industry. Robert has led various flooring teams, and has worked across numerous building types, such as educational facilities, healthcare, hospitality, worship centers and more. Spending time with family, fishing and coaching his sons football team are a few of Robert’s hobbies when he is not at work.',
			category: 'Leadership'
		},
		{
			id: 3,
			image: '/McCarter_Jackson.png',
			firstName: 'McCarter',
			lastName: 'Jackson',
			title: 'Preconstruction Director',
			bio: 'As Preconstruction Director, McCarter supports Focus Flooring’s preconstruction team to ensure all proposals are accurate and complete for delivery to the client. McCarter is a North Carolina native who is passionate about martial arts, enjoys spending time with his family, playing golf and officiating youth sports.',
			category: 'Preconstruction'
		},

		{
			id: 4,
			image: '/De_Lani_Rolle.png',
			firstName: 'De Lani',
			lastName: 'Rolle',
			title: 'Marketing Coordinator',
			bio: 'A graduate of the University of South Florida with a Bachelor of Arts in Communication, De Lani serves as Marketing Coordinator on the Focus Flooring team, and assists with all marketing needs. While not working, De Lani enjoys spending time with her family and videography.',
			category: 'Marketing & Sales'
		},

		{
			id: 5,
			image: '/Pamela_Cooke.png',
			firstName: 'Pamela',
			lastName: 'Cooke',
			title: 'Product Coordinator',
			bio: 'As Product Coordinator, Pamela is responsible for product procurement and submittals for our clients. Pamela is a member of Revealing Truth Ministries in Tampa and enjoys going to the movies and watching the Bucs. She has two daughters and two grandchildren.',
			category: 'Project Planning'
		},
		{
			id: 6,
			image: '/Sarita_Ramos.png',
			firstName: 'Sarita',
			lastName: 'Ramos',
			title: 'Superintendent',
			bio: 'Sarita coordinates with the field and office personnel to effectively communicate the progress of the project’s production, change events, constraints, quality and all necessary reporting. Sarita is originally from St. Croix, U.S Virgin Islands, and in her spare time, enjoys spending time with her family at the beach, fishing, horseback riding, car racing and completing DIY projects.',
			category: 'Field Management'
		},

		{
			id: 7,
			image: '/Char_Goyens.png',
			firstName: 'Charlayne',
			lastName: 'Goyens',
			title: 'Internal Operations Coordinator',
			bio: 'Residing in the Tampa Bay Area with 2 children, 3 stepchildren and 2 grandchildren, Charlayne enjoys spending time with her family, reading and the beach.',
			category: 'Admin'
		},
		{
			id: 8,
			image: '/Andres_Ramos_III.png',
			firstName: 'Andres',
			lastName: 'Ramos III',
			title: 'Foreman',
			bio: '',
			category: 'Field'
		},
		{
			id: 9,
			image: '/Jose_Santiago.png',
			firstName: 'Jose',
			lastName: 'Santiago',
			title: 'Skilled Tradesman',
			bio: 'Santiago is a Skilled Tradesman with experience installing various flooring types and is passionate about what he does.<br/><br/>“Doing what I love never feels like I’m working. It is a great satisfaction to be a part of this elite team that has become like family.” - Santiago',
			category: 'Field'
		},
		{
			id: 10,
			image: '/Javier_Gonzalez.png',
			firstName: 'Javier',
			lastName: 'Gonzalez',
			title: 'Skilled Tradesman',
			bio: '',
			category: 'Field'
		},
		{
			id: 11,
			image: '/Diego_Urcia.png',
			firstName: 'Diego',
			lastName: 'Urcia',
			title: 'Skilled Tradesman',
			bio: 'As a Skilled Tradesman, Diego has 6 years of experience working with multiple flooring types. Diego is thankful to work with the team at Focus Flooring because for him, he has found a good working family-oriented environment.<br/><br/>“We are all team players. Working with this team has helped me to develop myself in both my professional and personal life.” - Diego',
			category: 'Field'
		},
		{
			id: 12,
			image: '/Jose_Garcia.png',
			firstName: 'Jose',
			lastName: 'Garcia',
			title: 'Warehouse Coordinator',
			bio: 'With 6 years of experience in construction, Jose serves as the Focus Flooring Warehouse Coordinator and maintains the Focus Flooring warehouse and inventory. In his spare time, Jose enjoys traveling, discovering new places, food, and cultures, and spending time with his family.',
			category: 'Project Planning'
		},

		{
			id: 13,
			image: '/Elias_Rivera.png',
			firstName: 'Elias',
			lastName: 'Rivera',
			title: 'Tradesman',
			bio: 'As a Tradesman, Elias Rivera works with the Focus Flooring team to assist with tasks as needed on the field. While not at work, Elias enjoys jiu jitsu.',
			category: 'Field'
		},
		{
			id: 14,
			image: '/Javier_Arteaga.png',
			firstName: 'Javier',
			lastName: 'Arteaga',
			title: 'Skilled Tradesman',
			bio: 'As a Skilled Tradesman, Javier Arteaga has over 7 years of experience working with multiple flooring installation types. Javier enjoys working at Focus Flooring, where he plans to achieve goals and excel in his work. Javier loves the family culture at Focus Flooring as, to him, that is something very important in any job.',
			category: 'Field'
		},
		{
			id: 15,
			image: '/Rosalind_Jones.png',
			firstName: 'Rosalind',
			lastName: 'Jones',
			title: 'Field Tech',
			bio: 'Rosalind Jones will utilize her years of experience and expert attention to detail to serve as a Field Tech on the Focus Flooring field team. She will be responsible for reviewing and capturing all completed flooring work via photos, going over the pre-task plan of the day with the team, attending meetings, preparing daily reports, and checking inventory. In her spare time, Rosalind enjoys spending time with family and friends, serving the homeless, and bowling.',
			category: 'Field'
		},
		{
			id: 16,
			image: '/ChileneHenri.png',
			firstName: 'Chilene',
			lastName: 'Henri',
			title: 'Field Tech',
			bio: 'With over 18 years of experience in management, Chilene Henri is a Field Tech on the Focus Flooring field team. She will be responsible for reviewing and capturing all completed flooring work via photos, going over the pre-task plan of the day with the team, attending meetings, preparing daily reports, and checking inventory. While not at work, Chilene enjoys listening to music, spending time with her family, watching movies, and learning new languages.',
			category: 'Field'
		},
		{
			id: 17,
			image: '/JohnnieCollins.png',
			firstName: 'Johnnie',
			lastName: 'Collins',
			title: 'Project Manager',
			bio: 'With his years of experience in Estimating and Project Management, Johnnie Collins serves as Project Manager for the Focus Flooring team. Johnnie will be responsible for validating scopes of work, tracking project changes, maintaining customer communications and project schedules, conducting site visits, maintaining and updating project management tools, and providing estimates and budgets. In his free time, Johnnie enjoys teaching robotics, fishing, and gardening.',
			category: 'Project Planning'
		}
	])

	const catagories = ref([
		'All',
		'Leadership',
		'Preconstruction',
		'Marketing & Sales',
		'Project Planning',
		'Field Management',
		'Admin',
		'Field'
	])

	const filtered = computed(() => {
		return useFilter(team.value, category.value)
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
				<div class="space-y-[var(--s1)] overflow-auto">
					<nuxt-img
						provider="imagekit"
						:src="`/team_members/${curruntMember.image}`"
						:alt="`A photo of ${curruntMember.firstName} ${curruntMember.lastName}`"
						fit="cover"
						height="400"
						width="358"
						format="webp"
						quality="90"
					/>
					<div>
						<p class="font-bold uppercase">
							{{ curruntMember.firstName }} {{ curruntMember.lastName }}
						</p>
						<p class="text-[var(--focus-yellow)]">{{ curruntMember.title }}</p>
					</div>
					<div class="overflow-auto" v-if="curruntMember.bio">
						<p class="font-bold uppercase">Bio</p>
						<p v-html="curruntMember.bio"></p>
					</div>
				</div>
			</div>
		</Drawer>

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
				<!-- <aside class="bg-[#f3f4f6]">
					<label class="sq-radio" v-for="cat in catagories" style="padding: 0">
						<input type="radio" name="radio" v-model="category" :value="cat" />
						<span class="chip">{{ cat }}</span>
					</label>
				</aside> -->
				<main id="main">
					<h2 class="margin-bottom">{{ category }}</h2>
					<div class="team-container">
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
