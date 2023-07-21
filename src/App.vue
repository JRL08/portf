<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav
    class="fixed top-0 bg-primary dark:bg-gray-900 w-full h-[4.5%] left-0 border-gray-200 dark:border-gray-600 z-50"
  >
    <img src="src/assets/Image_1.jpg" class="h-5/6 ml-6 mt-1 mb-2" alt="Logo" />
  </nav>

  <img src="../src/assets/bg-1.jpg" class="w-full h-full mt-12" alt="" />

  <RouterView />
</template>
<style>
body {
  background-color: black;
}
</style>
