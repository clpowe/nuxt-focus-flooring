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
			image: '/placeholder.webp',
			firstName: 'Allen',
			lastName: 'Greene',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 2,
			image: '/placeholder.webp',
			firstName: 'Jacques',
			lastName: 'Duval',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 3,
			image: '/placeholder.webp',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 4,
			image: '/placeholder.webp',
			firstName: 'McCarter',
			lastName: 'Jackson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 5,
			image: '/placeholder.webp',
			firstName: 'Judith',
			lastName: 'Henriquez',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 6,
			image: '/placeholder.webp',
			firstName: 'De Lani',
			lastName: 'Rolle',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Marketing/BD'
		},
		{
			id: 7,
			image: '/placeholder.webp',
			firstName: 'Pamela',
			lastName: 'Cooke',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 8,
			image: '/placeholder.webp',
			firstName: 'Chris',
			lastName: 'Lampkin',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 9,
			image: '/placeholder.webp',
			firstName: 'Jose',
			lastName: 'Doe???',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 10,
			image: '/placeholder.webp',
			firstName: 'Sarita',
			lastName: 'Ramos',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field Management'
		},
		{
			id: 11,
			image: '/placeholder.webp',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field Management'
		},
		{
			id: 12,
			image: '/placeholder.webp',
			firstName: 'Ariana',
			lastName: 'Greene',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Admin'
		},
		{
			id: 13,
			image: '/placeholder.webp',
			firstName: 'Charlayne',
			lastName: 'Goyens',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Admin'
		}
	])

	const filtered = computed(() => {
		return useFilter(team.value, catagory.value)
	})

	const handleClick = (index: number) => {
		curruntMember.value = team.value[index - 1]
		drawerVisible.value = true
	}

	const handleClose = () => {
		drawerVisible.value = false
	}
</script>

<template>
	<div>
		<Hero>Meet the <span>team</span></Hero>
		<Drawer :drawerVisible="drawerVisible">
			<div v-if="curruntMember">
				<button @click="handleClose">X</button>
				<div>
					<img :src="curruntMember.image" alt="" />
					<p>{{ curruntMember.firstName }}</p>
					<p>{{ curruntMember.lastName }}</p>
					<p>{{ curruntMember.title }}</p>
					<p>Bio</p>
					<p>{{ curruntMember.bio }}</p>
				</div>
			</div>
		</Drawer>

		<div class="container">
			<Sidebar>
				<div>
					<FormKit
						v-model="catagory"
						type="radio"
						:options="[
							'All',
							'Leadership',
							'Preconstruction',
							'Marketing/BD',
							'Project Planning',
							'Field Management',
							'Admin'
						]"
					/>
				</div>
				<main id="main">
					<h2>{{ catagory }}</h2>

					<TeamMember
						v-for="member in filtered"
						:key="member.id"
						v-bind="member"
						@click="handleClick(member.id)"
					/>
				</main>
			</Sidebar>
		</div>
	</div>
</template>
