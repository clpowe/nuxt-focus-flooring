<script setup>
	defineProps({
		id: {
			type: Number
		},
		name: {
			type: String
		},
		size: {
			type: String
		},
		cost: {
			type: Number
		},
		client: {
			type: String
		},
		scope: {
			type: String
		},
		image: {
			type: String
		},
		alt: {
			type: String
		},
		catagory: {
			type: String
		}
	})
</script>

<template>
	<SidebySide>
		<Framer>
			<nuxt-img
				:src="image"
				:alt="alt"
				format="webp"
				height="500"
				fit="cover"
				:placeholder="100"
				sizes="sm:100vw md:60vw lg:80vw"
			/>
		</Framer>
		<Stack size="--s-3">
			<h3>{{ name }}</h3>
			<p>Size: {{ size }}</p>
			<p>Total Project Cost: {{ useMakeCurrency(cost) }}</p>
			<p>Client: {{ client }}</p>
			<p>Scope: {{ scope }}</p>
		</Stack>
	</SidebySide>
</template>
