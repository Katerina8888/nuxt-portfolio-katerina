<template>
  <div
    class="h-full bg-blue-200 flex p-8 md:p-20 flex-wrap md:w-5/6 lg:w-3/4 self-center"
  >
    <PortfolioCard heading="Product Page" src="/igloonet.png"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim velit quos
      dolorum ratione obcaecati culpa voluptatem nisi odit blanditiis
      similique!</PortfolioCard
    >
    <PortfolioCard heading="Product Page" src="/eshop.png"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis in
      quae id corporis sint a itaque eos harum corrupti possimus.</PortfolioCard
    >
    <PortfolioCard heading="Product Page" src="/portfolio1.png"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, aliquid?
      Tempore beatae amet expedita iste qui incidunt quisquam provident
      tenetur.</PortfolioCard
    >
    <PortfolioCard heading="Business Website" src="/hosting.png"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem
      nobis accusamus id omnis explicabo quis at, eaque aliquam
      sequi.</PortfolioCard
    >

    <!-- <Dialog :open="isOpen" @close="setIsOpen">
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
    </Dialog> -->
  </div>
</template>

<!-- <script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const isOpen = ref(true)

function setIsOpen(value) {
  isOpen.value = value
}
</script> -->

<!-- <template>
  <div class="z-10">
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

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const isOpen = ref(true)

function setIsOpen(value) {
  isOpen.value = value
}
</script> -->
