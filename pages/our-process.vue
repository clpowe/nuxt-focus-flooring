<script setup>
	useHead({
		title: 'Focus Flooring - Our Process'
	})

	const nuxtApp = useNuxtApp()
	const { activeHeadings, updateHeadings } = useScrollspy()

	const precon = ref(null)
	const project = ref(null)
	const execution = ref(null)

	const main = ref()

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
			title: 'Pre-Installation Planning',
			content:
				'Before installation, we have a dedicated superintendent survey the job site to determine how materials will be staged.'
		},
		{
			id: 2,
			svg: '02',
			title: 'Efficient Flooring Installation',
			content:
				'Then, our highly trained crews follow a clear plan to rapidly install your flooring. Depending on the complexity of your materials and installation, our crews may train specifically for your project.'
		},
		{
			id: 3,
			svg: '03',
			title: 'Embracing a "Zero-Punch" Philosophy',
			content:
				'Our team has a “zero-punch” philosophy. As we progress through the project, our teams are creating our own internal punch list and correcting items as we go. The goal of this approach is to ensure that once we receive the client and owner’s punch list, our items to correct are minimum.'
		},
		{
			id: 4,
			svg: '04',
			title: 'Streamlined Solutions',
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
				'“Beginning with the end in mind” is a saying we live by. We begin our closeout documents before we are mobilized on the job site to ensure our clients have all of the product, maintenance and product care information they need readily available. Proper maintenance is crucial to how your floors will perform over time. Poorly maintained floors can result in surface damage, faded fibers and surfaces, premature wear and costly repairs or replacements.'
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
				'Our goal is to produce the outcome our client desires, without compromising standards or deadlines.'
			]
		}
	]

	const links = computed(() => [
		{
			label: 'Preconstruction',
			to: '#preconstruction',
			active:
				activeHeadings.value.includes('preconstruction') &&
				!activeHeadings.value.includes('project-planning')
		},
		{
			label: 'Project Planning',
			to: '#project-planning',
			active:
				activeHeadings.value.includes('project-planning') &&
				!activeHeadings.value.includes('project-execution')
		},
		{
			label: 'Project Execution',
			to: '#project-execution',
			active: activeHeadings.value.includes('project-execution')
		}
	])

	nuxtApp.hooks.hookOnce('page:finish', () => {
		updateHeadings([
			document.querySelector('#preconstruction'),
			document.querySelector('#project-planning'),
			document.querySelector('#project-execution')
		])
	})

	const ui = {
		base: 'text-midnight-950',
		active: 'text-midnight-950  hover:text-midnight-950',
		inactive: 'text-midnight-950 hover:text-midnight-950'
	}
</script>

