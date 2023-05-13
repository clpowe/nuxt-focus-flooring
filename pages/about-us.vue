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
			title: 'Find a better way',
			content: 'Impossible is for the unwilling.',
			list: [
				'Adapt to change',
				'Impossible is never a fact, it’s a belief',
				'“I get to” vs. “I have to” attitude',
				'Don’t make excuses, make adjustments'
			]
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
			title: 'Be the light',
			content:
				'Being positive should never be based on circumstances but based on an internal belief.',
			list: ['Optimism', 'Always assume positive intent']
		}
	]
	const threeUniques = [
		{
			id: 1,
			component: 'h3',
			title: 'Minority Owned',
			content:
				'Focus Flooring is 100% minority-owned with the ability to compete on large scale projects at the prime level.'
		},
		{
			id: 2,
			component: 'h3',
			title: 'CM Approach',
			content:
				'Our approach to flooring will be seen from the conception of your project to completion, because we approach it with a CM mindset. This approach ultimately ensures we are focused on the things that matters most to our clients from the very beginning.'
		},
		{
			id: 3,
			component: 'h3',
			title: 'Versatile',
			content:
				'Our ability to specialize in all aspects of commercial flooring, with the ability to scale up or scale down based on the project need allows our team to be versatile when it comes to meeting your flooring needs on any project.'
		}
	]
</script>

<template>
	<div>
		<Hero>About <span>Us</span></Hero>
		<main id="main" class="main max-w-4xl mx-auto py-8">
			<article id="three-uniques" class="container">
				<h2 class="margin-bottom">Three Uniques</h2>
				<div class="mx-auto parent">
					<Card
						v-for="item in threeUniques"
						:key="item.id"
						:title="item.title"
						:component="item.component"
					>
						<p>{{ item.content }}</p>
					</Card>
				</div>
			</article>

			<article id="our-purpose" class="container">
				<h2 class="mb-4">Our Purpose</h2>
				<p>
					At Focus Flooring, we believe our purpose is to illuminate the
					industry with partnership, positivity and precision.
				</p>
			</article>

			<article id="core-values" class="container">
				<h2 class="margin-bottom">Core Values</h2>

				<p class="mb-8">
					Our core values are the framework in which we evaluate our choices and
					make all decisions. When our core values are in harmony with our daily
					actions and behaviors - that is where true success lies.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:grid-cols-3">
					<div v-for="item in coreValues" :key="item.id" class="carousel-item">
						<div>
							<h3>{{ item.title }}</h3>
							<p class="mt-2">{{ item.content }}</p>
						</div>
					</div>
				</div>
			</article>
		</main>
	</div>
</template>

<style scoped>
	ul {
		list-style-position: inside;
		counter-reset: li;
	}

	li {
		display: grid;
		grid-template-columns: auto 1fr;

		gap: var(--s-5);
		align-items: baseline;

		counter-increment: li;
	}

	li::before {
		font-size: var(--s2);
	}

	.parent {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
	}
</style>
