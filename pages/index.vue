<template>
  <div class="px-8">
    <div class="flex justify-center">
      <NuxtImg
        src="/main-img.png"
        alt="Main image"
        class="w-[250px] h-[250px] lg:w-[600px] lg:h-[600px]"
      />
    </div>
    <section class="text-center">
      <h1 class="font-bold text-4xl">Kateřina Herda</h1>
      <h2 class="font-semi text-2xl">Frontend developer</h2>
    </section>
  </div>
  <section class="md:w-3/4 lg:w-1/2 mx-auto">
    <div class="flex justify-between m-auto">
      <BigButton to="https://github.com/Katerina8888/">GitHub</BigButton>
      <BigButton to="https://www.linkedin.com/in/kate%C5%99ina-herda-29657b10a/"
        >LinkedIn</BigButton
      >
      <BigButton to="https://www.instagram.com/katerina_nevelika/"
        >Instagram</BigButton
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import BigButton from '~/components/BigButton.vue'
</script>
