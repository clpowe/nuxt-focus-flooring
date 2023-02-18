<script setup>
	import gsap from 'gsap'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	const howcontainer = ref(null)
	const how = ref(null)
	const how2 = ref(null)
	const how3 = ref(null)
	const how4 = ref(null)

	// get other plugins:

	onMounted(() => {
		gsap.registerPlugin(ScrollTrigger)

		const cards = gsap.utils.toArray('.how-con')
	})
</script>
<template>
	<div class="howcontainer" ref="howcontainer">
		<div class="container">
			<h2 ref="title" class="title">How we do it</h2>
			<ol type="1">
				<li class="how-con how" ref="how">
					<Sidebar>
						<div>
							<svg-icon name="how_one" />
						</div>
						<div class="content">
							<div class="number-container">
								<div class="number">1</div>
							</div>
							<Stack size="--s-1">
								<h3>Preconstrunction</h3>
								<p>
									Through our comprehensive preconstruction process, our team
									will produce a quality and detailed proposal and an overall
									preconstruction experience that you can count on.
								</p>
							</Stack>
						</div>
					</Sidebar>
				</li>

				<li class="how-con how2" ref="how2">
					<Sidebar>
						<div>
							<svg-icon name="how_two" />
						</div>
						<div class="content">
							<div class="number-container">
								<div class="number">2</div>
							</div>
							<h3>System Generated Tools</h3>
							<p>
								Project planning ensures a smooth transition occurs from
								preconstruction to project execution to ensure we get ahead of
								potential issues and eliminate risk for our clients early on.
							</p>
						</div>
					</Sidebar>
				</li>

				<li class="how-con how3" ref="how3">
					<Sidebar>
						<div>
							<svg-icon name="how_three" />
						</div>
						<div class="content">
							<div class="number-container">
								<div class="number">3</div>
							</div>
							<h3>Project Planning</h3>
							<p>
								Our internal tools such as our “Material Lead Time” report,
								“Production” report and “Mobilization” report, are system
								generated to equip you with what you need, when you need it.
							</p>
						</div>
					</Sidebar>
				</li>

				<li class="how-con how4" ref="how4">
					<Sidebar>
						<div>
							<svg-icon name="how_four" />
						</div>

						<div class="content">
							<div class="number-container">
								<div class="number">4</div>
							</div>

							<h3>Project Execution</h3>
							<p>
								Our process and approach to execution comes from many years of
								experience, staying up to date with the latest installation
								methods, products, trainings in the market and our overall
								desire to please our clients.
							</p>
						</div>
					</Sidebar>
				</li>
			</ol>
		</div>
	</div>
</template>

<style scoped>
	.title {
		position: sticky;
	}
	.howcontainer {
		position: relative;
		padding-block: var(--s3);
		background-color: var(--midnight);
	}

	h2 {
		color: var(--focus-white);
	}
	.how-con {
		color: var(--focus-white);
		z-index: 1;
	}

	.image {
		width: 100%;
	}

	.number-container {
		background: var(--focus-yellow);
		display: grid;
		place-content: center;
		height: 80px;
		width: 80px;
		border-radius: 8px;
		margin-bottom: var(--s3);
	}

	.number {
		color: var(--midnight);
		font-size: 64px;
		font-weight: 700;
	}

	ol {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		padding: 1rem;
		margin: auto;
		width: 100%;

		max-inline-size: none;
	}

	li {
		max-inline-size: none;
		height: 100vh;
		display: grid;
		align-items: center;

		width: 100%;
	}

	svg {
		width: 100%;
		height: auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
