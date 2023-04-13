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
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 2,
			image: '/RobertMelanson.jpeg',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'General Superintendent',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 3,
			image: '/McCarter.jpg',
			firstName: 'McCarter',
			lastName: 'Jackson',
			title: 'Preconstruction Director',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 4,
			image: '/JudithH.jpeg',
			firstName: 'Judith',
			lastName: 'Henriquez',
			title: 'Preconstruction Tech',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 5,
			image: '/DeLaniRolle.jpeg',
			firstName: 'De Lani',
			lastName: 'Rolle',
			title: 'Marketing Coordinator',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Marketing/BD'
		},

		{
			id: 6,
			image: '/PamelaCooke.jpeg',
			firstName: 'Pamela',
			lastName: 'Cooke',
			title: 'Product Coordinator',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 7,
			image: '/SaritaRamos.jpeg',
			firstName: 'Sarita',
			lastName: 'Ramos',
			title: 'Assistant Superintendent',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field Management'
		},

		{
			id: 8,
			image: '/CharlayneGoyens.jpeg',
			firstName: 'Charlayne',
			lastName: 'Goyens',
			title: 'Internal Operations Coordinator',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
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
						quality="75"
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
			<Sidebar>
				<aside>
					<label class="sq-radio" v-for="cat in catagories">
						{{ cat }}
						<input type="radio" name="radio" v-model="catagory" :value="cat" />
						<span class="checkmark"></span>
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
			</Sidebar>
		</div>
	</div>
</template>

<style scoped>
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
</style>
