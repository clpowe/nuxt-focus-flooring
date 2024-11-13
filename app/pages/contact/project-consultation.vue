<script setup>
	definePageMeta({
		key: (route) => route.fullPath
	})

	const success = ref(false)
	const fail = ref(false)

	async function handleSubmit(data) {
		const fData = new FormData()

		if (data) {
			for (let [key, value] of Object.entries(data)) {
				fData.append(key, value)
			}
		}

		try {
			const res = await $fetch(
				'https://script.google.com/macros/s/AKfycbwQLbLBMhdzIxT9_83Ez88WXdjYMAJPYoAHTW-IFesBRBb1RxgqKGKzlAHSi3nnOllG/exec',
				{
					method: 'POST',
					body: fData
				}
			)
			if (res.result === 'success') {
				success.value = true
			}
		} catch (e) {
			fail.value = true
			//console.error(e)
		}
	}

	function handleReset() {
		success.value = false
		fail.value = false
	}
</script>

<template>
	<div class="max-w-xl">
		<iframe
			class="airtable-embed"
			src="https://airtable.com/embed/appL4MkUPOT899Tfd/pag5RKIch5iMxwm6x/form"
			frameborder="0"
			onmousewheel=""
			width="100%"
			height="1700"
			style="background: transparent"
		></iframe>
	</div>
</template>

<style scoped>
	p {
		color: var(--grey-6);
	}
</style>
