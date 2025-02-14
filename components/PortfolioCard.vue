<template>
  <div class="lg:w-1/2 flex justify-center m-auto">
    <div
      class="lg:w-[583px] lg:h-[482px] m-2 lg:m-8 border border-blue-100 bg-white p-8 hover:shadow-xl transform-all duration-300 cursor-pointer"
    >
      <h1 class="text-3xl pb-4 md:pb-8">{{ heading }}</h1>
      <p class="pb-4 md:pb-8">
        <slot />
      </p>
      <div class="flex justify-center w-auto max-h-[300px]">
        <NuxtImg :src="src" alt="image" />
      </div>
      <button class="z-50 w-20 h-20 bg-red-500" @click="setIsOpen(true)">
        More
      </button>
    </div>

    <Dialog :open="isOpen" @close="setIsOpen">
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <DialogDescription>
          This will permanently deactivate your account
        </DialogDescription>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const isOpen = ref(false)

function setIsOpen(value: boolean) {
  isOpen.value = value
}

console.log(isOpen.value)
defineProps<{
  heading: string
  src: string
}>()
</script>
