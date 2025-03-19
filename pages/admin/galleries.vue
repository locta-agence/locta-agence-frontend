<template>
  <div class="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Gestion des Galeries</h1>

    <!-- Formulaire d'ajout -->
    <form @submit.prevent="addGallery" class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <input v-model="newGallery.url" placeholder="URL de l'image/vidéo" required class="w-full p-2 border rounded mb-3" />

      <div class="flex flex-col bg-gray-50 p-2 rounded mb-2">
        <label for="projectSelect" class="mb-1">Associer à un projet</label>
        <select v-model="newGallery.idProject" id="projectSelect" required class="p-2 border rounded">
          <option v-for="project in projects" :key="project._id" :value="project._id">
            {{ project.name }}
          </option>
        </select>
      </div>

      <div class="flex items-center space-x-2 bg-gray-50 p-2 rounded mb-2">
        <label class="mr-2">Vidéo</label>
        <input v-model="newGallery.isVideo" type="checkbox" class="w-5 h-5" />
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Ajouter ➕</button>
    </form>

    <!-- Tableau des galeries -->
    <table class="w-full max-w-3xl mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-3 text-left">URL</th>
          <th class="p-3 text-left">Vidéo</th>
          <th class="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="gallery in galleries" :key="gallery._id" class="border-b hover:bg-gray-100">
          <td class="p-3">
            <input v-if="editingId === gallery._id" v-model="gallery.url" class="w-full p-1 border rounded" />
            <span v-else>{{ gallery.url }}</span>
          </td>
          <td class="p-3">
            <input v-if="editingId === gallery._id" type="checkbox" v-model="gallery.isVideo" class="w-5 h-5" />
            <span v-else>{{ gallery.isVideo ? 'Oui' : 'Non' }}</span>
          </td>
          <td class="p-3 flex space-x-2">
            <button v-if="editingId === gallery._id" @click="saveGallery(gallery)" class="bg-green-500 text-white p-2 rounded">💾</button>
            <button v-else @click="editingId = gallery._id" class="bg-blue-500 text-white p-2 rounded">✏️</button>
            <button @click="deleteGallery(gallery._id)" class="bg-red-500 text-white p-2 rounded">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

definePageMeta({ layout: "admin" });
const router = useRouter();
const galleries = ref([]);
const projects = ref([]);
const editingId = ref(null);
const newGallery = ref({ url: "", isVideo: false, idProject: "" });

onMounted(() => {
  const token = Cookies.get('auth_token');
  if (!token) {
    router.push('/connexion');
  }
});

const fetchProjects = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/projects");
    projects.value = await res.json();
  } catch (error) {
    console.error("Erreur lors du chargement des projets :", error);
  }
};

const fetchGalleries = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/galleries");
    galleries.value = await res.json();
  } catch (error) {
    console.error("Erreur lors du chargement des galeries :", error);
  }
};

const addGallery = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/galleries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGallery.value),
    });
    galleries.value.push(await res.json());
    newGallery.value = { url: "", isVideo: false, idProject: "" };
  } catch (error) {
    console.error("Erreur lors de l'ajout de la galerie :", error);
  }
};

const saveGallery = async (gallery) => {
  try {
    await fetch(`http://localhost:3001/api/galleries/${gallery._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gallery),
    });
    editingId.value = null;
  } catch (error) {
    console.error("Erreur lors de la modification de la galerie :", error);
  }
};

const deleteGallery = async (id) => {
  try {
    await fetch(`http://localhost:3001/api/galleries/${id}`, { method: "DELETE" });
    galleries.value = galleries.value.filter((g) => g._id !== id);
  } catch (error) {
    console.error("Erreur lors de la suppression de la galerie :", error);
  }
};

onMounted(fetchGalleries);
onMounted(fetchProjects);
</script>
