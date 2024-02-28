<template>
    <div>
        <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-9xl font-semibold text-[var(--midnight)]">
                    {{ error.statusCode }}
                </p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    {{ error.message }}
                </h1>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <NuxtLink to="/" class="btn btn-yellow">Go back home</NuxtLink>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>
</style>
