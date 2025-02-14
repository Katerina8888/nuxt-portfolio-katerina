<template>
  <Menu />
  <div class="bg-[#ffc0cb] hp-height flex flex-col justify-around">
    <slot />
  </div>
</template>

<style scoped>
.hp-height {
  height: calc(100vh - 64px);
}
</style>
