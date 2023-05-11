<script setup>
	import { animate } from 'motion'

	const sectores = ref([
		{
			id: 1,
			title: 'INDUSTRIAL',
			image: '/Industrial.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: { path: 'portfolio', query: { category: 'Industrial' } }
		},
		{
			id: 2,
			title: 'HEALTHCARE',
			image: 'HealthCare.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: { path: 'portfolio', query: { category: 'Healthcare' } }
		},
		{
			id: 3,
			title: 'AVIATION',
			image: '/aviation.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: { path: 'portfolio', query: { category: 'Aviation' } }
		},
		{
			id: 4,
			title: 'RESIDENTIAL & HOSPITALITY',
			image: '/ResidentialHospitality.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: {
				path: 'portfolio',
				query: { category: 'Residential & Hospitality' }
			}
		},
		{
			id: 5,
			title: 'WORSHIP CENTERS',
			image: '/WorshipCenters.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: { path: 'portfolio', query: { category: 'Worship Centers' } }
		},
		{
			id: 6,
			title: 'EDUCATION',
			image: '/K-12.png',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: { path: 'portfolio', query: { category: 'Education' } }
		},
		{
			id: 7,
			title: 'OFFICE & RETAIL',
			image: '/RivergateTower.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.',
			route: {
				path: 'portfolio',
				query: { category: 'Commercial Office & Retail' }
			}
		}
	])

	function grow(event) {
		animate(event.target, { flexGrow: 8 }, { duration: 0.5 })

		animate(
			event.target.children[0],
			{ fontSize: '2.5em' },
			{ easing: 'linear' }
		)
		animate(event.target.children[2], { opacity: 1 }, { easing: 'linear' })

		animate(event.target.children[4], {
			opacity: 0.8,
			mixBlendMode: 'normal',
			duration: 0.35
		})
	}
	function shrink(event) {
		animate(event.target, { flexGrow: 1, duration: 0.35 })
		animate(
			event.target.children[0],
			{ fontSize: '1.5em' },
			{ easing: 'ease-out' }
		)
		animate(event.target.children[2], { opacity: 0 }, { easing: 'linear' })

		animate(event.target.children[4], {
			opacity: 0.2,
			duration: 0.35,
			mixBlendMode: 'luminosity'
		})
	}
	function goto(event) {
		console.log(event)
	}
</script>
<template>
	<div class="">
		<h2 class="margin-bottom">Sectors we serve</h2>
		<div class="sectores">
			<SectorsSections
				v-for="sector in sectores"
				key="sector.id"
				:image="sector.image"
				:title="sector.title"
				:route="sector.route"
				@mouseenter="grow"
				@mouseleave="shrink"
				@click="goto"
			/>
		</div>
	</div>
</template>

<style scoped>
	.sectores {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 800px) {
		.sectores {
			width: 100%;
			height: 90vh;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.sectores article {
			flex: 1;
			overflow: hidden;
		}
	}
</style>
