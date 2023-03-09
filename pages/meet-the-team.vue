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

<style scoped>
	.teamGrid {
		container-type: inline-size;
	}
	.sq-radio {
		display: flex;
		position: relative;
		padding-left: 35px;
		margin-bottom: 12px;
		cursor: pointer;
		font-size: 22px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	/* Hide the browser's default radio button */
	.sq-radio input {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	/* Create a custom radio button */
	.checkmark {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: var(--s1);
		height: var(--s1);
		border-radius: 1px;
		outline: 1px solid var(--grey-6);
	}

	/* On mouse-over, add a grey background color */
	.sq-radio:hover input ~ .checkmark {
		background-color: #var(--focus-white);
	}

	/* When the radio button is checked, add a blue background
	.sq-radio input:checked ~ .checkmark {
	  background-color: #241d25;
	}
	*/
	/* Create the indicator (the dot/circle - hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}

	/* Show the indicator (dot/circle) when checked */
	.sq-radio input:checked ~ .checkmark:after {
		display: block;
	}

	/* Style the indicator (dot/circle) */
	.sq-radio .checkmark:after {
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: var(--s-1);
		height: var(--s-1);
		border-radius: 0.2px;

		background-color: var(--focus-yellow);
	}
</style>
