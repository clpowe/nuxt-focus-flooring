<script setup>
	import gsap from 'gsap'
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
			{ opacity: 0.8 },
			{ opacity: 0.2, duration: 0.35 }
		)
	}
</script>
<template>
	<div class="sectores">
		<SectorsSections
			v-for="sector in sectores"
			key="sector.id"
			:title="sector.title"
			@mouseenter="grow"
			@mouseleave="shrink"
		/>
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
			height: 80vh;
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
