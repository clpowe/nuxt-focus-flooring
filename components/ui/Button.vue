<script setup lang="ts"></script>

<template>
	<button
		type="button"
		class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-focusyellow-500 text-midnight hover:bg-focusyellow-400 disabled:opacity-50 disabled:pointer-events-none"
	>
		<slot />
	</button>
</template>
