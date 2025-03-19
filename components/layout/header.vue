<script setup>
import arrowSvg from '../../assets/images/guidance_up-arrow.svg'
import logoSvg from '../../assets/images/logo-locta.svg'

import { ref } from 'vue';
const logo = ref(null)

const isMenuOpen = ref(false);  // Gère l'état du menu déroulant

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;  // Basculer l'état du menu
};

onMounted(() => {
  const windowWidth = ref(window.innerWidth)    
  document.onscroll = function () {
    let invertIndex = 57
    let pos = getVerticalScrollPercentage(document.body)
    if(windowWidth.value < '1000') invertIndex = -10

    if (logo.value) {
      if (pos >= invertIndex) {
        logo.value.style.filter = "invert(1)";
      } else {
        logo.value.style.filter = "invert(0)";
      }
    }
  }

  function getVerticalScrollPercentage(elm) {
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
  }
})

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
  <header>
    <!-- Logo -->
    <img ref="logo" class="fixed z-10 invert md:invert-0" :src="logoSvg" alt="">

    <!-- Navigation -->
    <nav class="w-full flex fixed md:pr-4 h-20">
      <div class="w-[50%] bg-white"></div>
      
      <!-- Contenu de la navigation (Menu desktop) -->
      <div class="flex w-[50%] bg-white justify-between items-center py-2 px-4 poppins-light">
        
        <!-- Menu mobile (Bouton pour déplier le menu) -->
        <div class="md:hidden flex justify-end w-full">
          <!-- Ici, tu peux utiliser une icône ou du texte comme bouton -->
          <button @click="toggleMenu" class="md:hidden flex py-1 border border-black px-6 rounded-full cursor-pointer">
            <p>Menu</p>
            <img :src="arrowSvg" alt="">
          </button>
        </div>

        <!-- Menu desktop (visible sur écrans larges) -->
        <div class="hidden w-full items-center py-2 px-4 space-x-8 ml-8 md:flex">
          <a class="cursor-pointer">Projet</a>
          <a class="cursor-pointer">Articles</a>
          <a class="cursor-pointer">Presta</a>
          <a class="cursor-pointer">À propos</a>
        </div>

        <!-- Menu mobile déroulant -->
        <div v-if="isMenuOpen" class="md:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-10">
          <div class="flex flex-col items-center py-4">
            <a class="py-2 cursor-pointer">Projet</a>
            <a class="py-2 cursor-pointer">Articles</a>
            <a class="py-2 cursor-pointer">Presta</a>
            <a class="py-2 cursor-pointer">À propos</a>
          </div>
        </div>

        <!-- Bouton Contact -->
        <button class="hidden md:flex py-1 border border-black px-6 rounded-full cursor-pointer">
          <p>Contact</p>
          <img :src="arrowSvg" alt="">
        </button>
      </div>
    </nav>
  </header>
</template>