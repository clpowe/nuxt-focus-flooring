<script setup>
	useHead({
		title: 'Focus Flooring - Our Process'
	})

	const main = ref()

	const sections = [
		{ text: 'Preconstruction', id: 'preconstruction' },
		{ text: 'Project Planning', id: 'project-planning' },
		{ text: 'Project Execution', id: 'project-execution' }
		// { text: 'System genetated tools', id: 'system-genetated-tools' }
	]

	const preconstruction = [
		{
			id: 1,
			component: 'h3',
			svg: 'detailed',
			title: 'Detailed Proposal',
			content:
				'We go above and beyond as it relates to the level of detail provided in our proposals. This approach ensures our clients have all of the essential information they need at their fingertips and allows for quick reference as project changes come about.'
		},
		{
			id: 2,
			component: 'h3',
			svg: 'spec',
			title: 'Specification and Design',
			content:
				'Whether you require expert assistance specifying the best flooring materials or already have complete specifications, we can meet any design vision. We’ll show you samples of different materials and ensure you start your project with the right solution.'
		},
		{
			id: 3,
			component: 'h3',
			svg: 'Leed',
			title: 'LEED Certification',
			content:
				'We have extensive experience delivering the biggest LEED-certified flooring installations and can identify energy-efficient flooring materials that support your sustainability efforts.'
		},
		{
			id: 4,
			component: 'h3',
			svg: 'detailed',
			title: 'Life Cycle Costing',
			content:
				'Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.'
		}
	]

	const projectExecutionSteps = [
		{
			id: 1,
			svg: '01',
			content:
				'Before installation, we have a dedicated superintendent survey the job site to determine how materials will be staged.'
		},
		{
			id: 2,
			svg: '02',
			content:
				'Then, our highly trained crews follow a clear plan to rapidly install your flooring. Depending on the complexity of your materials and installation, our crews may train specifically for your project.'
		},
		{
			id: 3,
			svg: '03',
			content:
				'Our team has a “zero-punch” philosophy. As we progress through the project, our teams are creating our own internal punch list and correcting items as we go. The goal of this approach is to ensure that once we receive the client and owner’s punch list, our items to correct are minimum.'
		},
		{
			id: 4,
			svg: '04',
			content:
				'Because of our execution system, our team can efficiently complete any commercial flooring installation project. Our experienced team will coordinate material procurement so that you’re never waiting on a specialty floor. We will also find time-sensitive material alternatives to help stay in line with your project schedule'
		}
	]

	const projectExecution = [
		{
			id: 2,
			component: 'h3',
			title: 'QAQC (Mockups)',
			content:
				'Quality is a filter in which every aspect of what we do is channeled through. From start to finish we have a quality management system for each of our processes. We enforce policies that monitor our work before, during and after construction to ensure quality results.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'Reporting (Field)',
			content:
				'Our field team completes daily reporting to ensure communication is seamless and expectations are met. We always look to ensure our clients are fully aware of what’s happening in the field, even when they are not in the field themselves.'
		},
		{
			id: 4,
			component: 'h3',
			title: 'Closeout',
			content:
				'“Beginning with the end in mind” is a saying we live by. We begin our closeout documents before we are mobilized on the jobsite to ensure our clients have all of the product, maintenance and product care information they need readily available. Proper maintenance is crucial to how your floors will perform over time. Poorly maintained floors can result in surface damage, faded fibers and surfaces, premature wear and costly repairs or replacements.'
		},
		{
			id: 5,
			component: 'h3',
			title: 'Safety',
			content:
				'Safety is our top priority. We care for the safety and health of both our customers and associates. Our comprehensive safety program has a dedicated safety officer and covers personal protective equipment, material handling, first aid, and safety procedures to make sure everyone leaves work healthy and safe.'
		},
		{
			id: 1,
			component: 'h3',
			title: 'Logistics',
			content:
				'Our end-to-end logistics network allows us to meet even the tightest project schedules. With our trained personnel, we have experience rapidly moving materials no matter how big. A dedicated manager coordinates deliveries to ensure materials and personnel arrive at your job site when needed. We have:',
			list: [
				'Dedicated personnel who track every shipment',
				'The appropriate support staff and equipment to efficiently install your flooring',
				'Specialty contractors who work at the same time to maintain a well managed and clean job site',
				'Our goal is to produce the outcome our client desires, without compromising standards or'
			]
		}
	]

	const systemTools = [
		{
			id: 1,
			component: 'h3',
			title: 'Materals lead time report',
			content:
				'Our internal reporting that allows you to know the procurement status of all materials, as well as when you can expect to receive your materials based on the updated lead times and scheduled installation dates.'
		},
		{
			id: 2,
			component: 'h3',
			title: 'Daily reports and weekly production reports',
			content:
				'This tool gives you the ability to track our performance and pace throughout the project.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'Mobilization reports',
			content:
				'This internal planning tool allows us to take the project schedule and break out all of the materials needed based on their install date. This will help our team both manage and sequence all deliveries, as well as stage materials at the job site.'
		}
	]

	const projectPlanning = [
		'Submittals',
		'Project Staffing Plan',
		'Material Handling',
		'Material Lead Time Report',
		'Sequence/Scheduling',
		'Pre-Execution Analysis'
	]
	// const currentsection = ref('preconstruction')
