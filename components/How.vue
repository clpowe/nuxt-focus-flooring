<script setup>
	import gsap from 'gsap'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	const howcontainer = ref()
	const cardRefs = ref()

	const steps = ref([
		{
			icon: 'how_one',
			step: 1,
			title: 'Preconstrunction',
			description:
				'Through our comprehensive preconstruction process, our team will produce a quality and detailed proposal and an overall preconstruction experience that you can count on.'
		},
		{
			icon: 'how_two',
			step: 2,
			title: 'System Generated Tools',
			description:
				'Project planning ensures a smooth transition occurs from preconstruction to project execution to ensure we get ahead of potential issues and eliminate risk for our clients early on.'
		},
		{
			icon: 'how_three',
			step: 3,
			title: 'Project Planning',
			description:
				'Our internal tools such as our “Material Lead Time” report, “Production” report and “Mobilization” report, are system generated to equip you with what you need, when you need it.'
		},
		{
			icon: 'how_four',
			step: 4,
			title: 'Project Execution',
			description:
				'Our process and approach to execution comes from many years of experience, staying up to date with the latest installation methods, products, trainings in the market and our overall desire to please our clients'
		}
	])

	// get other plugins:

	onMounted(() => {
		gsap.registerPlugin(ScrollTrigger)

		console.log(cardRefs.value)
		cardRefs.value.forEach((el) => {
			const icon = el.getElementsByClassName('icon')
			const number = el.getElementsByClassName('number')
			const title = el.getElementsByTagName('h3')
			const description = el.getElementsByTagName('p')
			const numbers_Container = el.getElementsByClassName('number-container')

			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top 80%',
					scrub: true,
					toggleActions: 'restart none none reverse'
				}
			})

			tl.from(icon, {
				opacity: 0,
				duration: 1,
				xPercent: -100,
				ease: 'expo.out'
			})
			tl.from(
				numbers_Container,
				{
					opacity: 0,
					duration: 1,
					xPercent: 100,
					ease: 'expo.out'
				},
				'<'
			)
			tl.from(
				number,
				{
					opacity: 0,
					duration: 0.5,
					yPercent: 100
				},
				'-=1'
			)
			tl.from(
				title,
				{
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
					yPercent: 100,
					ease: 'expo.out'
				},
				'<'
			)
			tl.from(
				description,
				{
					opacity: 0,
					stagger: 0.1,
					duration: 0.5,
					yPercent: 100,
					ease: 'expo.out'
				},
				'<'
			)
		})
	})
</script>
<template>
	<div class="howcontainer" ref="howcontainer">
		<div class="container">
			<h2 ref="title" class="title sticky">How we do it</h2>
			<ol type="1" class="space-y-40">
				<li
					v-for="step in steps"
					:key="step.step"
					ref="cardRefs"
					class="how-con how py-16 grid items-center w-full"
					style="max-width: 800px"
				>
					<Sidebar>
						<div class="icon">
							<svg-icon :name="step.icon" />
						</div>
						<div class="flex flex-col justify-center">
							<div class="number-container overflow-hidden">
								<div class="number">{{ step.step }}</div>
							</div>
							<Stack size="--s-1">
								<h3 class="font-bold">{{ step.title }}</h3>
								<p class="">
									{{ step.description }}
								</p>
							</Stack>
						</div>
					</Sidebar>
				</li>
			</ol>
		</div>
	</div>
</template>

<style scoped>
	.title {
		position: sticky;
	}
	.howcontainer {
		position: relative;
		padding-block: var(--s3);
		background-color: var(--midnight);
	}

	h2 {
		color: var(--focus-white);
		font-weight: 700;
	}
	.how-con {
		color: var(--focus-white);
		z-index: 1;
	}

	.image {
		width: 100%;
	}

	.number-container {
		background: var(--focus-yellow);
		display: grid;
		place-content: center;
		height: 80px;
		width: 80px;
		border-radius: 8px;
		margin-bottom: var(--s3);
	}

	.number {
		color: var(--midnight);
		font-size: 64px;
		font-weight: 700;
	}

	ol {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		padding: 1rem;
		margin: auto;
		width: 100%;

		max-inline-size: none;
	}

	li {
		max-inline-size: none;
	}
</style>
