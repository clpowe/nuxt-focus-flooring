<script setup>
	import gsap from 'gsap'
	const sectores = ref([
		{
			id: 1,
			title: 'INDUSTRIAL',
			image: '/Industrial.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 2,
			title: 'HEALTHCARE',
			image: 'HealthCare.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 3,
			title: 'AVIATION',
			image: '/aviation.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 4,
			title: 'RESIDENTIAL & HOSPITALITY',
			image: '/ResidentialHospitality.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 5,
			title: 'WORSHIP CENTERS',
			image: '/WorshipCenters.jpeg',

			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 6,
			title: 'EDUCATION',
			image: '/K-12.png',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		},
		{
			id: 7,
			title: 'OFFICE & RETAIL',
			image: '/RivergateTower.jpeg',
			description:
				'Sed pellentesque consequat elit, efficitur cursus urna faucibus at. Vestibulum velit sapien, gravida vitae quam nec, euismod sollicitudin elit. Phasellus tempus augue at sem pellentesque, ac molestie dui eleifend. Duis vestibulum placerat malesuada.'
		}
	])

	function grow(event) {
		console.log(event.target.children[1])
		gsap.fromTo(event.target, { flexGrow: 1 }, { flexGrow: 10, duration: 0.35 })
		gsap.fromTo(
			event.target.children[0],
			{ color: '#eceded' },
			{ color: '#171d1a', duration: 0.35 }
		)
		gsap.fromTo(
			event.target.children[3],
			{ opacity: 0.2, mixBlendMode: 'luminosity' },
			{ opacity: 0.8, mixBlendMode: 'normal', duration: 0.35 }
		)
	}
	function shrink(event) {
		gsap.fromTo(event.target, { flexGrow: 10 }, { flexGrow: 1, duration: 0.35 })
		gsap.fromTo(
			event.target.children[0],
			{ color: '#171d1a' },
			{ color: '#eceded', duration: 0.35 }
		)
		gsap.fromTo(
			event.target.children[3],
			{ opacity: 0.8, mixBlendMode: 'normal' },
			{ opacity: 0.2, duration: 0.35, mixBlendMode: 'luminosity' }
		)
	}
</script>
<template>
	<div>
		<h2>Sectors we serve</h2>
		<div class="sectores">
			<SectorsSections
				v-for="sector in sectores"
				key="sector.id"
				:image="sector.image"
				:title="sector.title"
				@mouseenter="grow"
				@mouseleave="shrink"
				@click="shrink"
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

	@media (min-width: 670px) {
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
