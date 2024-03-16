<script setup lang="ts">
	import { useTeam } from '~/composables/states'

	const route = useRoute()

	const { data: team } = await useTeam()

	const TeamMember = team.value?.find((t) => t.slug === route.params.name)
</script>

<template>
	<Hero>Hello</Hero>
	<div class="container mx-auto">
		<div>
			<h1>{{ TeamMember?.firstName }} {{ TeamMember?.lastName }}</h1>
			<p>{{ TeamMember?.title }}</p>
			<NuxtImg :src="TeamMember?.srcImg" />

			<ul class="flex flex-col">
				<li class="listItem" v-if="TeamMember?.address">
					<Icon name="streamline:location-pin-3" size="32" />
					<p>Address: {{ TeamMember?.address }}</p>
				</li>
				<li class="listItem" v-if="TeamMember?.mobile">
					<Icon name="streamline:phone-mobile-phone" size="32" />
					<p>Mobile Phone:{{ TeamMember?.mobile }}</p>
				</li>
				<li class="listItem" v-if="TeamMember?.office">
					<Icon name="streamline:phone" size="32" />
					<p>Office Phone:{{ TeamMember?.office }}</p>
				</li>
				<li class="listItem" v-if="TeamMember?.email">
					<Icon name="streamline:mail-send-envelope" size="32" />
					<p>Email: {{ TeamMember?.email }}</p>
				</li>
			</ul>

			<p>{{ TeamMember?.bio }}</p>
		</div>
	</div>
</template>

<style scoped>
	.listItem {
		@apply inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg;
	}
</style>
