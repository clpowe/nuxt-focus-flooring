<template>
  <div class="grid grid-cols-[1fr_auto] gap-4 p-5 border bottom-4 rounded-xl">
    <div v-if="svg || image">
      <svg-icon :name="svg" v-if="svg" class="h-14" />
      <img :src="image" v-if="image" role="presentation" />
    </div>
    <div>
      <component :is="component" class="mb-[var(--s-1)]" v-if="title">{{
        title
      }}</component>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { style = "h-28 mb-2", border = false } = defineProps<{
  image?: string;
  svg?: string;
  title: string;
  component: string;
  border?: boolean;
  style?: string;
}>();
</script>

<style scoped>
img {
  height: 4rem;
}

@container (min-width: 700px) {
  .card {
    display: flex;
    max-width: 400px;
    flex-direction: column;
  }
}
</style>
