<script setup>
	const sectores = ref([
		{
			id: 1,
			title: 'INDUSTRIAL',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 2,
			title: 'HEALTHCARE',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 3,
			title: 'AVIATION',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 4,
			title: 'RESIDENTIAL & HOSPITALITY',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 5,
			title: 'WORSHIP CENTERS',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 6,
			title: 'EDUCATION',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 7,
			title: 'OFFICE & RETAIL',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		}
	])
</script>
<template>
	<div class="sectores">
		<!-- <h2>Sectores we serve</h2> -->
		<SectorsSections
			v-for="sector in sectores"
			key="sector.id"
			:title="sector.title"
		/>
	</div>
</template>

<style scoped>
	* {
		transition: all 0.3s ease 0s;
	}
	div + div article:nth-child(1) {
		background: #c22326;
	}

	div + div article:nth-child(2) {
		background: #f37338;
	}

	div + div article:nth-child(3) {
		background: #fdb632;
	}

	div + div article:nth-child(4) {
		background: #027878;
	}

	div + div article:nth-child(5) {
		background: #801638;
	}
	div + div article:nth-child(6) {
		background: #168070;
	}

	div + div article:nth-child(7),
	div + div {
		background: #261362;
	}

	.sectores {
		width: 100%;
		height: 100vh;
	}

	.sectores {
		display: flex;
		flex-direction: column;
	}

	.sectores article {
		text-orientation: mixed;
		flex-grow: 1;
		width: 100%;
	}

	.sectores:hover article {
	}

	.sectores article:hover {
		flex-grow: 3;
	}
</style>
