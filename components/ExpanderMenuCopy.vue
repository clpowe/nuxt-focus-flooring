<script setup lang="ts">
	const accordion = ref(null)

	function useAccordion(e: Event) {
		const activePanel = (e.target as Element).closest('.accordion-panel')

		if (!activePanel) return
		toggleAccordion(activePanel)
	}

	function toggleAccordion(panalToActivate: Element) {
		const buttons =
			panalToActivate.parentElement?.querySelectorAll('.accordion-trigger')
		const links = panalToActivate.parentElement?.querySelectorAll('.alink')
		const contents =
			panalToActivate.parentElement?.querySelectorAll('.accordion-content')

		buttons?.forEach((button) => {
			button.setAttribute('aria-expanded', 'false')
		})
		links?.forEach((link) => {
			link.style.display = 'none'
			link.setAttribute('disabled', 'true')
		})
		contents?.forEach((content) => {
			content.setAttribute('aria-hidden', 'true')
		})

		panalToActivate.querySelector('.alink').style.display = 'block'
		panalToActivate.querySelector('.alink').setAttribute('disabled', 'false')
		panalToActivate
			.querySelector('.accordion-trigger')
			?.setAttribute('aria-expanded', 'true')
		panalToActivate
			.querySelector('.accordion-content')
			?.setAttribute('aria-hidden', 'false')
	}
</script>

