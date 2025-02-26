<script setup>
import arrowSvg from '../../assets/images/guidance_up-arrow.svg'
import logoSvg from '../../assets/images/logo-locta.svg'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.poppins-light {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: normal;
}
</style>

<template>
  <nav class="w-full flex fixed px-4 z-10">
    <div class="w-[50%] bg-transparent">
      <img :src="logoSvg" alt="">
    </div>
    <div class="flex w-[50%] bg-white justify-between items-center py-2 px-4 poppins-light">
      <div class="flex space-x-8 ml-8">
        <a class="cursor-pointer">Projet</a>
        <a class="cursor-pointer">Articles</a>
        <a class="cursor-pointer">Presta</a>
        <a class="cursor-pointer">À propos</a>
      </div>
      <button class="flex py-1 border border-black px-6 rounded-full cursor-pointer">
        <p>Contact</p>
        <img :src="arrowSvg" alt="">
      </button>
    </div>
  </nav>
</template>