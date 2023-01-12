<script setup>
	useHead({
		title: 'Focus Flooring - About us'
	})

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
</script>

<template>
	<div>
		<Hero> About Us </Hero>

		<main id="main" class="container">
			<article id="our-purpose">
				<Stack size="--s-1">
					<h2>Our Purpose</h2>
					<p>
						At Focus Flooring, we believe our purpose is to illuminate the
						industry with partnership, positivity and precision.
					</p>
				</Stack>
			</article>
			<article id="core-values">
				<Stack size="--s-1">
					<h2>Core Values</h2>
					<p>
						Our core values are the framework in which we evaluate our choices
						and make all decisions. When our core values are in harmony with our
						daily actions and behaviors - that is where true success lies.
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
				</Stack>
			</article>
			<article id="three-uniques">
				<Stack size="--s-1">
					<h2>Three Uniqes</h2>
					<Box v-for="item in threeUniqes" padding="--s-1">
						<Card
							:key="item.id"
							:title="item.title"
							:component="item.component"
						>
							<p>{{ item.content }}</p>
						</Card>
					</Box>
				</Stack>
			</article>
		</main>
	</div>
</template>