</script>

<template>
	<div>
		<Hero>Our <span>Process</span> </Hero>
		<div class="container relative">
			<Sidebar>
				<aside class="relative menu">
					<nav class="sticky top-12">
						<ol
							class="static min-[742px]:sticky top-4 uppercase font-bold list-none menu-list list-outside"
						>
							<template v-for="link in sections">
								<li>
									<a
										:href="`#${link.id}`"
										:class="{ active: link.id == currentsection }"
										>{{ link.text }}</a
									>
								</li>
							</template>
						</ol>
					</nav>
				</aside>
				<main id="main" class="main" ref="main">
					<Split id="preconstruction">
						<template v-slot:image>
							<nuxt-img
								src="threeUniquesSupporting.jpg"
								alt="Woman working in a warehouse"
								sizes="sm:100vw md:700px lg:700px"
								format="webp"
								class="absolute inset-0 h-full w-full object-cover object-top"
							/>
						</template>
						<template v-slot:content>
							<div class="space-y-10">
								<div>
									<h2 class="mb-4" data-section="preconstruction">
										Pre&shyconstruction
									</h2>
									<p class="">
										Our team will become familiar with the project documents to
										ensure our scope is fully captured. We will then partner
										with you to ensure you stay within your budget throughout
										all pricing efforts and obtain cost certainty for your
										project.
									</p>
								</div>
								<Content>
									<template v-for="item in preconstruction" :key="item.id">
										<article class="card">
											<div>
												<svg-icon :name="item.svg" class="h-14" />
											</div>
											<div>
												<h3 class="mb-[var(--s-1)]">{{ item.title }}</h3>
												<p class="">{{ item.content }}</p>
											</div>
										</article>
									</template>
								</Content>
							</div>
						</template>
					</Split>

					<Split id="project-planning">
						<template v-slot:image>
							<nuxt-img
								src="ourProcess.jpg"
								alt="A man and a woman looking at blueprints"
								fit="cover"
								sizes="sm:100vw md:700px lg:700px"
								format="webp"
								class="absolute inset-0 h-full w-full object-cover"
							/>
						</template>
						<template v-slot:content>
							<h2 data-section="project-planning" class="mb-4">
								Project Planning
							</h2>
							<p class="">
								Our internal project planning systems and tools allow us to
								alleviate the risk of material price escalations through
								tracking all products “good-through” pricing dates, lead time
								tracking, establish early procurement, create material storage
								plans, and achieve on-time scheduling.
							</p>
							<ul class="list">
								<li
									v-for="item in projectPlanning"
									class="block border border-[var(--grey-2)] p-3"
								>
									<p class="font-bold">{{ item }}</p>
								</li>
							</ul>
							<div>
								<h3 class="text-xl font-bold">Materals lead time report</h3>
								<p class="mt-1 text-sm">
									Our internal reporting that allows you to know the procurement
									status of all materials, as well as when you can expect to
									receive your materials based on the updated lead times and
									scheduled installation dates.
								</p>
							</div>
						</template>
					</Split>

					<article id="project-execution">
						<div class="space-y-16">
							<SideBy class="mb-8">
								<template v-slot:text>
									<div class="flex-1">
										<h2 data-section="project-execution" class="mb-4">
											Project Execution
										</h2>
										<p class="">
											Through our full-time onsite supervision, a dedicated
											field technician and QAQC protocols, we are able to
											implement our “Zero Punch” philosophy reducing all quality
											punch list items to almost “0”.
										</p>
									</div>
								</template>
							</SideBy>
							<div>
								<p class="font-bold text-xl mb-6">
									Why we’re your easy button: Our step by step execution process
								</p>
								<Content>
									<template
										v-for="item in projectExecutionSteps"
										:key="item.id"
									>
										<Card component="h4" :svg="item.svg" :image="item.image">
											<p>{{ item.content }}</p>
										</Card>
									</template>
								</Content>
							</div>

							<div class="p-8 bg-[var(--grey-2)]">
								<Content>
									<template v-for="item in projectExecution" :key="item.id">
										<Card :title="item.title" :component="item.component">
											<p>{{ item.content }}</p>
											<ul v-if="item.list">
												<li v-for="item in item.list">
													{{ item }}
												</li>
											</ul>
										</Card>
									</template>
								</Content>
							</div>
							<div>
								<h3 class="text-xl font-bold">
									Daily reports and weekly production reports
								</h3>
								<p class="mt-1 text-sm">
									his tool gives you the ability to track our performance and
									pace throughout the project.
								</p>
							</div>
							<div>
								<h3 class="text-xl font-bold">Mobilization reports</h3>
								<p class="mt-1 text-sm">
									This internal planning tool allows us to take the project
									schedule and break out all of the materials needed based on
									their install date. This will help our team both manage and
									sequence all deliveries, as well as stage materials at the job
									site.
								</p>
							</div>
						</div>
					</article>

					<!-- <Split id="system-genetated-tools">
						<template v-slot:image>
							<nuxt-img
								src="../public/systemGeneratedTools.jpg"
								alt="A man working on a spread sheet"
								fit="cover"
								sizes="sm:100vw md:700px lg:700px"
								format="webp"
								class="absolute inset-0 h-full w-full object-cover"
							/>
						</template>
						<template v-slot:content>
							<div>
								<h2 data-section="system-genetated-tools mb-1">
									System Generated Tools
								</h2>
								<p class="">
									Our tools are system generated to equip you with what you
									need, when you need it.
								</p>
							</div>

							<div class="space-y-4">
								<div class="block" v-for="item in systemTools">
									<h3 class="text-xl font-bold">
										{{ item.title }}
									</h3>

									<p class="mt-1 text-sm">
										{{ item.content }}
									</p>
								</div>
							</div>
						</template>
					</Split> -->
				</main>
			</Sidebar>
		</div>
	</div>
</template>

<style scoped>
	.menu {
		display: none;
	}

	@media (min-width: 740px) {
		.menu {
			display: block;
		}
	}

	ol {
		max-inline-size: none;
		position: sticky;
	}
	.menu-list {
		margin-left: var(--s-1);
	}

	.card {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--s1);
	}

	@container (min-width: 700px) {
		.card {
			display: flex;
			width: 46%;
		}
	}

	aside a.active::before {
		content: '';
		height: 1rem;
		width: 1rem;
		background-color: var(--focus-yellow);
		position: absolute;
	}

	.list {
		@apply mt-8 grid grid-cols-1 gap-8;
	}

	@container (min-width: 640px) {
		.list {
			@apply grid-cols-2;
		}
	}

	@container (min-width: 1024px) {
		.list {
			@apply grid-cols-3;
		}
	}
</style>
