async function handleSubmit(data: any) {
	const success = ref(false)
	const fail = ref(false)
	const fData = new FormData()

	if (data) {
		for (let [key, value] of Object.entries(data)) {
			fData.append(key, value)
		}
	}

	try {
		const res: any = await $fetch(
			'https://script.google.com/macros/s/AKfycbyWB9FrPV2WvXa1k9rh2GVeLc_sldzYYuIUGaWDvugaOU4HjtT3u96oBRvbG2EmloSJ/exec',
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
