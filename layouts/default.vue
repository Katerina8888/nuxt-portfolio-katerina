<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-center">
        <ul class="w-3/4 flex justify-between">
      
          <li>
            <NuxtLink to="/my-projects">My Projects</NuxtLink>
          </li>    
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="btn">About me</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!-- output the page content -->
    <div class="container mx-auto p-4"><slot /></div>
  </div>
</template>

