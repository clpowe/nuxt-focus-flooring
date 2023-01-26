<script setup>
	defineProps({
		title: String
	})
</script>

<template>
	<!-- <div class="hero">
		<div class="container content">
			<Stack size="--s1">
				<h1>
					<slot name="header" />
				</h1>
				<slot name="actions" />
			</Stack>
			<div class="dot"></div>
		</div>
		<div class="image"></div>
	</div> -->
	<div class="holder">
		<div class="red">hello</div>
		<div class="blue">hello</div>
	</div>
</template>

<style scoped>
	.holder {
		display: grid;
		height: 600px;
		grid-template-columns: 1fr 1fr;
	}

	.red {
		background-color: red;
	}
	.blue {
		background-color: blue;
	}
	.hero {
		position: relative;
		height: 600px;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--midnight);
		grid-template-columns: 1fr 1fr;
	}
	.image {
		/* position: absolute; */
		top: 0%;
		right: 0%;
		background: url('../aviation.jpeg'), var(--midnight);
		background-position: center center;
		filter: opacity(1) brightness(0.1) grayscale(1) saturate(0) contrast(0.8);
		height: 100%;
		width: 50%;
		margin: auto;
		/* max-width: 2000px; */
		background-repeat: no-repeat;
		background-size: cover;
	}

	.content {
		display: flex;
		width: 100%;
		align-items: baseline;
		justify-items: center;
	}

	@media (max-width: 670px) {
		.hero {
			height: 100vh;
		}

		.image {
			position: absolute;
			top: 0%;
			background: url('../aviation.jpeg'), var(--midnight);
			background-position: center center;
			filter: opacity(1) brightness(0.1) grayscale(1) saturate(0) contrast(0.8);
			height: 100%;
			width: 100%;
			margin: auto;
			max-width: 2000px;
			background-repeat: no-repeat;
			background-size: cover;
		}
	}
</style>
