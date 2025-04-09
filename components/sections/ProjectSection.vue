<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto">
      <!-- HEADER -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-5xl font-bold text-black">Nos derniers projets</h2>
        <a href="#" class="text-black text-sm flex items-center hover:underline">
          Tout voir <span class="ml-1">↘</span>
        </a>
      </div>

      <!-- FILTRES -->
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

      <!-- PROJET PRINCIPAL -->
      <div v-if="projects.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- IMAGE PRINCIPALE -->
        <div class="relative overflow-hidden rounded-xl main-image cursor-pointer" @click="navigateTo(`/projects/${projects[0]._id}`)">
          <img
            :src="gallerie"
            :alt="projects[0].name"
            class="w-full max-h-xxl object-cover rounded-tl-xl"
          />
          <div class="image-label right-0 bottom-0">
            <span>{{ projects[0].name.substring(0, 20) }}...</span>
            <img src="/assets/images/label.svg" alt="Label" />
          </div>
        </div>

        <!-- DÉTAILS DU PROJET -->
        <div class="flex flex-col">
          <div class="mb-4 mt-auto flex items-center justify-between">
            <h3 class="text-4xl font-bold text-black mb-2">
              {{ projects[0].number }}
            </h3>
            <span class="px-4 py-2 text-sm rounded-full border border-purple-700 text-purple-700">
              {{ selectedCategoryName }}
            </span>
          </div>

          <h2 class="text-4xl font-bold text-black mb-4">
            {{ projects[0].name }}
          </h2>

          <p class="text-black mb-10">
            {{ projects[0].description }}
          </p>

          <!-- Autres projets -->
          <div class="grid grid-cols-2 gap-4 mt-auto">
            <div
              v-for="(project, idx) in extraProjectsImages"
              :key="idx"
              class="relative overflow-hidden rounded-xl cursor-pointer"
              @click="navigateTo(`/projects/${project.id}`)"
            >
              <img
                :src="project.image"
                alt="Miniature"
                class="w-full h-full object-cover aspect-[1/1.2]"
              />
              <div class="image-label-small left-0">
                <span>{{ project.name.substring(0, 20) }}...</span>
                <img src="/assets/images/label-left.svg" alt="Label" />
              </div>
            </div>
          </div>

          

        </div>
      </div>

      <!-- MESSAGE SI PAS DE PROJETS -->
      <div v-else class="text-center text-gray-500">Aucun projet disponible pour cette catégorie.</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getCategories, getGalleries, getProjectsByCategory } from "@/services/apiService";

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
    const mainGallery = await getGalleries(projects.value[0]._id);
    gallerie.value = mainGallery[0]?.url || '';

    // images des deux projets suivants
    const additionalProjects = projects.value.slice(1, 3);
    for (const project of additionalProjects) {
      const galleries = await getGalleries(project._id);
      extraProjectsImages.value.push({
        id: project._id,
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