<template>
	<div>
		<Hero>Our <span>Process</span> </Hero>
		<header
			class="flex sticky top-0 bg-neutral-300 z-10 sm:justify-start sm:flex-nowrap w-full text-sm py-4 justify-center"
		>
			<UHeaderLinks
				:links="links"
				class="sticky top-0 mx-auto text-midnight-950"
				:ui="ui"
			/>
		</header>

		<div class="container relative">
			<main id="scrollspy-1" class="main max-w-[85ch] mx-auto" ref="main">
				<section
					id="preconstruction"
					ref="precon"
					class="max-w-[85rem] px-4 py-10 lg:py-14 mx-auto"
				>
					<div class="mx-auto">
						<div class="grid gap-12">
							<div>
								<h2
									class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"
								>
									Pre&shyconstruction
								</h2>
								<p class="mt-3 text-gray-800 dark:text-gray-400">
									Our team will become familiar with the project documents to
									ensure our scope is fully captured. We will then partner with
									you to ensure you stay within your budget throughout all
									pricing efforts and obtain cost certainty for your project.
								</p>
							</div>

							<div class="space-y-6 lg:space-y-10">
								<!-- Icon Block -->
								<template v-for="item in preconstruction" :key="item.id">
									<div class="flex">
										<svg-icon :name="item.svg" class="h-10" />
										<div class="ms-5 sm:ms-8">
											<h3
												class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
											>
												{{ item.title }}
											</h3>
											<p class="mt-1 text-gray-600 dark:text-gray-400">
												{{ item.content }}
											</p>
										</div>
									</div>
								</template>
								<!-- End Icon Block -->
							</div>
						</div>
					</div>
				</section>

				<section
					id="project-planning"
					ref="project"
					class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
				>
					<h2
						class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"
					>
						Project Planning
					</h2>
					<div class="mt-3 grid md:grid-cols-2 gap-12">
						<div class="">
							<p class="text-gray-800 dark:text-gray-400">
								Our internal project planning systems and tools allow us to
								alleviate the risk of material price escalations through
								tracking all products “good-through” pricing dates, lead time
								tracking, establish early procurement, create material storage
								plans, and achieve on-time scheduling.
							</p>
							<div class="mt-4">
								<nuxt-img
									src="threeUniquesSupporting.jpg"
									alt="Woman working in a warehouse"
									fit="cover"
									sizes="sm:100vw md:700px lg:700px"
									format="webp"
									class="inset-0 h-full w-full object-cover object-top rounded-md"
								/>
							</div>
						</div>
						<!-- End Col -->

						<div class="space-y-2 lg:space-y-4">
							<!-- Icon Block -->
							<div class="flex">
								<!-- Icon -->
								<div class="">
									<p>
										<strong>Materials lead time report</strong> &mdash; Our
										internal reporting that allows you to know the procurement
										status of all materials, as well as when you can expect to
										receive your materials based on the updated lead times and
										scheduled installation dates.
									</p>
								</div>
							</div>
							<!-- End Icon Block -->
							<!-- Icon Block -->
							<div class="flex">
								<!-- Icon -->
								<div class="">
									<p>
										<strong>Mobilization Reporting</strong> &mdash; Material
										Handling & Sequencing: Our team will take the project
										schedule and break out all of the materials needed based on
										their installation date. This will help our team both manage
										and sequence all deliveries, as well as stage materials at
										the job site.
									</p>
								</div>
							</div>
							<!-- End Icon Block -->
							<!-- Icon Block -->
							<div class="flex">
								<!-- Icon -->
								<div class="">
									<p>
										<strong>Submittals</strong>
									</p>
								</div>
							</div>
							<!-- End Icon Block -->
							<!-- Icon Block -->
							<div class="flex">
								<!-- Icon -->
								<div class="">
									<p>
										<strong>Project Staffing Planning</strong>
									</p>
								</div>
							</div>
							<!-- End Icon Block -->
							<!-- Icon Block -->
							<div class="flex">
								<!-- Icon -->
								<div class="">
									<p>
										<strong>Pre-Execution Analysis</strong>
									</p>
								</div>
							</div>
							<!-- End Icon Block -->
						</div>
						<!-- End Col -->
					</div>
				</section>
				<!-- End Icon Blocks -->

				<section
					id="project-execution"
					ref="execution"
					class="max-w-[85rem] px-4 py-10 lg:py-14 mx-auto"
				>
					<div class="mx-auto">
						<div class="grid gap-12">
							<div>
								<h2
									class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white"
								>
									Project Execution
								</h2>
								<p class="mt-4 font-bold text-xl mb-2">
									Why we’re your easy button: Our step by step execution process
								</p>
								<p class="text-gray-800 dark:text-gray-400">
									Through our full-time onsite supervision, a dedicated field
									technician and QAQC protocols, we are able to implement our
									“Zero Punch” philosophy reducing all quality punch list items
									to almost “0”.
								</p>
							</div>

							<div class="space-y-6 lg:space-y-10">
								<template v-for="item in projectExecutionSteps" :key="item.id">
									<!-- Icon Block -->

									<div class="flex">
										<!-- Icon -->
										<span
											class="flex-shrink-0 inline-flex justify-center items-center size-[46px]"
										>
											<svg-icon :name="item.svg" class="h-10" />
										</span>
										<div class="ms-5 sm:ms-8">
											<h3
												class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
											>
												{{ item.title }}
											</h3>
											<p class="mt-1 text-gray-600 dark:text-gray-400">
												{{ item.content }}
											</p>
										</div>
									</div>
									<!-- End Icon Block -->
								</template>
							</div>
						</div>
						<div class="pt-14">
							<div class="grid sm:grid-cols-2 gap-8">
								<template v-for="item in projectExecution" :key="item.id">
									<Card :title="item.title" :component="item.component">
										<p class="mb-4">{{ item.content }}</p>

										<ul
											v-if="item.list"
											role="list"
											class="list-disc list-outside ml-4"
										>
											<li v-for="item in item.list">
												{{ item }}
											</li>
										</ul>
									</Card>
								</template>
							</div>
						</div>
					</div>
				</section>
			</main>
			<!-- </Sidebar> -->
		</div>
	</div>
</template>

<style scoped>
	.active {
		border-bottom: 2px solid var(--focus-yellow);
		border-spacing: 0.25rem;
	}

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
</style>
