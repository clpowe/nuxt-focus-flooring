<script setup>
	const whatWeDo = [
		{
			id: 1,
			component: 'h3',
			svg: 'IconOne',
			image: '/IconSeven.svg',
			title: 'Carpet Flooring',
			content:
				'We will help you specify, procure and install carpet for any commercial application.'
		},
		{
			id: 2,
			component: 'h3',
			svg: 'IconTwo',
			image: '/IconThirteen.svg',
			title: 'Wood Flooring',
			content:
				'With countless solid and engineered wood flooring options available today, we’ll guide you to the best hardwood for your budget, design and facility.'
		},
		{
			id: 3,
			component: 'h3',
			svg: 'IconThree',
			image: '/IconOne.svg',
			title: 'Ceramic and Stone tile',
			content:
				'We have completed installations of nearly every ceramic and stone  tile including detailed patterns, mosaics and large format tile.'
		},
		{
			id: 4,
			component: 'h3',
			svg: 'IconFour',
			image: '/IconThree.svg',
			title: 'Concrete Surfacing',
			content:
				'From concrete polish to resinous flooring or terrazzo, concrete surfacing may be the perfect solution for your facility.'
		},
		{
			id: 5,
			component: 'h3',
			svg: 'IconFive',
			image: '/IconTen.svg',
			title: 'LVT Flooring',
			content:
				'Luxury vinyl tile (LVT) is one of the most popular selections for a  range of commercial applications with beautiful design and patterns available to meet the performance demands of your building.'
		},
		{
			id: 6,
			component: 'h3',
			svg: 'IconSix',
			image: '/IconFour.svg',
			title: 'Resilient Flooring',
			content:
				'With innovative, new materials and constructions emerging in the market, resilient flooring can help you achieve a one-of-a-kind look  that lasts. Heat weld sheet vinyl, athletic. flooring, and more.'
		},
		{
			id: 7,
			component: 'h3',
			svg: 'IconSeven',
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
				Eliminating your <span>risk</span> through <span>our process</span>
			</template>
			<template v-slot:actions>
				<div class="actions">
					<NuxtLink to="/contact/general-contact" class="btn btn-yellow"
						>contact us</NuxtLink
					>
					<NuxtLink to="/about-us" class="btn btn-outline">Learn more</NuxtLink>
				</div>
			</template>
		</HomeHero>
	</header>
	<main id="main" class="main">
		<section class="container">
			<SideBy class="mb-8">
				<template v-slot:text>
					<div class="flex-1">
						<h2 class="margin-bottom">Who we are</h2>
						<Stack size="--s-1">
							<p>
								At Focus Flooring, our advanced solutions in commercial flooring
								coupled with our 55+ years of combined flooring expertise,
								allows us to be a leader in the flooring industry.
							</p>
							<p>
								Focus Flooring is a MBE-owned firm based out of Tampa, FL. with
								a
								<strong
									>guarantee to eliminate your risk through our internal
									processes.</strong
								>
							</p>
						</Stack>
					</div>
				</template>
				<template v-slot:image>
					<div class="flex-1 relative pic">
						<nuxt-img
							src="/WhoWeAre.png"
							alt=""
							sizes="sm:100vw md:700px lg:700px"
							fit="cover"
							class="flex-1"
							format="webp"
							quality="80"
						/>
					</div>
				</template>
			</SideBy>

			<Sideby>
				<template v-slot:text> </template>
				<template v-slot:image> </template>
			</Sideby>
		</section>

		<section class="container">
			<div size="--s-3" class="margin-bottom">
				<h2>What we do</h2>
			</div>

			<Grid>
				<Card
					v-for="item in whatWeDo"
					:key="item.id"
					:svg="item.svg"
					:title="item.title"
					:style="'h-16 mb-4'"
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

		<section class="container">
			<h2>Testimonials</h2>
			<Grid>
				<video controls>
					<source
						src="https://ik.imagekit.io/demo/sample-video.mp4"
						type="video/mp4"
					/>

					Your browser does not support the video tag.
				</video>

				<video controls>
					<source
						src="https://ik.imagekit.io/demo/sample-video.mp4"
						type="video/mp4"
					/>

					Your browser does not support the video tag.
				</video>

				<video controls>
					<source
						src="https://ik.imagekit.io/demo/sample-video.mp4"
						type="video/mp4"
					/>

					Your browser does not support the video tag.
				</video>
			</Grid>
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
