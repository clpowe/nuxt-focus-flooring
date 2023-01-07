<script setup>
	const preconstrunction = [
		{
			id: 1,
			component: 'h3',
			title: 'Detailed Proposal',
			content:
				'We go above and beyond as it relates to the level of detail provided in our proposals. This approach ensures our clients have all of the essential information they need at their fingertips and allows for quick reference as project changes come about.'
		},
		{
			id: 2,
			component: 'h3',
			title: 'Specification and Design',
			content:
				'Whether you require expert assistance specifying the best flooring materials or already have complete specifications, we can meet any design vision. We’ll show you samples of different materials and ensure you start your project with the right solution.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'LEED Certification',
			content:
				'We have extensive experience delivering the biggest LEED-certified flooring installations and can identify energy-efficient flooring materials that support your sustainability efforts.'
		},
		{
			id: 4,
			component: 'h3',
			title: 'Life Cycle Costing',
			content:
				'Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.'
		}
	]

	const projectExecution = [
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
		},
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
</script>

<template>
	<div>
		<h1>Our Process</h1>
		<div class="container">
			<Sidebar>
				<nav>
					<ul>
						<li>
							<a href="#preconstruction">preconstruction</a>
						</li>
						<li>
							<a href="#project-planning">Project planning</a>
						</li>
						<li>
							<a href="#project-execution">Project execution</a>
						</li>
						<li>
							<a href="#system-generated-tools">System genetated tools</a>
						</li>
					</ul>
				</nav>
				<div id="main">
					<Stack size="--s5">
						<article>
							<Stack size="--s5">
								<section id="preconstruction">
									<h2>Preconstrunction</h2>
									<Box v-for="item in preconstrunction">
										<Card
											:key="item.id"
											:image="item.image"
											:title="item.title"
											:component="item.component"
										>
											<p>{{ item.content }}</p>
										</Card>
									</Box>
								</section>

								<section id="project-planning">
									<Stack size="--s-1">
										<h2>Project Planning</h2>
										<p>
											Our goal is to take all of our insight and understanding
											from the preconstruction phase and take it to the next
											level of understanding during our project planning phase
											to ensure a smooth transition occurs from preconstruction
											to project execution. Our project planning phase consists
											of:
										</p>
										<ul>
											<li><p>Submittals</p></li>
											<li>
												<p>Material Lead Time Report</p>
											</li>
											<li>
												<p>Project Staffing Plan</p>
											</li>
											<li>
												<p>Sequence/Scheduling</p>
											</li>
											<li>
												<p>
													Material Handling - Staging, Dispatch, Inventory &
													Warehouse
												</p>
											</li>
											<li>
												<p>Pre- Execution Analysis</p>
											</li>
										</ul>
									</Stack>
								</section>

								<section id="project-execution">
									<Stack size="--s-1">
										<h2>Project Execution</h2>
										<p>
											Our specialty field supervisors and project managers keep
											your job site highly organized and clean, so you enjoy the
											fastest installation.
										</p>
										<Box>
											<ol>
												<li>
													<p>
														Before installation, we have a dedicated
														superintendent survey the job site to determine how
														materials will be staged.
													</p>
												</li>
												<li>
													<p>
														Then, our highly trained crews follow a clear plan
														to rapidly install your flooring. Depending on the
														complexity of your materials and installation, our
														crews may train specifically for your project.
													</p>
												</li>
												<li>
													<p>
														Our team has a “zero-punch” philosophy. As we
														progress through the project, our teams are creating
														our own internal punch list and correcting items as
														we go. The goal of this approach is to ensure that
														once we receive the client and owner’s punch list,
														our items to correct are minimum.
													</p>
												</li>
												<li>
													<p>
														Because of our execution system, our team can
														efficiently complete any commercial flooring
														installation project. Our experienced team will
														coordinate material procurement so that you’re never
														waiting on a specialty floor. We will also find
														time-sensitive material alternatives to help stay in
														line with your project schedule
													</p>
												</li>
											</ol>
										</Box>

										<Box v-for="item in projectExecution">
											<Card
												:key="item.id"
												:title="item.title"
												:component="item.component"
											>
												<p>{{ item.content }}</p>
												<ul v-if="item.list">
													<li v-for="item in item.list">
														{{ item }}
													</li>
												</ul>
											</Card>
										</Box>
									</Stack>
								</section>

								<section id="system-generated-tools">
									<Stack size="--s-1">
										<h2>System Generated Tools</h2>
										<p>
											Our tools are system generated to equip you with what you
											need, when you need it.
										</p>

										<Box v-for="item in systemTools">
											<Card
												:key="item.id"
												:title="item.title"
												:component="item.component"
											>
												<p>{{ item.content }}</p>
											</Card>
										</Box>
									</Stack>
								</section>
							</Stack>
						</article>
					</Stack>
				</div>
			</Sidebar>
		</div>
	</div>
</template>
