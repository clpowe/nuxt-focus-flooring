import { NuxtLoadingIndicator } from '#build/components';
<script lang="ts"></script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
	line-height: 1.5;
	padding-bottom: get-size("600");
	font-family: "Inter", sans-serif;

	min-height: 100vh;
	position: relative;
}

h1,
h2,
h3 {
	line-height: 1;
}

h1 {
	font-size: var(--s5);
}

@media (min-width: 640px) {
	h1 {
		font-size: var(--s5);
	}
}

@media (min-width: 1024px) {
	h1 {
		font-size: var(--s6);
	}
}

h2 {
	font-size: var(--s3);
}

@media (min-width: 640px) {
	h2 {
		font-size: var(--s4);
	}
}

@media (min-width: 1024px) {
	h2 {
		font-size: var(--s5);
	}
}

h3 {
	font-size: var(--s1);
	font-weight: 700;
}

.container {
	max-width: 1440px;
	margin-inline: auto;
	padding-inline-start: 1rem;
	padding-inline-end: 1rem;
}

.visually-hidden {
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}

main {
	min-height: 100vh;
}

h1 {
	z-index: 10;
	max-width: 11ch;
	color: var(--focus-white);
	font-weight: 700;
	text-transform: uppercase;
	position: relative;
}

h1>span {
	color: var(--focus-yellow);
}

h1::after {
	content: "";
	position: absolute;
	z-index: 10;
	margin-left: 0.1em;
	bottom: 0.15em;
	height: 1rem;
	width: 1rem;
	background-color: var(--focus-yellow);
	border-radius: 4px;
}

h3 {
	text-transform: uppercase;
}

.margin-bottom {
	margin-bottom: var(--s2);
}

.drawer-enter-active,
.drawer-leave-active {
	transition: 1s ease all;
}

.drawer-enter-from {
	transform: translateX(-100%);
}

.drawer-leave-to {
	transform: translateX(-100%);
}

.formkit-wrapper .formkit-fieldset {
	max-width: 80rem;
}

.css-1na73vl {
	padding-top: 48px;
}

.alink {
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	transform: translateX(100%);
	opacity: 1;

	transition:
		transform 500ms 250ms ease-in-out,
		opacity 500ms 250ms ease-in-out;
}

.accordion-panel:has([aria-expanded="true"]) .alink {
	transform: translateX(0);
	opacity: 1;
	bottom: 2rem;
	right: 2rem;

	@starting-style {
		opacity: 0;
	}
}

.accordion-panel:has([aria-expanded="false"]) .alink {
	position: absolute;
	bottom: 2rem;
	right: 2rem;
	transform: translateX(100%);
	opacity: 0;
}
</style>