<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="w-full flex justify-between">
		<button @click="swiper.slideNext()">Next</button>
		<button @click="swiper.slidePrev()">Previous</button>
	</div>
</template>
