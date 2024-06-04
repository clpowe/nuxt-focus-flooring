<script setup>
	const steps = [
		{
			icon: 'how_one',
			step: 1,
			title: 'Preconstruction',
			description:
				'We will partner with you to ensure you stay within your budget throughout all pricing efforts and obtain cost certainty for your project.',
			link: '/our-process#preconstruction'
		},
		{
			icon: 'how_three',
			step: 2,
			title: 'Project Planning',
			description:
				'Our internal tools such as our “Material Lead Time” report, “Production” report and “Mobilization” report, are system generated to equip you with what you need, when you need it.',
			link: '/our-process#project-planning'
		},
		// {
		// 	icon: 'how_two',
		// 	step: 3,
		// 	title: 'System Generated Tools',
		// 	description:
		// 		'Project planning ensures a smooth transition occurs from preconstruction to project execution to ensure we get ahead of potential issues and eliminate risk for our clients early on.',
		// 	link: '/our-process#project-planning'
		// },

		{
			icon: 'how_four',
			step: 3,
			title: 'Project Execution',
			description:
				'Through our full-time onsite supervision, a dedicated field technician and QAQC protocols, we are able to implement our “Zero Punch” philosophy reducing all quality punch list items to almost “0”.',
			link: '/our-process#project-execution'
		}
	]
</script>

<template>
	<div class="max-w-[500px] mx-auto how grid pb-14 gap-5 content-center">
		<h2
			class="font-bold uppercase text-4xl lg:text-4xl text-[var(--focus-white)] mb-8 self-center"
		>
			<span
				class="underline decoration-[var(--focus-yellow)] decoration-4 underline-offset-8"
				>How</span
			>
			We do it
		</h2>
		<div class="w-2 bg-[var(--focus-white)] line"></div>
		<div class="steps z-10 grid gap-10">
			<div
				v-for="step in steps"
				:key="step.step"
				class="group z-10 gap-8 grid space-y-8"
			>
				<div class="grid grid-cols-[.7fr_auto] gap-4 z-10">
					<p
						class="font-bold text-5xl text-[var(--midnight)] bg-[var(--focus-white)] h-14 w-14 flex items-center justify-center rounded z-50"
						>{{ step.step }}</p
					>

					<div class="">
						<div class="icon">
							<svg-icon :name="step.icon" />
						</div>
						<h3 class="mt-5 font-bold text-2xl text-white">{{ step.title }}</h3>
						<p class="mt-1 text-neutral-400">
							{{ step.description }}
						</p>
						<NuxtLink class="uppercase font-bold text-[var(--focus-white)]"
							>Learn More</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.steps {
		grid-row: 2;
		grid-column-start: 1;
		isolation: isolate;
	}

	.line {
		margin-left: 1.5rem;
		grid-column-start: 1;
		grid-row-start: 2;
		height: 0%;
		z-index: 1;
		animation: 2.5s linear forwards scale-up;
		animation-timeline: view();
		animation-range: contain;
	}

	.icon {
		fill: var(--focus-yellow-light);
		color: var(--focus-yellow-light);
		font-size: 5rem;
		height: 5rem;
		width: 5rem;
	}

	@keyframes scale-up {
		from {
			height: 0;
		}
		to {
			height: 37rem;
		}
	}

	#progressbar {
		animation: 300ms linear forwards scale-up;
	}
</style>
