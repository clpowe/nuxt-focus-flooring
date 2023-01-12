<script setup>
	definePageMeta({
		layout: 'homepage'
	})

	const whatWeDo = [
		{
			id: 1,
			component: 'h3',
			image: '/IconSeven.svg',
			title: 'Carpet Flooring',
			content:
				'We will help you specify, procure and install carpet for any commercial application.'
		},
		{
			id: 2,
			component: 'h3',
			image: '/IconThirteen.svg',
			title: 'Wood Flooring',
			content:
				'With countless solid and engineered wood flooring options available today, we’ll guide you to the best hardwood for your budget, design and facility.'
		},
		{
			id: 3,
			component: 'h3',
			image: '/IconOne.svg',
			title: 'Ceramic and Stone tile',
			content:
				'We have completed installations of nearly every ceramic and stone  tile including detailed patterns, mosaics and large format tile.'
		},
		{
			id: 4,
			component: 'h3',
			image: '/IconThree.svg',
			title: 'Concrete Surfacing',
			content:
				'From concrete polish to resinous flooring or terrazzo, concrete surfacing may be the perfect solution for your facility.'
		},
		{
			id: 5,
			component: 'h3',
			image: '/IconTen.svg',
			title: 'LVT Flooring',
			content:
				'Luxury vinyl tile (LVT) is one of the most popular selections for a  range of commercial applications with beautiful design and patterns available to meet the performance demands of your building.'
		},
		{
			id: 6,
			component: 'h3',
			image: '/IconFour.svg',
			title: 'Resilient Flooring',
			content:
				'With innovative, new materials and constructions emerging in the market, resilient flooring can help you achieve a one-of-a-kind look  that lasts. Heat weld sheet vinyl, athletic. flooring, and more.'
		},
		{
			id: 7,
			component: 'h3',
			image: '/IconSix.svg',
			title: 'Flooring Accessories',
			content:
				'From transitions to stair treads, flooring accessories are specialty products that will tie together your design and product needs.'
		}
	]
</script>

<template>
	<header>
		<HomeHero
			>Eliminating your <span>risk</span> through <span>our process</span>
		</HomeHero>
		<NuxtLink to="#">contact us</NuxtLink>
		<NuxtLink to="#">Learn more</NuxtLink>
	</header>
	<main id="main" class="container">
		<Stack size="--s5">
			<section>
				<Framer :width="16" :height="9">
					<img src="/placeholder.webp" alt="" />
				</Framer>
				<h2>Who we are</h2>
				<p>
					At Focus Flooring, our advanced solutions in commercial flooring
					coupled with our 55+ years of combined flooring expertise, allows us
					to be a leader in the flooring industry.
				</p>
				<p>
					Focus Flooring is a MBE-owned firm based out of Tampa, FL. with a
					<strong
						>guarantee to eliminate your risk through our internal
						processes.</strong
					>
				</p>
			</section>

			<section>
				<Stack size="--s-3">
					<h2>What we do</h2>
					<p>Commercial flooring Services</p>
				</Stack>
				<Grid>
					<Box padding="--s-5" v-for="item in whatWeDo">
						<Card
							:key="item.id"
							:image="item.image"
							:title="item.title"
							:component="item.component"
						>
							<p>{{ item.content }}</p>
						</Card>
					</Box>
				</Grid>
			</section>

			<section>
				<h2>Sectores we serve</h2>
				<article>
					<h3>Industrial</h3>
				</article>
				<article>
					<h3>Healthcare</h3>
				</article>
				<article>
					<h3>Aviation</h3>
				</article>
				<article>
					<h3>Residential & Hospitality</h3>
				</article>
				<article>
					<h3>Worship Centers</h3>
				</article>
				<article>
					<h3>Education</h3>
				</article>
				<article>
					<h3>Office & Retail</h3>
				</article>
			</section>

			<section>
				<h2>How we do it</h2>
				<ol type="1">
					<Stack size="--s0">
						<li>
							<h3>Preconstrunction</h3>
							<p>
								Through our comprehensive preconstruction process, our team will
								produce a quality and detailed proposal and an overall
								preconstruction experience that you can count on.
							</p>
						</li>
						<li>
							<h3>System Generated Tools</h3>
							<p>
								Project planning ensures a smooth transition occurs from
								preconstruction to project execution to ensure we get ahead of
								potential issues and eliminate risk for our clients early on.
							</p>
						</li>
						<li>
							<h3>Project Planning</h3>
							<p>
								Our internal tools such as our “Material Lead Time” report,
								“Production” report and “Mobilization” report, are system
								generated to equip you with what you need, when you need it.
							</p>
						</li>
						<li>
							<h3>Project Execution</h3>
							<p>
								Our process and approach to execution comes from many years of
								experience, staying up to date with the latest installation
								methods, products, trainings in the market and our overall
								desire to please our clients.
							</p>
						</li>
					</Stack>
				</ol>
				<img src="" alt="" />
			</section>

			<section>
				<h2>Testimonials</h2>
				<Grid>
					<Framer :width="16" :height="9">
						<img src="/placeholder.webp" alt="" />
					</Framer>
					<Framer :width="16" :height="9">
						<img src="/placeholder.webp" alt="" />
					</Framer>
					<Framer :width="16" :height="9">
						<img src="/placeholder.webp" alt="" />
					</Framer>
				</Grid>
			</section>
		</Stack>
	</main>
</template>

<style></style>
