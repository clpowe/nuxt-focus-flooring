<script setup>
	import gsap from 'gsap'

	onMounted(() => {
		let expanders = gsap.utils.toArray('.expander')

		let active

		expanders.forEach((expander, index) => {
			let close = expander.querySelector('.close')
			let animation = gsap.timeline({ paused: true })
			animation
				.to(expander, { width: '100%', duration: 0.4 })
				.from(close, { opacity: 0, scale: 0.4, duration: 0.1 }, '-=0.1')

			expander.animation = animation

			expander.addEventListener('click', () => {
				if (active) {
					active.animation.reverse()
				}

				expander.animation.play()
				active = expander
			})

			close.addEventListener('click', (e) => {
				e.stopPropagation()
				expander.animation.reverse()
			})
		})
		gsap.set('.expander', {
			backgroundColor: gsap.utils.wrap(['#f5ce5b', '#c570b6', '#78d6e0'])
		})
	})
</script>

<template>
	<div class="wrapper">
		<div class="expander">
			<div class="close">X</div>
		</div>
		<div class="expander">
			<div class="close">X</div>
		</div>
		<div class="expander">
			<div class="close">X</div>
		</div>
	</div>
</template>

<style scoped>
	.wrapper {
		height: 100%;
		width: 100%;
		background: #1d1d1d;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direation: rows;
	}

	.expander {
		width: 50px;
		height: 40vh;
		border-radius: 25px;
		background: black;
		overflow: hidden;
		margin-top: 20px;
		margin-left: 20px;
	}

	.close {
		font-family: sans-serif;
		font-size: 18px;
		line-height: 40px;
		transform: translate(155px, 5px);
		background: rgba(255, 255, 255, 0.6);
	}
</style>
