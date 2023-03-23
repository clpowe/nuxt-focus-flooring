<script setup>
	import { spring, scroll, timeline } from 'motion'

	const cardRefs = ref()

	const steps = [
		{
			icon: 'how_one',
			step: 1,
			title: 'Preconstrunction',
			description:
				'Through our comprehensive preconstruction process, our team will produce a quality and detailed proposal and an overall preconstruction experience that you can count on.',
			link: '/our-process#preconstruction'
		},
		{
			icon: 'how_two',
			step: 2,
			title: 'System Generated Tools',
			description:
				'Project planning ensures a smooth transition occurs from preconstruction to project execution to ensure we get ahead of potential issues and eliminate risk for our clients early on.',
			link: '/our-process#project-planning'
		},
		{
			icon: 'how_three',
			step: 3,
			title: 'Project Planning',
			description:
				'Our internal tools such as our “Material Lead Time” report, “Production” report and “Mobilization” report, are system generated to equip you with what you need, when you need it.',
			link: '/our-process#project-execution'
		},
		{
			icon: 'how_four',
			step: 4,
			title: 'Project Execution',
			description:
				'Our process and approach to execution comes from many years of experience, staying up to date with the latest installation methods, products, trainings in the market and our overall desire to please our clients',
			link: '/our-process#system-genetated-tools'
		}
	]

	onMounted(() => {
		cardRefs.value.forEach((item) => {
			const svg = item.children[0].children[0]
			const number = item.children[0].children[1]
			const text = item.children[0].children[2]

			const sequence = [
				[svg, { opacity: [0, 1], x: [-100, 0] }],
				[number, { opacity: [0, 1], x: [100, 0] }, { at: '<' }],
				[text, { opacity: [0, 1], y: [100, 0] }, { easing: spring(), at: '<' }]
			]

			scroll(timeline(sequence), {
				target: item,
				offset: ['start end', 'end end', 'end start', 'start start'],
				easing: spring()
			})
		})
	})

	const draw = (progress) => ({
		strokeDashoffset: 1 - progress,

		visibility: 'visible'
	})
</script>
<template>
	<div class="" ref="howcontainer">
		<div class="container howcontainer">
			<h2 ref="title" class="title sticky">How we do it</h2>
			<ol type="1" class="space-y-40">
				<li
					v-for="step in steps"
					:key="step.step"
					ref="cardRefs"
					class="how-con how py-16 grid items-center w-full"
					style="max-width: 800px"
				>
					<div class="grid grid-cols-2 gap-4">
						<svg-icon :name="step.icon" />

						<div class="number-container h-full overflow-hidden">
							<div class="number">{{ step.step }}</div>
							w
						</div>
						<div class="col-span-2">
							<h3 class="font-bold">{{ step.title }}</h3>
							<p class="">
								{{ step.description }}
							</p>
						</div>
						<nuxt-link
							:to="step.link"
							class="btn btn-yellow text-[var(--midnight)]"
							>Learn More</nuxt-link
						>
					</div>
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
		container-type: inline-size;
	}

	.image {
		width: 100%;
	}

	.number-container {
		background: var(--focus-yellow);
		display: grid;
		place-content: center;
		height: 50cqw;
		border-radius: 8px;
		margin-bottom: var(--s3);
		container-type: inline-size;
	}

	.number {
		color: var(--midnight);
		font-size: 30cqh;
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
