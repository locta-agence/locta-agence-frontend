<template>
  <div>
    <Hero />
    <ContactSection />
    <GallerySection />
    <QuiSommesNous />
  </div>
</template>

<script setup>
import Hero from '~/components/sections/Hero.vue';
import GallerySection from '~/components/sections/GallerySection.vue';
import QuiSommesNous from '~/components/sections/QuiSommesNous.vue';
import ContactSection from '~/components/sections/ContactSection.vue';
</script>