<script setup>
	const preconstrunction = [
		{
			id: 1,
			component: 'h4',
			title: 'Detailed Proposal',
			content:
				'We go above and beyond as it relates to the level of detail provided in our proposals. This approach ensures our clients have all of the essential information they need at their fingertips and allows for quick reference as project changes come about.'
		},
		{
			id: 2,
			component: 'h4',
			title: 'Specification and Design',
			content:
				'Whether you require expert assistance specifying the best flooring materials or already have complete specifications, we can meet any design vision. We’ll show you samples of different materials and ensure you start your project with the right solution.'
		},
		{
			id: 3,
			component: 'h4',
			title: 'LEED Certification',
			content:
				'We have extensive experience delivering the biggest LEED-certified flooring installations and can identify energy-efficient flooring materials that support your sustainability efforts.'
		},
		{
			id: 4,
			component: 'h4',
			title: 'Life Cycle Costing',
			content:
				'Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.Flooring maintenance costs often outweigh the initial costs of flooring installation and materials. That’s why we provide a Life Cycle Costing report—an objective, unbiased analysis of the long-term value you’ll receive from various flooring options.'
		}
	]

	const projectExecution = [
		{
			id: 1,
			component: 'h4',
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
			component: 'h4',
			title: 'QAQC (Mockups)',
			content:
				'Quality is a filter in which every aspect of what we do is channeled through. From start to finish we have a quality management system for each of our processes. We enforce policies that monitor our work before, during and after construction to ensure quality results.'
		},
		{
			id: 3,
			component: 'h4',
			title: 'Reporting (Field)',
			content:
				'Our field team completes daily reporting to ensure communication is seamless and expectations are met. We always look to ensure our clients are fully aware of what’s happening in the field, even when they are not in the field themselves.'
		},
		{
			id: 4,
			component: 'h4',
			title: 'Closeout',
			content:
				'“Beginning with the end in mind” is a saying we live by. We begin our closeout documents before we are mobilized on the jobsite to ensure our clients have all of the product, maintenance and product care information they need readily available. Proper maintenance is crucial to how your floors will perform over time. Poorly maintained floors can result in surface damage, faded fibers and surfaces, premature wear and costly repairs or replacements.'
		},
		{
			id: 5,
			component: 'h4',
			title: 'Safety',
			content:
				'Safety is our top priority. We care for the safety and health of both our customers and associates. Our comprehensive safety program has a dedicated safety officer and covers personal protective equipment, material handling, first aid, and safety procedures to make sure everyone leaves work healthy and safe.'
		}
	]

	const systemTools = [
		{
			id: 1,
			component: 'h4',
			title: 'Materals lead time report',
			content:
				'Our internal reporting that allows you to know the procurement status of all materials, as well as when you can expect to receive your materials based on the updated lead times and scheduled installation dates.'
		},
		{
			id: 2,
			component: 'h4',
			title: 'Daily reports and weekly production reports',
			content:
				'This tool gives you the ability to track our performance and pace throughout the project.'
		},
		{
			id: 3,
			component: 'h4',
			title: 'Mobilization reports',
			content:
				'This internal planning tool allows us to take the project schedule and break out all of the materials needed based on their install date. This will help our team both manage and sequence all deliveries, as well as stage materials at the job site.'
		}
	]

	const threeUniqes = [
		{
			id: 1,
			component: 'h3',
			title: 'Minority Owend',
			content:
				'Our internal reporting that allows you to know the procurement status of all materials, as well as when you can expect to receive your materials based on the updated lead times and scheduled installation dates.'
		},
		{
			id: 2,
			component: 'h3',
			title: 'CM Approach',
			content:
				'Our internal reporting that allows you to know the procurement status of all materials, as well as when you can expect to receive your materials based on the updated lead times and scheduled installation dates.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'Versatile',
			content:
				'Our internal reporting that allows you to know the procurement status of all materials, as well as when you can expect to receive your materials based on the updated lead times and scheduled installation dates.'
		}
	]

	const coreValues = [
		{
			id: 1,
			component: 'h3',
			title: 'Be the solution',
			content:
				'Our success and fulfillment depends on our willingness to always seek to help and provide solutions.',
			list: [
				'Help first',
				'We are the easy button',
				'We pride ourselves on being the solution',
				'Clarity Breeds Confidence'
			]
		},
		{
			id: 2,
			component: 'h3',
			title: 'Be the light',
			content:
				'Being positive should never be based on circumstances but based on an internal belief.',
			list: ['Optimism', 'Always assume positive intent']
		},
		{
			id: 3,
			component: 'h3',
			title: 'Be humbly confident',
			content: 'Hold your head high while never looking down on others.',
			list: [
				'Humility is the surest sign of strength',
				'Coachable',
				'Be empathetic towards others',
				'Ability without humility is a liability'
			]
		},
		{
			id: 4,
			component: 'h3',
			title: 'It’s bigger than you',
			content:
				'Your gifts, talents and resources aren’t only for you or about you. Without believing in something bigger than yourself you’ll only seek to serve yourself.',
			list: [
				'Always seek to give the advantage',
				'Do it as if it were your own',
				'Great leaders have a servants heart'
			]
		},
		{
			id: 5,
			component: 'h3',
			title: 'Find a better way',
			content: 'Impossible is for the unwilling.',
			list: [
				'Adapt to change',
				'Impossible is never a fact, it’s a belief',
				'“I get to” vs. “I have to” attitude',
				'Don’t make excuses, make adjustments'
			]
		}
	]
