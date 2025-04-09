<template>
  <div>
    <Hero />
    <FeedbackSection />
    <StatsSection />
    <ProjectSection />
    <ContactSection />
    <GallerySection />
    <QuiSommesNous />
  </div>
</template>

<script setup>
import Hero from '~/components/sections/Hero.vue';
import FeedbackSection from '~/components/sections/FeedbackSection.vue';
import StatsSection from '~/components/sections/StatsSection.vue';
import ProjectSection from '~/components/sections/ProjectSection.vue';
import GallerySection from '~/components/sections/GallerySection.vue';
import QuiSommesNous from '~/components/sections/QuiSommesNous.vue';
import ContactSection from '~/components/sections/ContactSection.vue';
</script>