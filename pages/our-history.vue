<script setup>
	import { animate, scroll, timeline } from 'motion'

	useHead({
		title: 'Focus Flooring - Our History'
	})

	const dates = [
		{
			year: '2005',
			description:
				'Father & son duo, Allen Greene Sr. &amp; Allen Greene II work together in the residential flooring business, with Allen Greene Sr. leading the business and managing several crews, and Allen II, 16 at the time, helping out on the weekends.'
		},
		{
			year: '2006',
			description:
				'Upon completing high school, Allen Greene II starts a small residential flooring business to gain accounts with additional flooring vendors while Allen Greene Sr continues to manage multiple crews under his own flooring business.'
		},
		{
			year: '2008',
			description:
				'The 2008 housing market failure occurs. Allen Greene II &amp; Allen Green Sr lose everything within both of their businesses.'
		},
		{
			year: '2009',
			description:
				'In efforts to start something fresh and building something bigger than themselves, Allen Greene II &amp; Allen Greene Sr come together to expand and launch “Envision” as a residential construction company focused on high-end renovations/additions and light commercial construction.'
		},

		{
			year: '2013',
			description:
				'After working a few years in residential construction and experiencing its limits to growth, Allen Greene II & Allen Greene Sr decided to move Envision from conducting business in the residential industry, to working within the commercial construction industry doing commercial tenant improvements and renovations.'
		},
		{
			year: '2014',
			description:
				'Allen Greene II &amp; Allen Greene Sr work on one of their first commercial projects – Revealing Truth Ministries Interior Renovations.'
		},

		{
			year: '2015',
			description:
				'After experiencing additional limitations once entering into the commercial construction industry,Allen Greene II &amp; Allen Greene Sr decided to utilize their background in residential flooring to start the commercial flooring division at Envision.<br/></br>This was done to help deepen the company’s knowledge and understanding of the commercial construction industry on large scale projects, to build relationships within the commercial construction industry, and to build revenue.'
		},

		{
			year: '2016',
			description:
				'With the construction management division growing in the background, Envision focused on building the commercial flooring division and went from employing 2 team members to more than 50 team members, with majority of those team members supporting the flooring division. Jacques Duval became a full-time employee with a focus on creating marketing materials, video and media production, photography, business development, and sales.'
		},
		{
			year: '2017 - 2020',
			description:
				'During this time, Envision’s commercial flooring division focused on building key relationships with clients and flooring vendors, while scaling the business to be able to compete on numerous major flooring projects in the Tampa Bay Area.'
		},
		{
			year: '2021',
			description:
				'The flooring division begins to outgrow being a “division” and begins to require a space of its own. The Envision team discovered that though both the construction management division and flooring division of the business are both client, systems, and process driven, the flooring business at this scale required very different systems, processes and team members than the construction management business.'
		},
		{
			year: '2022',
			description:
				'The flooring division at Envision becomes a separate company; Focus Flooring is created with the focus of offering advanced solutions in commercial flooring and wall tile, and a guarantee to our clients “we eliminate your risks through our process”.<br/><br/><strong>A CM Approach to Flooring:</strong> Taking our experience in construction, Focus Flooring builds the internal company systems and processes with the client in mind; making sure to bring real value to each and every project.'
		},
		{
			year: '2023',
			description: `Creating Focus Flooring from the flooring division of Envision gave existing team members the opportunity to step up into new roles to take the vision to new heights.<br/><br/>
			<strong>Jacques Duval, a previous leader at Envision’s flooring division, is appointed as President of Focus Flooring.</strong>
			<br/><br/>Over the years from website development, process implementation and system building, Jacques has always had the ability and willingness to hear the heart of the owners of Envision on “what” needed to be done and God would always give him the “how”.`
		},
		{
			year: '',
			description: `In 2014, Jacques Duval worked at Revealing Truth Ministries, the location of Allen II and Allen Sr’s first commercial project. At the time, Jacques Duval committed one of his days off from work to caring for and detailing Revealing Truth Ministries' fleet vehicles each week. Jacques saw a lot of Allen Greene II & Allen Greene Sr during this time and believed in what they were building; a business bigger than themselves. Jacques was eager to help the Greene’s however he could, so in-between washes on his days off, Jacques would lend a helping hand to the Revealing Truth Ministries Interior Renovations project. Allen Greene Sr would allow Jacques to support the demo, jobsite cleanup, and help wherever else an extra hand could be used.`
		},
		{
			year: '',
			description: `Outside of Jacques’ time spent assisting Allen Greene II & Allen Greene Sr on the jobsite, Jacques acquired and developed an array of skills, such as web design and photography that positioned him to continue to support the company’s vision in a few of the gaps they were experiencing at the time as a small business.<br/><br/>In 2016, Jacques Duval became a full-time employee at Envision Flooring with a focus on creating marketing materials, photography, business development, and sales.`
		},
		{
			year: '',
			description: `Over the next few years, Jacques’ understanding of the flooring business and all it entails continued to expand. Jacques played a huge part in helping to grow the various departments of the flooring division at Envision by assisting the preconstruction team in establishing consistent processes, the field team with coordination and logistics efforts, assisting the office team with establishing consistent procurement efforts, project management protocols, helping build a proprietary ecosystem that help supports the company’s operations, to now, he has become an effective conduit connecting the field to the office while helping the teams accomplish the goals set forth.`
		}
	]

	const itemRefs = ref()

	onMounted(() => {
		itemRefs.value.forEach((item) => {
			const sequence = [
				[item.children[0], { opacity: [0, 1], x: [100, 0] }],
				[(item.children[1], { opacity: [0, 1], x: [100, 0] })],
				[item.children[0], { opacity: [1, 0], y: [0, -100] }, { at: '<' }],
				[item.children[1], { opacity: [1, 0], y: [0, -100] }, { at: '<' }]
			]
			scroll(timeline(sequence), {
				target: item,
				offset: ['start end', 'end end', 'start start', 'end start']
			}),
				{ margin: '0px 50% 0px 0px' }
		})

		scroll(animate('.progress-bar', { scaleY: [0, 1] }))
	})
</script>

<template>
	<div>
		<Hero>Our <span>history</span> </Hero>
		<div class="container mb-8">
			<YouTube />
		</div>
		<main id="main" class="max-w-2xl mx-auto flex overflow-x-hidden">
			<div class="progress-bar"></div>
			<div class="space-y-20">
				<article
					id=""
					class="container item"
					v-for="(date, index) in dates"
					ref="itemRefs"
				>
					<h2 class="margin-bottom year" v-if="date.year">{{ date.year }}</h2>
					<p v-html="date.description"></p>
				</article>
			</div>
		</main>
	</div>
</template>

<style scoped>
	.progress-bar {
		width: 1rem;
		background-color: var(--focus-yellow);
		transform-origin: 50% 0%;
	}

	.year {
		font-size: var(--s5);
	}

	p {
		max-width: 65ch;
	}
</style>
