<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-6 lg:px-16">
      <!-- En-tête de la section -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-5xl font-bold text-black">Nos derniers projets</h2>
        <a
          href="#"
          class="text-black text-sm flex items-center hover:underline"
        >
          Tout voir <span class="ml-1">↘</span>
        </a>
      </div>

      <!-- Filtres -->
      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="(filter, index) in filters"
          :key="index"
          :class="[
            'px-4 py-2 text-sm border rounded-full',
            filter.active
              ? 'bg-purple-700 text-white border-purple-700'
              : 'border-gray-300 text-gray-600 hover:border-black hover:text-black',
          ]"
          @click="selectFilter(index)"
        >
          {{ filter.name }}
        </button>
      </div>

      <!-- Contenu principal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Grande image -->
        <div class="relative overflow-hidden rounded-xl main-image">
          <img
            :src="projects[0].image"
            :alt="projects[0].title"
            class="w-full max-h-xxl object-cover rounded-tl-xl"
          />

          <div class="image-label right-0 bottom-0">
            <span>Event chez @pilohotels</span>
            <img src="/assets/images/label.svg" alt="Label" />
          </div>
        </div>

        <!-- Texte -->
        <div class="flex flex-col">
          <div class="mb-4 mt-auto flex items-center justify-between">
            <h3 class="text-4xl font-bold text-black mb-2">
              {{ projects[0].id }}
            </h3>
            <span
              class="px-4 py-2 text-sm rounded-full border border-purple-700 text-purple-700"
            >
              Événementiel
            </span>
          </div>

          <h2 class="text-4xl font-bold text-black mb-4">
            {{ projects[0].title }}
          </h2>

          <p class="text-black mb-10">
            {{ projects[0].description }}
          </p>

          <!-- Petite galerie -->
          <div class="grid grid-cols-2 gap-4 mt-auto">
            <div
              v-for="(image, idx) in projects[0].extraImages"
              :key="idx"
              class="relative overflow-hidden rounded-xl"
            >
              <img
                :src="image"
                alt="Miniature"
                class="w-full h-full object-cover aspect-[1/1.2]"
              />
              <div class="image-label-small left-0">
                <span>Event chez @pilohotels</span>
                <img src="/assets/images/label-left.svg" alt="Label" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const filters = ref([
  { name: "Tout", active: true },
  { name: "Sites web", active: false },
  { name: "Direction artistique", active: false },
  { name: "Photo et vidéo", active: false },
  { name: "Communication", active: false },
  { name: "Reportage événement", active: false },
  { name: "Organisation événement", active: false },
  { name: "Clips vidéo", active: false },
]);

const projects = ref([
  {
    id: "01",
    title: "Event chez @pilohotels",
    description:
      "C'était pour nous l'aboutissement d'une année entière à promouvoir la culture urbaine et la mettre en avant. On espère que vous avez pu faire de belles découvertes artistiques et profiter du moment avec nous.",
    image: "https://picsum.photos/200/300", // Remplacez par le chemin réel de l'image principale
    extraImages: [
      "https://picsum.photos/200/300", // Remplacez par les chemins réels
      "https://picsum.photos/200/300",
    ],
  },
]);

const selectFilter = (index) => {
  filters.value.forEach((f, i) => (f.active = i === index));
};
</script>

<style scoped>
.main-image img {
  border-bottom-right-radius: 15px;
}

.image-label,
.image-label-small {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  font-size: 0.875rem;
  font-weight: bold;
  color: black;
  z-index: 10;
  white-space: nowrap;
}

.image-label-small {
  top: -1px;
}

.image-label img {
  position: absolute;
  bottom: 0px;
  right: -1px;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}

.image-label-small img {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}
</style>
