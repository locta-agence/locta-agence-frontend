<template>
    <div>
      <Header /> 
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/layout/admin/header.vue';
  import Footer from '~/components/layout/footer.vue';
  </script>
  
  <style scoped>
  
  </style>
  