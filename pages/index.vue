<template>
  <div>
    <h1 class="text-red-500">Accueil</h1>
    <Home />
    <GallerySection />
    <QuiSommesNous />
  </div>
</template>

<script setup>
import QuiSommesNous from '~/components/sections/QuiSommesNous.vue';
import GallerySection from '~/components/sections/GallerySection.vue';
import Home from '~/components/sections/Home.vue';
</script>