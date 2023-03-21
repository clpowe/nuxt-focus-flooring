<script setup>
	import { animate, scroll, timeline } from 'motion'
	import { Motion } from 'motion/vue'

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
			year: '2009',
			description:
				'Jacques Duval and Allen Greene II meet and develop a friendship.'
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
			year: '2014',
			description:
				'Jacques Duval committed one of his days off from work to caring for and detailing Revealing Truth Ministries&#39; fleet vehicles each week. Jacques saw a lot of Allen Greene II &amp; Allen Greene Sr during this time and believed in what they were building; a business bigger than themselves. Jacques was eager to help the Greene’s however he could, so in-between washes on his days off, Jacques would lend a helping hand on the Revealing Truth Ministries Interior Renovations project. Allen Greene Sr would allow Jacques to support the demo, jobsite cleanup, and help wherever else an extra hand could be used.'
		},
		{
			year: '2015',
			description:
				'After experiencing additional limitations once entering into the commercial construction industry,Allen Greene II &amp; Allen Greene Sr decided to utilize their background in residential flooring to start the commercial flooring division at Envision.<br/></br>This was done to help deepen the company’s knowledge and understanding of the commercial construction industry on large scale projects, to build relationships within the commercial construction industry, and to build revenue.'
		},
		{
			year: '2015',
			description:
				'Outside of his time spent assisting Allen Greene II &amp; Allen Greene Sr on the jobsite, Jacques acquired and developed an array of skills, such as Web Design to photography, which positioned him to continue to support the vision of Envision in a few of the gaps they were experiencing at the time as a small business.'
		},
		{
			year: '2016',
			description:
				'With the construction management division growing in the background, Envision focused on building the commercial flooring division and went from employing 2 team members to more than 50 team members, with majority of those team members supporting the flooring division. Jacques Duval became a full-time employee with a focus on creating marketing materials, video and media production, photography, business development, and sales.'
		},
		{
			year: '2017 - 2020',
			description:
				'During this time, Envision’s commercial flooring division focused on building key relationships with clients and flooring vendors, while scaling the business to be able to compete on numerous major flooring projects in the Tampa Bay Area. (show image of most popular projects - heron, 1050 water street, USFSP student housing, tampa heights, skycenter. (show a variety of sectors)<br/><br/>Jacques Duval continues to play a big role in helping to grow the various departments of the flooring division at Envision, assisting the preconstruction team in establishing consistent processes, the field team with coordination and logistics efforts, assisting the office team with establishing consistent procurement efforts, project management protocols, helping build a proprietary ecosystem that help supports the company’s operations, to now, he has become an effective conduit connecting the field to the office while helping the teams accomplish the goals set by leadership.'
		},
		{
			year: '2021',
			description:
				'The flooring division begins to outgrow being a “division” and begins to require a space of its own. The Envision team discovered that though both the construction management division and flooring division of the business are both client, systems, and process driven, the flooring business at this scale required very different systems, processes and team members than the construction management business.'
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
		<main id="main" class="max-w-2xl mx-auto flex">
			<div class="progress-bar"></div>
			<div class="space-y-20">
				<article
					id=""
					class="container item"
					v-for="(date, index) in dates"
					ref="itemRefs"
				>
					<h2 class="mb-4 year">{{ date.year }}</h2>
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
