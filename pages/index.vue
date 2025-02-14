<template>
  <section class="bg-[#ffc0cb] py-8 hp-height flex flex-col justify-around">
    <div>
      <div class="flex justify-center">
        <NuxtImg src="/main-img.png" alt="Main image" />
      </div>
      <section class="text-center">
        <div class="font-bold text-4xl">Kateřina Herda</div>
        <div class="font-semi text-2xl">Frontend developer</div>
      </section>
    </div>
    <section class="">
      <div class="w-3/4 flex justify-between m-auto">
        <NuxtLink to="/">
          <button
            role="button"
            class="py-2 mx-1 px-4 md:py-8 md:px-16 rounded bg-pink-400 text-white font-bold md:text-2xl hover:bg-pink-500 transform-all duration-300"
          >
            Github
          </button>
        </NuxtLink>
        <NuxtLink to="/">
          <button
            role="button"
            class="py-2 mx-1 px-4 md:py-8 md:px-16 rounded bg-pink-400 text-white font-bold md:text-2xl hover:bg-pink-500 transform-all duration-300"
          >
            LinkedIn
          </button>
        </NuxtLink>
        <NuxtLink to="/">
          <button
            role="button"
            class="py-2 mx-1 px-4 md:py-8 md:px-16 rounded bg-pink-400 text-white font-bold md:text-2xl hover:bg-pink-500 transform-all duration-300"
          >
            Instagram
          </button>
        </NuxtLink>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.hp-height {
  height: calc(100vh - 64px);
}
</style>
