<script setup>
	useServerHead({
		title: 'Focus Flooring | Contact',
		link: [
			{
				rel: 'canonical',
				href: 'https://focus-flooring.com/contact'
			}
		]
	})
</script>

<template>
	<div>
		<Hero img="IMG_4743.jpg">Contact</Hero>

		<div class="container mx-auto">
			<Sidebar>
				<div class="space-y-4">
					<ul class="flex gap-4 text-lg uppercase font-bold md:flex-col">
						<li class="text-lg">
							<NuxtLink to="/contact/general-contact">General Contact</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/contact/project-consultation"
								>Project Consultation</NuxtLink
							>
						</li>
					</ul>

					<div class="w-full h-[2px] bg-slate-200"></div>
					<div class="space-y-3">
						<h3>Location</h3>
						<div>
							<address>
								5000 Acline Drive East, Suite B<br />
								Tampa, FL 33619, United States<br />

								P: 813-280-0621
							</address>
						</div>
						<div>
							<a
								target="_blank"
								href="https://www.google.com/maps/dir//5000+Acline+Dr+E+b,+Tampa,+FL+33619/@27.9550063,-82.4424899,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2c59ca4c4b3a3:0x4e9785d7987277!2m2!1d-82.4012904!2d27.9549366!3e0"
								>Get Directions</a
							>
						</div>
						<div>
							<h3 class="text-base mb-4">Tour Our New Office Space</h3>
							<img src="/QRCODE.webp" width="200" height="200" />
						</div>
					</div>
				</div>

				<main id="main">
					<NuxtPage />
				</main>
			</Sidebar>
		</div>
	</div>
</template>
