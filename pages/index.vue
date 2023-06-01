<script setup>
	const whatWeDo = [
		{
			id: 1,
			component: 'h3',
			svg: 'carpet',
			image: '/carpet.svg',
			title: 'Carpet Flooring',
			content:
				'We will help you specify, procure and install carpet for any commercial application.'
		},
		{
			id: 2,
			component: 'h3',
			svg: 'wood',
			image: '/wood.svg',
			title: 'Wood Flooring',
			content:
				'With countless solid and engineered wood flooring options available today, we’ll guide you to the best hardwood for your budget, design and facility.'
		},
		{
			id: 3,
			component: 'h3',
			svg: 'ceramic',
			image: '/ceramic.svg',
			title: 'Ceramic and Stone tile',
			content:
				'We have completed installations of nearly every ceramic and stone  tile including detailed patterns, mosaics and large format tile.'
		},
		{
			id: 4,
			component: 'h3',
			svg: 'concrete',
			image: '/concrete.svg',
			title: 'Concrete Surfacing',
			content:
				'From concrete polish to resinous flooring or terrazzo, concrete surfacing may be the perfect solution for your facility.'
		},
		{
			id: 5,
			component: 'h3',
			svg: 'lvt',
			image: '/lvt.svg',
			title: 'LVT Flooring',
			content:
				'Luxury vinyl tile (LVT) is one of the most popular selections for a  range of commercial applications with beautiful design and patterns available to meet the performance demands of your building.'
		},
		{
			id: 6,
			component: 'h3',
			svg: 'resilient',
			image: '/resilient.svg',
			title: 'Resilient Flooring',
			content:
				'With innovative, new materials and constructions emerging in the market, resilient flooring can help you achieve a one-of-a-kind look  that lasts. Heat weld sheet vinyl, athletic. flooring, and more.'
		},
		{
			id: 7,
			component: 'h3',
			svg: 'laminate',
			image: '/laminate.svg',
			title: 'Commercial Grade Laminate Flooring',
			content:
				'Versatile, cost-effective materials in a variety of colors and installation patterns to meet nearly any design vision within touch budget constraints.'
		},
		{
			id: 8,
			component: 'h3',
			svg: 'accessories',
			image: '/IconSix.svg',
			title: 'Flooring Accessories',
			content:
				'From transitions to stair treads, flooring accessories are specialty products that will tie together your design and product needs.'
		}
	]
</script>

<template>
	<header>
		<HomeHero>
			<template v-slot:header>
				<span>Eliminating your risk</span> through our process
			</template>
			<template v-slot:actions>
				<div class="actions">
					<NuxtLink to="/contact/general-contact" class="btn btn-accent"
						>contact us</NuxtLink
					>
					<NuxtLink
						to="/our-process"
						quality="80"
						loading="lazy"
						format="webp"
						class="btn btn-outline btn-secondary"
						>Learn more</NuxtLink
					>
				</div>
			</template>
		</HomeHero>
	</header>
	<main id="main" class="main">
		<section class="container">
			<div class="mx-auto max-w-screen-xl py-8 sm:py-12 lg:py-16">
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
					<div class="pic relative h-64 sm:h-80 lg:order-last lg:h-full">
						<nuxt-img
							src="/WhoWeAre.png"
							alt=""
							sizes="sm:100vw md:700px lg:700px"
							fit="cover"
							class="absolute inset-0 h-full w-full object-cover"
							format="webp"
							quality="80"
						/>
					</div>

					<div class="lg:py-24">
						<h2 class="margin-bottom">Our Focus</h2>

						<div class="space-y-4">
							<p>
								At Focus Flooring, we offer advanced solutions in commercial
								flooring and wall tile.
							</p>
							<p>
								We have disciplined our flooring processes to focus on the
								details that greatly impact our clients and deliver a high
								quality service they can count on.
							</p>
							<p>
								Focus Flooring is a minority-owned firm based out of Tampa,
								Florida with a
								<strong
									>guarantee to eliminate your risk through our internal
									processes.</strong
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="container">
			<div class="flex-1 max-w-xl mx-0">
				<h2 class="margin-bottom">Our History</h2>
				<div class="space-y-6">
					<p>
						The flooring division begins to outgrow being a “division” and
						begins to require a space of its own. The Envision team discovered
						that though both the construction management division and flooring
						division of the business are both client, systems, and process
						driven, the flooring business at this scale required very different
						systems, processes and team members than the construction management
						business.
					</p>
					<p class="pb-4">
						Learn more about our journey from Envision Flooring to Focus
						Flooring
					</p>
					<NuxtLink
						prefetch
						to="/our-history"
						role="link"
						exactActiveClass="nuxt-link-active"
						class="btn btn-accent"
						>Our History</NuxtLink
					>
				</div>
			</div>
		</section>

		<div class="container mb-8">
			<YouTube />
		</div>

		<section class="container">
			<div size="--s-3" class="margin-bottom">
				<h2 class="margin-bottom">What we do</h2>
			</div>

			<Grid>
				<Card
					v-for="item in whatWeDo"
					:key="item.id"
					:svg="item.svg"
					:title="item.title"
					:style="'h-20 mb-4'"
					:component="item.component"
				>
					<p>{{ item.content }}</p>
				</Card>
			</Grid>
		</section>

		<section class="container">
			<Sectores />
		</section>

		<section>
			<How />
		</section>
	</main>
</template>

<style scoped>
	.actions {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	video {
		width: 100%;
	}

	.pic {
		position: relative;
		container-type: inline-size;
	}

	.pic::after {
		content: '';
		height: 100%;
		width: 100cqw;
		position: absolute;
		background-color: var(--focus-yellow);
		left: 5%;
		bottom: -5%;
		z-index: -1;
	}
</style>