</script>

<template>
	<div>
		<h1>About us</h1>
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
				<li>
					<a href="#our-purpose">Our purpose</a>
				</li>
				<li>
					<a href="#three-uniques">Three uniques</a>
				</li>
				<li>
					<a href="#core-values">Core values</a>
				</li>
			</ul>
		</nav>
		<main id="main">
			<article>
				<h2>Our Process</h2>
				<section id="preconstruction">
					<h3>Preconstrunction</h3>
					<Card
						v-for="item in preconstrunction"
						:key="item.id"
						:image="item.image"
						:title="item.title"
						:component="item.component"
					>
						<p>{{ item.content }}</p>
					</Card>
				</section>

				<section id="project-planning">
					<h3>Project Planning</h3>
					<p>
						Our goal is to take all of our insight and understanding from the
						preconstruction phase and take it to the next level of understanding
						during our project planning phase to ensure a smooth transition
						occurs from preconstruction to project execution. Our project
						planning phase consists of:
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
								Material Handling - Staging, Dispatch, Inventory & Warehouse
							</p>
						</li>
						<li>
							<p>Pre- Execution Analysis</p>
						</li>
					</ul>
				</section>

				<section id="project-execution">
					<h3>Project Execution</h3>
					<p>
						Our specialty field supervisors and project managers keep your job
						site highly organized and clean, so you enjoy the fastest
						installation.
					</p>
					<ol>
						<li>
							<p>
								Before installation, we have a dedicated superintendent survey
								the job site to determine how materials will be staged.
							</p>
						</li>
						<li>
							<p>
								Then, our highly trained crews follow a clear plan to rapidly
								install your flooring. Depending on the complexity of your
								materials and installation, our crews may train specifically for
								your project.
							</p>
						</li>
						<li>
							<p>
								Our team has a “zero-punch” philosophy. As we progress through
								the project, our teams are creating our own internal punch list
								and correcting items as we go. The goal of this approach is to
								ensure that once we receive the client and owner’s punch list,
								our items to correct are minimum.
							</p>
						</li>
						<li>
							<p>
								Because of our execution system, our team can efficiently
								complete any commercial flooring installation project. Our
								experienced team will coordinate material procurement so that
								you’re never waiting on a specialty floor. We will also find
								time-sensitive material alternatives to help stay in line with
								your project schedule
							</p>
						</li>
					</ol>
					<Card
						v-for="item in projectExecution"
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
				</section>

				<section id="system-generated-tools">
					<h3>System Generated Tools</h3>
					<p>
						Our tools are system generated to equip you with what you need, when
						you need it.
					</p>
					<Card
						v-for="item in systemTools"
						:key="item.id"
						:title="item.title"
						:component="item.component"
					>
						<p>{{ item.content }}</p>
					</Card>
				</section>
			</article>

			<article id="our-purpose">
				<h2>Our Purpose</h2>
				<p>
					At Focus Flooring, we believe our purpose is to illuminate the
					industry with partnership, positivity and precision.
				</p>
			</article>

			<article id="three-uniques">
				<h2>Three Uniqes</h2>
				<Card
					v-for="item in threeUniqes"
					:key="item.id"
					:title="item.title"
					:component="item.component"
				>
					<p>{{ item.content }}</p>
				</Card>
			</article>

			<article id="core-values">
				<h2>Core Values</h2>
				<p>
					Our core values are the framework in which we evaluate our choices and
					make all decisions. When our core values are in harmony with our daily
					actions and behaviors - that is where true success lies.
				</p>
				<Card
					v-for="item in coreValues"
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
			</article>
		</main>
	</div>
</template>
