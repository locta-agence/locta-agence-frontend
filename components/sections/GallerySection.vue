<template>
  <section class="bg-white">
    <div class="container mx-auto w-full">
      <h2 class="text-2xl font-medium text-gray-800 mb-8 text-center">Galerie</h2>

      <div class="parent">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="overflow-hidden rounded-lg"
          :class="`div${index + 1}`"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  { src: '/images/gallery1.png', alt: 'Image 1' },
  { src: '/images/gallery2.png', alt: 'Image 2' },
  { src: '/images/gallery3.png', alt: 'Image 3' },
  { src: '/images/gallery4.png', alt: 'Image 4' },
  { src: '/images/gallery5.png', alt: 'Image 5' },
  { src: '/images/gallery6.png', alt: 'Image 6' },
  { src: '/images/gallery7.png', alt: 'Image 7' },
  { src: '/images/gallery8.png', alt: 'Image 8' },
];
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 6px;
}

/* Ligne 1 */
.div1 { grid-area: 1 / 1 / 3 / 3; }
.div2 { grid-area: 1 / 3 / 3 / 5; }
.div3 { grid-area: 1 / 5 / 3 / 7; }
.div4 { grid-area: 1 / 7 / 2 / 9; }
.div5 { grid-area: 2 / 7 / 3 / 9; }

/* Ligne 2 */
.div6 { grid-area: 3 / 1 / 5 / 4; }
.div7 { grid-area: 3 / 4 / 5 / 6; }
.div8 { grid-area: 3 / 6 / 5 / 9; }
</style>
