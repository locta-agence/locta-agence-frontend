<script setup>
import arrowSvg from '../../assets/images/guidance_up-arrow.svg'
import logoSvg from '../../assets/images/logo-locta.svg'

import { ref, onMounted, watch, computed } from 'vue';
const route = useRoute()

const logo = ref(null)
const windowWidth = ref(0)
const isMenuOpen = ref(false)
const scrollPosition = ref(0)

// Détermine si le logo doit être inversé (noir) en fonction de la page et du défilement
const shouldInvertLogo = computed(() => {
  // Sur les autres pages que l'accueil, toujours inversé (noir)
  if (route.path !== '/' && route.path !== '' && route.path !== '/contact') {
    return true
  }
  
  // Sur la page d'accueil, dépend du défilement
  const invertIndex = windowWidth.value < 1000 ? -10 : 38
  return scrollPosition.value >= invertIndex
})

// Met à jour le filtre du logo quand shouldInvertLogo change
watch(shouldInvertLogo, (newValue) => {
  if (logo.value) {
    logo.value.style.filter = newValue ? "invert(1)" : "invert(0)"
  }
})

// Bascule l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Calcule le pourcentage de défilement vertical
const getVerticalScrollPercentage = (elm) => {
  const p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight) * 100
}

// Gère l'événement de défilement
const handleScroll = () => {
  scrollPosition.value = getVerticalScrollPercentage(document.body)
}

onMounted(() => {
  // Initialiser la largeur de la fenêtre
  windowWidth.value = window.innerWidth
  
  // Ajouter l'écouteur d'événement pour le défilement
  document.onscroll = handleScroll
  
  // Initialiser l'état du logo en fonction de la route actuelle
  if (logo.value) {
    logo.value.style.filter = shouldInvertLogo.value ? "invert(1)" : "invert(0)"
  }
  
  // Mettre à jour la largeur de la fenêtre lors du redimensionnement
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
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
    <NuxtLink to="/">
      <img ref="logo" class="fixed z-20 invert md:invert-0" :src="logoSvg" alt="LOCTA">
    </NuxtLink>

    <!-- Navigation -->
    <nav class="w-full flex fixed h-20 z-10 sm:z-0">
      <div class="w-[50%] bg-white"></div>
      
      <!-- Contenu de la navigation (Menu desktop) -->
      <div class="flex w-[50%] bg-white justify-between items-center py-2 px-4 poppins-light">
        
        <!-- Menu mobile (Bouton pour déplier le menu) -->
        <div class="md:hidden flex justify-end w-full">
          <!-- Ici, tu peux utiliser une icône ou du texte comme bouton -->
          <button @click="toggleMenu" class="md:hidden flex py-1 border border-black px-6 rounded-full cursor-pointer justify-center">
            <p>Menu</p>
            <img :src="arrowSvg" alt="Menu">
          </button>
        </div>

        <!-- Menu desktop (visible sur écrans larges) -->
        <div class="hidden w-full items-center py-2 px-4 space-x-8 ml-8 md:flex">
          <a class="cursor-pointer" @click="navigateTo(`/projects`)">Projet</a>
          <NuxtLink to="/prestations" class="cursor-pointer">Presta</NuxtLink>
          <NuxtLink to="/about" class="cursor-pointer">À propos</NuxtLink>
        </div>

        <!-- Menu mobile déroulant -->
        <div v-if="isMenuOpen" class="md:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-20">
          <div class="flex flex-col items-center py-4">
            <a class="py-2 cursor-pointer border-b" @click="navigateTo(`/projects`)">Projet</a>
            <NuxtLink to="/prestations" class="py-2 cursor-pointer border-b">Presta</NuxtLink>
            <NuxtLink to="/about" class="py-2 cursor-pointer border-b">À propos</NuxtLink>
            <NuxtLink to="/contact" class="py-2 cursor-pointer">Contact</NuxtLink>
          </div>
        </div>

        <!-- Bouton Contact -->
        <NuxtLink to="/contact" class="hidden md:flex py-1 border border-black px-6 rounded-full cursor-pointer justify-center">
          <p>Contact</p>
          <img :src="arrowSvg" alt="Contact">
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>