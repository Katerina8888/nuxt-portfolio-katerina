<template>
  <div class="lg:w-1/2 flex justify-center m-auto">
    <div
      class="lg:w-2/3 m-2 lg:m-8 border border-blue-100 bg-white p-8 hover:shadow-xl transform-all duration-300 cursor-pointer"
    >
      <h1 class="text-3xl pb-4 md:pb-8">{{ heading }}</h1>
      <p class="pb-4 md:pb-8">
        <slot />
      </p>
      <div class="flex justify-center w-auto max-h-[300px]">
        <NuxtImg :src="src" alt="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  heading: string
  src: string
}>()
</script>
