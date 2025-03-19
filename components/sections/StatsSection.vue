<template>
  <section class="bg-black text-white py-16 px-6 rounded-3xl max-w-5xl mx-auto">
    <div class="grid grid-cols-4 gap-6 text-center">
      <div v-for="(stat, index) in stats" :key="index">
        <p class="text-4xl font-bold">{{ stat.value }}</p>
        <p class="text-lg">{{ stat.label }}</p>
      </div>
    </div>
    <p class="mt-8 text-center text-gray-300 max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur. Pharetra odio sed suspendisse facilisis sed cras vitae 
      maecenas proin. Commodo vulputate nec id bibendum feugiat amet duis. Facilisis dolor quam egestas 
      aenean amet aliquet arcu iaculis. Sit arcu at pulvinar interdum nisl cursus egestas.
    </p>
  </section>
</template>

<script setup>
const stats = [
  { value: "2021", label: "Création de l’agence" },
  { value: "24", label: "Membres de l’agence" },
  { value: "10", label: "Projets réalisés" },
  { value: "5K", label: "Personnes nous suivent" },
];
</script>
