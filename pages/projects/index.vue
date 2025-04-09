<template>
  <section class="py-24 bg-white m-2">
    <div class="ml-8">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-5xl font-bold text-black">Nos projets</h2>
      </div>

      <div class="flex flex-wrap gap-3 mb-10">
        <button
        v-for="(filter, index) in categoriesFilters"
        :key="index"
        :class="[
            'px-4 py-2 text-sm border rounded-full',
            selectedCategory === filter._id
            ? 'bg-purple-700 text-white border-purple-700'
              : 'border-gray-300 text-gray-600 hover:border-black hover:text-black',
            ]"
          @click="selectFilter(filter._id)"
          >
          {{ filter.name }}
        </button>
      </div>
    </div>
      
    <transition name="fade" mode="out-in">
      <div class="projects-container" :key="selectedCategory">
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
              <img :src="gallerie" :alt="project.name" />
              <button class="btn-reaction">Réaction utilisateur</button>
            </div>
            <div class="project-info">
              <div class="project-number">
                {{ String(index + 1).padStart(2, "0") }}
              </div>
              <h2 class="project-title">{{ project.name }}</h2>
              <div class="project-meta">
              </div>
              <p class="project-description">{{ project.description }}</p>
              <button class="btn-more">En savoir plus →</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getCategories, getGalleriesByProject, getProjectsByCategory } from "@/services/apiService";

const categoriesFilters = ref([]);
const selectedCategory = ref(null);
const projects = ref([]);
const gallerie = ref([]);
const extraProjectsImages = ref([]);

onMounted(async () => {
  try {
    categoriesFilters.value = await getCategories();
    if (categoriesFilters.value.length > 0) {
      selectFilter(categoriesFilters.value[0]._id);
    }
  } catch (error) {
    console.error("Erreur de chargement des catégories", error);
  }
});

const selectFilter = async (categoryId) => {
  selectedCategory.value = categoryId;
  projects.value = [];
  gallerie.value = '';
  extraProjectsImages.value = [];

  try {
    const projectList = await getProjectsByCategory(categoryId);
    projects.value = projectList.reverse();

    if (!projects.value.length) return;

    // image principale
    const mainGallery = await getGalleriesByProject(projects.value[0]._id);
    gallerie.value = mainGallery[0]?.url || '';

    // images des deux projets suivants
    const additionalProjects = projects.value.slice(1, 3);
    for (const project of additionalProjects) {
      const galleries = await getGalleriesByProject(project._id);
      extraProjectsImages.value.push({
        image: galleries[0]?.url || '',
        name: project.name
      });
    }
  } catch (error) {
    console.error("Erreur de chargement des projets", error);
  }
};

const selectedCategoryName = computed(() => {
  const category = categoriesFilters.value.find((cat) => cat._id === selectedCategory.value);
  return category ? category.name : "Catégorie";
});
</script>

<style scoped>
.project-item {
  margin-bottom: 20px;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
