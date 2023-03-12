<script setup lang="ts">
	import { NuxtImg } from '~~/.nuxt/components'

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
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 2,
			image: '/RobertMelanson.jpeg',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Leadership'
		},
		{
			id: 3,
			image: '/McCarter.jpg',
			firstName: 'McCarter',
			lastName: 'Jackson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 4,
			image: '/JudithH.jpeg',
			firstName: 'Judith',
			lastName: 'Henriquez',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Preconstruction'
		},
		{
			id: 5,
			image: '/DeLaniRolle.jpeg',
			firstName: 'De Lani',
			lastName: 'Rolle',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Marketing/BD'
		},
		{
			id: 6,
			image: '/GabrielleHoward.jpeg',
			firstName: 'Gabrielle',
			lastName: 'Howard',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Marketing/BD'
		},
		{
			id: 7,
			image: '/PamelaCooke.jpeg',
			firstName: 'Pamela',
			lastName: 'Cooke',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 8,
			image: '/ChrisLampkin.jpeg',
			firstName: 'Chris',
			lastName: 'Lampkin',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 9,
			image: '/IMG_6800.jpg',
			firstName: 'Jose',
			lastName: 'Garcia',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Project Planning'
		},
		{
			id: 10,
			image: '/SaritaRamos.jpeg',
			firstName: 'Sarita',
			lastName: 'Ramos',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field Management'
		},
		{
			id: 11,
			image: '/RobertMelanson.jpeg',
			firstName: 'Robert',
			lastName: 'Melanson',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Field Management'
		},
		{
			id: 12,
			image: '/ArianaGreene.jpeg',
			firstName: 'Ariana',
			lastName: 'Greene',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Admin'
		},
		{
			id: 13,
			image: '/CharlayneGoyens.jpeg',
			firstName: 'Charlayne',
			lastName: 'Goyens',
			title: 'Some Title',
			bio: 'Quisque id est sagittis, porta risus quis, consectetur lacus. Proin consectetur imperdiet dolor, sit amet consectetur sem viverra convallis. Mauris placerat, est at imperdiet tincidunt, sapien tellus congue sem, eget feugiat mauris dolor quis lectus. Curabitur vel placerat nisi, quis cursus eros. Vivamus id neque massa. Aenean semper ',
			catagory: 'Admin'
		}
	])

	const catagories = ref([
		'All',
		'Leadership',
		'Preconstruction',
		'Marketing/BD',
		'Project Planning',
		'Field Management',
		'Admin'
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
					<img :src="curruntMember.image" alt="" />
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
				<div>
					<label class="sq-radio" v-for="cat in catagories">
						{{ cat }}
						<input type="radio" name="radio" v-model="catagory" :value="cat" />
						<span class="checkmark"></span>
					</label>
				</div>
				<main id="main">
					<h2>{{ catagory }}</h2>
					<div class="teamGrid flex flex-wrap gap-5">
						<TeamMember
							v-for="member in filtered"
							:key="member.id"
							v-bind="member"
							@click="handleClick(member.id)"
						/>
					</div>
				</main>
			</Sidebar>
		</div>
	</div>
</template>

<style scoped></style>