<template>
	<div class="wrapper" @focusin="useAccordion">
		<div class="accordion" ref="accordion" @click="useAccordion">
			<div class="accordion-panel">
				<h3 id="panel1-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel1-content"
						aria-expanded="true"
					>
						<span id="panel1-title" class="accordion-title">Industrial</span>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#industrial"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel1-content"
					aria-labelledby="panel1-heading"
					aria-hidden="true"
					role="region"
				>
					<UButton
						@focus="useAccordion"
						label="See our Industrial Portfolio"
						color="focusyellow"
						aria-hidden="true"
						class="text-midnight-950 alink"
						to="/portfolio?category=Industrial"
					/>
					<NuxtImg
						class="accordion-image"
						src="/Industrial.jpeg"
						fit="fit"
						sizes="400px sm:640px md:500px lg:700px"
						format="webp"
						loading="lazy"
						alt="A digital rendering of the extirior of an Amazon facility"
					/>
				</div>
			</div>
			<div class="accordion-panel">
				<h3 id="panel2-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel2-content"
						aria-expanded="false"
					>
						<span id="panel2-title" class="accordion-title">Healthcare</span>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#healthcare"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel2-content"
					aria-labelledby="panel2-heading"
					aria-hidden="true"
					role="region"
				>
					<UButton
						label="See our Healthcare Portfolio"
						color="focusyellow"
						class="text-midnight-950 bottom-8 right-8 alink"
						to="/portfolio?category=Healthcare"
					/>
					<NuxtImg
						class="accordion-image"
						src="/healthcare.jpeg"
						fit="fit"
						format="webp"
						loading="lazy"
						sizes="400px sm:640px md:500px lg:700px"
						alt="A cozy area with wooden tables and chairs arranged neatly in the center of the room."
					/>
				</div>
			</div>
			<div class="accordion-panel">
				<h3 id="panel3-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel3-content"
						aria-expanded="false"
					>
						<span id="panel3-title" class="accordion-title">Aviation</span>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#aviation"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel3-content"
					aria-labelledby="panel3-heading"
					aria-hidden="true"
					role="region"
				>
					<!-- <p
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex,
						ipsa dolores amet sunt fugiat voluptate.</p
					> -->
					<UButton
						label="See our Aviation Portfolio"
						color="focusyellow"
						class="text-midnight-950 alink"
						to="/portfolio?category=Aviation"
					/>
					<NuxtImg
						class="accordion-image"
						src="/aviation.jpeg"
						fit="fit"
						format="webp"
						loading="lazy"
						sizes="400px sm:640px md:500px lg:700px"
						alt="Airport terminal, featuring modern design and spacious waiting areas."
					/>
				</div>
			</div>
			<div class="accordion-panel">
				<h3 id="panel4-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel4-content"
						aria-expanded="false"
					>
						<span id="panel4-title" class="accordion-title">Residential</span>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#residential"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel4-content"
					aria-labelledby="panel4-heading"
					aria-hidden="true"
					role="region"
				>
					<UButton
						label="See our Residential Portfolio"
						color="focusyellow"
						class="text-midnight-950 alink"
						to="/portfolio?category=Residential+%26+Hospitality"
					/>
					<NuxtImg
						class="accordion-image"
						src="/ResidentialHospitality.jpeg"
						fit="fit"
						format="webp"
						loading="lazy"
						sizes="400px sm:640px md:500px lg:700px"
						alt="The grand entrance to the EVEN awaits, adorned with a majestic sign, beckoning guests to indulge in luxury and elegance."
					/>
				</div>
			</div>
			<div class="accordion-panel">
				<h3 id="panel5-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel5-content"
						aria-expanded="false"
					>
						<span id="panel5-title" class="accordion-title"
							>Worship Center</span
						>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#worship"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel5-content"
					aria-labelledby="panel5-heading"
					aria-hidden="true"
					role="region"
				>
					<UButton
						label="See our Worship Centers Portfolio"
						color="focusyellow"
						class="text-midnight-950 alink"
						to="/portfolio?category=Worship+Centers"
					/>
					<NuxtImg
						class="accordion-image"
						src="/WorshipCenters.jpeg"
						fit="fit"
						format="webp"
						loading="lazy"
						sizes="400px sm:640px md:500px lg:700px"
						alt="A church with purple lighting and pews, creating a serene ambiance."
					/>
				</div>
			</div>
			<div class="accordion-panel">
				<h3 id="panel6-heading">
					<button
						class="accordion-trigger"
						aria-controls="panel6-content"
						aria-expanded="false"
					>
						<span id="panel6-title" class="accordion-title">Office</span>
						<svg aria-hidden="true" class="accordion-icon">
							<use xlink:href="#office"></use>
						</svg>
					</button>
				</h3>
				<div
					class="accordion-content"
					id="panel5-content"
					aria-labelledby="panel6-heading"
					aria-hidden="true"
					role="region"
				>
					<UButton
						label="See our Commercial Office Portfolio"
						color="focusyellow"
						class="text-midnight-950 alink"
						to="/portfolio?category=Commercial+Office+%26+Retail"
					/>
					<NuxtImg
						class="accordion-image"
						src="/RivergateTower.jpeg"
						fit="fit"
						format="webp"
						loading="lazy"
						sizes="400px sm:640px md:500px lg:700px"
						alt="Modern office with glass doors, showcasing sleek design and professional ambiance."
					/>
				</div>
			</div>
		</div>
	</div>

	<svg width="0" height="0" class="hidden">
		<symbol
			id="aviation"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 64 64"
		>
			<path
				d="M13.2,36.4c-1,.8-1.3,2.4-.6,3.5h0c.5.9,1.5,1.4,2.6,1.3,2.7-.3,7.1-1.2,12-2.7,0-1.1.2-2,.2-2.7.1-1.5,1.1-2.8,2.5-3.4,0,0,6.8-2.8,6.8-2.8,2.6-1.1,5.3,1.3,4.8,3.9,4.4-1.8,8.6-3.9,12-6.2,1.3-.9,1.8-2.5,1.2-4-.5-1.2-1.6-2-2.9-2.1-.8,2.7-3.8,4-3.9,4-.5.2-1.1,0-1.3-.5s0-1.1.5-1.3c0,0,2.3-1,2.8-2.8-2.4-1.3-4.2-.8-6.2-.1l-24.5,10-6.8-4.3c-.3-.2-.6-.2-.9,0l-3.7,1.5c-.6.3-.8,1.1-.4,1.6,0,0,5.8,7.2,5.8,7.2Z"
			></path>
			<path
				d="M25.2,26l10.1-4.1-11.9-5.6c-.3-.1-.5-.1-.8,0l-3.7,1.5c-.6.3-.8,1.1-.3,1.6,0,0,6.6,6.6,6.6,6.6Z"
			></path>
			<path
				d="M37.5,31.4l-6.8,2.8c-.7.3-1.2.9-1.2,1.7-.3,3.4-1,12.7-1,12.8,0,.7.7,1.3,1.4,1l3.7-1.5c.3-.1.5-.3.6-.6l5.4-14.3c.5-1.2-.8-2.4-2-1.9Z"
			></path>
		</symbol>
		<symbol
			id="education"
			enable-background="new 0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<g>
				<path
					d="m301 287c0-8.271-6.729-15-15-15s-15 6.729-15 15v15h15c8.271 0 15-6.729 15-15z"
				></path>
				<path
					d="m226 272c-8.271 0-15 6.729-15 15s6.729 15 15 15h15v-15c0-8.271-6.729-15-15-15z"
				></path>
				<path
					d="m191 477c0 19.299 15.701 35 35 35h60c19.299 0 35-15.701 35-35v-25h-130z"
				></path>
				<path
					d="m120.34 182c-12.687 22.835-19.34 48.389-19.34 75 0 50.229 24.547 97.554 65.664 126.594 12.977 9.166 21.477 23.134 23.721 38.406h50.615v-90h-15c-24.813 0-45-20.187-45-45s20.187-45 45-45c11.517 0 22.032 4.354 30 11.495 7.968-7.142 18.483-11.495 30-11.495 24.813 0 45 20.187 45 45s-20.187 45-45 45h-15v90h50.615c2.244-15.272 10.744-29.241 23.722-38.406 41.116-29.04 65.663-76.365 65.663-126.594 0-26.612-6.653-52.166-19.341-75z"
				></path>
				<path
					d="m262.676 119.502c-2.198.331-4.446.499-6.676.499s-4.479-.168-6.683-.5l-128.317-19.248v51.747h270v-51.747z"
				></path>
				<path
					d="m458.225 30.166-200.001-30c-1.475-.221-2.975-.221-4.45 0l-200 30c-8.519 1.278-12.777 8.061-12.774 14.842v89.992c0 8.284 6.716 15 15 15s15-6.716 15-15v-72.582l182.775 27.416c1.475.221 2.975.221 4.45 0l200.001-30c17.033-2.555 17.033-27.113-.001-29.668z"
				></path>
			</g>
		</symbol>
		<symbol
			id="healthcare"
			enable-background="new 0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<g>
				<path
					d="m351.498 414.84c-1.462 37.279-32.23 67.16-69.861 67.16-38.56 0-69.931-31.371-69.931-69.931v-91.437c-4.986.511-10.044.775-15.162.775-5.008 0-9.957-.253-14.838-.743v91.405c0 55.102 44.829 99.931 99.931 99.931 54.169 0 98.407-43.324 99.89-97.142-4.877.763-9.872 1.162-14.959 1.162-5.126 0-10.158-.406-15.07-1.18z"
				></path>
				<path
					d="m366.568 253.183c-36.682 0-66.418 29.737-66.418 66.418 0 36.682 29.737 66.418 66.418 66.418s66.418-29.737 66.418-66.418c.001-36.681-29.736-66.418-66.418-66.418zm15 81.419h-30v-30h30z"
				></path>
				<path
					d="m245.868 54.97v-12.485h38.207v91.773c0 48.264-39.266 87.53-87.531 87.53-48.264 0-87.53-39.266-87.53-87.53v-91.773h38.481v12.485h30v-54.97h-30v12.485h-68.482v161.392c0 64.806 52.724 117.53 117.531 117.53s117.53-52.724 117.53-117.53v-161.392h-67.839-.368v-12.485h-29.632-.368v54.97z"
				></path>
			</g>
		</symbol>
		<symbol
			id="industrial"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
		>
			<path
				d="M476,423.5H438.5v-25H73.5v25H36a7.5,7.5,0,0,0,0,15H476a7.5,7.5,0,0,0,0-15Z"
			></path>
			<path
				d="M398.43,141a7.5,7.5,0,0,0,7.5,7.5H434.5a7.5,7.5,0,0,0,0-15H405.93A7.5,7.5,0,0,0,398.43,141Z"
			></path>
			<path
				d="M400.71,112.79a7.48,7.48,0,0,0,3.74-1L429.19,97.5a7.5,7.5,0,0,0-7.5-13L397,98.79a7.5,7.5,0,0,0,3.76,14Z"
			></path>
			<path
				d="M397,183.21l24.74,14.29a7.5,7.5,0,1,0,7.5-13l-24.74-14.28a7.5,7.5,0,1,0-7.5,13Z"
			></path>
			<path
				d="M77.5,148.5h28.57a7.5,7.5,0,0,0,0-15H77.5a7.5,7.5,0,0,0,0,15Z"
			></path>
			<path
				d="M82.81,97.5l24.74,14.28a7.5,7.5,0,1,0,7.5-13L90.31,84.5a7.5,7.5,0,0,0-7.5,13Z"
			></path>
			<path
				d="M107.55,170.22,82.81,184.5a7.5,7.5,0,0,0,7.5,13l24.74-14.29a7.5,7.5,0,1,0-7.5-13Z"
			></path>
			<path
				d="M260.16,109.76,278.5,122V73.5h-45V122l18.34-12.23A7.5,7.5,0,0,1,260.16,109.76Z"
			></path>
			<path
				d="M363.5,81a7.5,7.5,0,0,0-7.5-7.5H293.5V136a7.5,7.5,0,0,1-11.66,6.24L256,125l-25.84,17.23A7.5,7.5,0,0,1,218.5,136V73.5H156a7.5,7.5,0,0,0-7.5,7.5V223.5h215ZM201,208.5H186a7.5,7.5,0,0,1,0-15h15a7.5,7.5,0,0,1,0,15Zm40,0H226a7.5,7.5,0,0,1,0-15h15a7.5,7.5,0,0,1,0,15Z"
			></path>
			<circle cx="340" cy="311" r="7.5"></circle>
			<circle cx="424" cy="311" r="7.5"></circle>
			<circle cx="256" cy="311" r="7.5"></circle>
			<path
				d="M439.5,238.5H72.5a72.5,72.5,0,0,0,0,145h367a72.5,72.5,0,0,0,0-145Zm-5,120H77.5a47.5,47.5,0,0,1,0-95h357a47.5,47.5,0,0,1,0,95Z"
			></path>
			<path
				d="M434.5,278.5H77.5a32.5,32.5,0,0,0,0,65h357a32.5,32.5,0,0,0,0-65ZM88,333.5A22.5,22.5,0,1,1,110.5,311,22.52,22.52,0,0,1,88,333.5Zm84,0A22.5,22.5,0,1,1,194.5,311,22.52,22.52,0,0,1,172,333.5Zm84,0A22.5,22.5,0,1,1,278.5,311,22.52,22.52,0,0,1,256,333.5Zm84,0A22.5,22.5,0,1,1,362.5,311,22.52,22.52,0,0,1,340,333.5Zm84,0A22.5,22.5,0,1,1,446.5,311,22.52,22.52,0,0,1,424,333.5Z"
			></path>
			<circle cx="172" cy="311" r="7.5"></circle>
			<circle cx="88" cy="311" r="7.5"></circle>
		</symbol>
		<symbol
			id="office"
			enable-background="new 0 0 511.462 511.462"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 511.462 511.462"
		>
			<g>
				<path
					d="m476.256 170.401h-51.944c-8.284 0-15 6.716-15 15s6.716 15 15 15h10.972v71.496c0 8.038-6.539 14.577-14.576 14.577h-12.248c-4.781-10.233-15.159-17.325-27.199-17.325h-95.613v-67.815h56.671c22.691 0 41.086-18.395 41.086-41.086v-32.572c0-70.514-57.162-127.676-127.674-127.676-70.512 0-127.674 57.162-127.674 127.674v32.572c0 22.691 18.395 41.086 41.087 41.086h56.671v67.815h-90.985c-12.821 0-24.008 6.972-29.997 17.325h-14.079c-8.038 0-14.577-6.539-14.577-14.577v-71.496h10.973c8.284 0 15-6.716 15-15s-6.716-15-15-15h-51.945c-8.284 0-15 6.716-15 15s6.716 15 15 15h10.972v71.496c0 24.58 19.997 44.577 44.577 44.577h12.247c4.781 10.232 15.159 17.325 27.199 17.325h110.53v56.857h-60.085c-32.788 0-59.463 26.675-59.463 59.491l.01 5.361c-8.944 5.193-14.962 14.868-14.962 25.955 0 16.569 13.431 30 30 30s30-13.431 30-30c0-11.118-6.053-20.816-15.038-25.998l-.01-5.345c0-16.246 13.217-29.463 29.463-29.463h60.085v34.83c-8.964 5.188-15 14.874-15 25.977 0 16.569 13.432 30 30 30s30-13.431 30-30c0-11.102-6.036-20.789-15-25.977v-34.83h60.085c16.246 0 29.463 13.217 29.463 29.463v4.829c0 .168.02.33.025.497-9.005 5.177-15.073 14.886-15.073 26.018 0 16.569 13.431 30 30 30s30-13.431 30-30c0-11.094-6.027-20.774-14.98-25.965.007-.184.028-.364.028-.55v-4.829c0-32.788-26.675-59.463-59.463-59.463h-60.085v-56.857h110.53c12.04 0 22.418-7.093 27.199-17.325h12.248c24.579 0 44.576-19.997 44.576-44.577v-71.496h10.973c8.284 0 15-6.716 15-15s-6.716-14.999-15-14.999z"
				></path>
			</g>
		</symbol>
		<symbol
			fill="#000000"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			id="residential"
		>
			<path
				d="M 8.0292969 3 C 7.3832969 3 6.7773437 3.3118906 6.4023438 3.8378906 L 2.5644531 9.2089844 C 2.3274531 9.5399844 2.5656562 10 2.9726562 10 L 3 10 L 3 20 A 1.0001 1.0001 0 0 0 4 21 L 20 21 A 1.0001 1.0001 0 0 0 21 20 L 21 10 L 21.027344 10 C 21.434344 10 21.672547 9.5399844 21.435547 9.2089844 L 17.597656 3.8378906 C 17.222656 3.3128906 16.616703 3 15.970703 3 L 8.0292969 3 z M 8.5 5.0996094 L 11.402344 9.1621094 C 11.777344 9.6881094 12.383297 10 13.029297 10 L 19 10 L 19 19 L 11 19 L 11 14 C 11 13.448 10.552 13 10 13 L 8 13 C 7.448 13 7 13.448 7 14 L 7 19 L 5 19 L 5 10 L 8.5 5.0996094 z M 14 13 C 13.448 13 13 13.448 13 14 L 13 16 C 13 16.552 13.448 17 14 17 L 16 17 C 16.552 17 17 16.552 17 16 L 17 14 C 17 13.448 16.552 13 16 13 L 14 13 z"
			></path>
		</symbol>
		<symbol
			fill="#000000"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 26 26"
			id="worship"
		>
			<path
				d="M 12 0 L 12 2 L 10 2 L 10 4 L 12 4 L 12 7.40625 L 8 12 L 8 15.0625 L 2.53125 18.125 C 2.046875 18.390625 1.871094 19 2.140625 19.484375 C 2.40625 19.96875 3.015625 20.144531 3.5 19.875 L 4 19.59375 L 4 26 L 10 26 L 10 24 C 10 22.34375 11.34375 21 13 21 C 14.65625 21 16 22.34375 16 24 L 16 26 L 22 26 L 22 19.53125 L 22.4375 19.8125 C 22.730469 20.0625 23.144531 20.125 23.496094 19.964844 C 23.851563 19.804688 24.082031 19.457031 24.085938 19.070313 C 24.09375 18.683594 23.878906 18.328125 23.53125 18.15625 L 18 14.53125 L 18 12 L 14 7.40625 L 14 4 L 16 4 L 16 2 L 14 2 L 14 0 Z M 13 12.9375 C 14.140625 12.9375 15.0625 13.859375 15.0625 15 C 15.0625 16.140625 14.140625 17.0625 13 17.0625 C 11.859375 17.0625 10.9375 16.140625 10.9375 15 C 10.9375 13.859375 11.859375 12.9375 13 12.9375 Z"
			></path>
		</symbol>
	</svg>
