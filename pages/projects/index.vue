<template>
  <section class="py-24 bg-white m-2">

    <div class="ml-8">

      <div class="flex justify-between items-center mb-8">
        <h2 class="text-5xl font-bold text-black">Nos projets</h2>
      </div>

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
    </div>
      
      
    <div class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-item"
        :class="{
          'left-aligned': index % 2 === 0,
          'right-aligned': index % 2 === 1,
        }"
      >
        <div class="project-content">
          <div class="project-image">
            <img :src="project.image" alt="Image du projet" />
            <button class="btn-reaction">Réaction utilisateur</button>
          </div>
          <div class="project-info">
            <div class="project-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <h2 class="project-title">{{ project.title }}</h2>
            <div class="project-meta">
              <span>{{ project.location }}</span> |
              <span>{{ project.date }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <button class="btn-more">En savoir plus →</button>
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
    id: 1,
    title: "Nom du projet",
    location: "Lieu du projet",
    date: "Date du projet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/800/400?random=1",
  },
  {
    id: 2,
    title: "Nom du projet",
    location: "Lieu du projet",
    date: "Date du projet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/800/400?random=2",
  },
  {
    id: 3,
    title: "Nom du projet",
    location: "Lieu du projet",
    date: "Date du projet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://picsum.photos/800/400?random=3",
  },
]);

const selectFilter = (index) => {
  filters.value.forEach((f, i) => (f.active = i === index));
};
</script>

<style scoped>
.project-item {
  margin-bottom: 80px;
}

.project-content {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}

.left-aligned .project-content {
  flex-direction: row;
}

.right-aligned .project-content {
  flex-direction: row-reverse;
}

.project-image {
  flex: 0 0 50%;
  position: relative;
}

.project-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 3/4;
  max-height: 600px;
  border-radius: 12px;
}

.btn-reaction {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: white;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
}

.project-info {
  flex: 0 0 40%;
  padding: 20px 0;
}

.project-number {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.project-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.project-meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.project-description {
  margin-bottom: 20px;
  line-height: 1.6;
}

.btn-more {
  background: none;
  border: 1px solid #000;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

@media (max-width: 768px) {
  .project-content {
    flex-direction: column !important;
  }

  .project-image,
  .project-info {
    flex: 0 0 100%;
  }
}
</style>
