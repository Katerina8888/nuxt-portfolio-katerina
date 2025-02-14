<template>
  <div class="px-8">
    <div class="flex justify-center">
      <NuxtImg
        src="/main-img.png"
        alt="Main image"
        class="w-[600px] h-[600px]"
      />
    </div>
    <section class="text-center">
      <div class="font-bold text-4xl">Kateřina Herda</div>
      <div class="font-semi text-2xl">Frontend developer</div>
    </section>
  </div>
  <section class="">
    <div class="w-3/4 flex justify-between m-auto">
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
