<template>
  <NuxtLink :to="to" target="_blank" rel="noreferrer">
    <button
      role="button"
      class="py-2 mx-1 px-4 md:py-8 md:px-16 rounded bg-pink-400 text-white font-bold md:text-2xl hover:bg-pink-500 transform-all duration-300"
    >
      <slot />
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>