</template>

<style scoped>
	img {
		max-width: 100%;
		display: block;
		mix-blend-mode: luminosity;
		opacity: 0.2;

		transition:
			mix-blend-mode 500ms ease-in-out,
			opacity 500ms ease-in-out;
	}

	.accordion-panel:has([aria-expanded='true']) img {
		mix-blend-mode: normal;
		opacity: 1;
	}

	.wrapper {
		margin-inline: auto;
	}

	.accordion {
		--_button-size: 3rem;
		--_panel-padding: 0.75rem;
		--_panel-gap: 1rem;
		--_animation: 500ms ease-in-out;

		display: flex;
		flex-direction: column;

		contain: content;
	}

	@media (min-width: 45em) {
		.accordion {
			flex-direction: row;
			height: 90vh;
			max-height: 700px;
		}
	}

	.accordion * {
		margin: 0;
	}

	.accordion-panel {
		position: relative;
		isolation: isolate;
		background-color: var(--midnight);
		flex-basis: calc(var(--_button-size) + (var(--_panel-padding) * 2));
		overflow: hidden;
		padding: var(--_panel-padding);
		padding-right: calc(var(--_panel-padding) * 4);
		transition:
			flex-basis var(--_animation),
			flex-grow var(--_animation);
	}

	@media (perfers-reduced-motion: no-preference) {
		.accordion-panel {
			transition: none;
		}
	}

	.accordion-panel:has([aria-expanded='true']) {
		flex-basis: clamp(15rem, 30vh, 25rem);
		flex-grow: 1;
	}

	.accordion-trigger {
		outline: 0;
	}
	.accordion-panel:focus-within {
		outline: 3px solid oklch(87.74% 0.2 117.97);
		outline-offset: 3px;
	}

	.accordion-content > p {
		color: white;
		display: grid;
		transform: translateY(2rem);
		opacity: 0;
		height: 100%;

		transition:
			transform 500ms 250ms ease-in-out,
			opacity 500ms 250ms ease-in-out;

		margin-left: calc(var(--_button-size) + var(--_panel-gap));
	}

	@media (perfers-reduced-motion) {
		.accordion-content > p {
			transition: none;
		}
	}

	.accordion-panel:has([aria-expanded='true']) p {
		transform: translateY(0);
		opacity: 1;
	}

	.accordion-title {
		font-size: 1.5em;
		color: white;
		text-align: left;
		width: max-content;

		position: relative;
		isolation: isolate;

		display: grid;
		align-items: center;

		transform-origin: -2.5rem;
		rotate: 90deg;

		transition: rotate var(--_animation);
	}

	.accordion-panel:has([aria-expanded='true']) .accordion-title {
		rotate: 0deg;
	}

	@media (max-width: 44.999em) {
		.accordion-title {
			rotate: 0deg;
		}

		.accordion-title::after {
			content: '';
			position: absolute;

			left: calc((var(--_panel-gap) + var(--_button-size)) * -1);
			width: calc(100% + var(--_button-size) * 2);
			height: var(--_button-size);
			background: hsl(0 0% 0%/0.5);
			z-index: -1;
		}
	}

	.accordion-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		z-index: -1;

		transition: filter var(--_animation);
	}

	.accordion-panel:has([aria-expanded='true']) .accordion-image {
		filter: brightness(1);
	}

	.accordion-trigger {
		display: flex;
		align-items: center;
		gap: var(--_panel-gap);
		flex-direction: row-reverse;
		background: transparent;
		border: 0;
		padding: 0;
	}

	.accordion-icon {
		fill: oklch(34.79% 0.02 161.5);
		background-color: oklch(87.74% 0.2 117.97);
		width: var(--_button-size);
		aspect-ratio: 1/1;
		padding: 0.5rem;
		border-radius: 50%;
		z-index: 10;
	}

	.alink {
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		transform: translateX(100%);
		opacity: 0;

		transition:
			transform 500ms 250ms ease-in-out,
			opacity 500ms 250ms ease-in-out;
	}

	.accordion-panel:has([aria-expanded='true']) .alink {
		@starting-style {
			transform: translateX(155%);
		}
		transform: translateX(0);
		opacity: 1;
		bottom: 2rem;
		right: 2rem;
	}

	.accordion-panel:has([aria-expanded='false']) .alink {
		@starting-style {
			transform: translateX(0);
		}
		position: absolute;
		bottom: 2rem;
		right: 2rem;
		transform: translateX(100%);
		opacity: 0;
	}
</style>
