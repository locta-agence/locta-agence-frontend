<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6 lg:px-16">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-gray-900">Vos retours</h2>
        <a href="#" class="text-gray-900 text-sm flex items-center hover:underline">
          Tout voir <span class="ml-1">&rarr;</span>
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="relative overflow-hidden rounded-xl shadow-lg"
        >
          <img
            :src="review.image"
            :alt="review.name"
            class="w-full h-full object-cover"
          />

          <div class="absolute bottom-2 left-2 bg-white px-4 py-2 rounded-lg shadow">
            <p class="text-sm font-medium text-gray-900">{{ review.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  { image: '/images/review1.jpg', name: 'Nom XXXXXXXX' },
  { image: '/images/review2.jpg', name: 'Nom XXXXXXXX' },
  { image: '/images/review3.jpg', name: 'Nom XXXXXXXX' },
];
</script>

<style scoped>
</style>
