<template>
  <header class="shadow-sm bg-white h-16">
    <nav class="container mx-auto p-4 flex justify-center">
      <ul class="w-3/4 flex justify-between text-xl md:text-2xl">
        <li>
          <NuxtLink
            to="/my-projects"
            class="hover:underline"
            exact-active-class="active"
          >
            My Projects</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/" class="hover:underline" exact-active-class="active"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="hover:underline"
            exact-active-class="active"
            >About me</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.active {
  text-decoration: underline;
}
</style>
