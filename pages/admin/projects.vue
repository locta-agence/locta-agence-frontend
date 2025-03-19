<template>
  <div class="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Gestion des Projets</h1>

    <!-- Formulaire d'ajout -->
    <form @submit.prevent="addProject" class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <input v-model="newProject.name" placeholder="Nom du projet" required class="w-full p-2 border rounded mb-3" />

      <div v-for="(rating, index) in newProject.rating" :key="index" class="flex items-center space-x-2 bg-gray-50 p-2 rounded mb-2">
        <input v-model="newProject.rating[index]" type="number" min="1" max="5" required class="p-2 border rounded w-full" />
        <button type="button" @click="removeRating(index)" class="text-red-500">❌</button>
      </div>

      <button type="button" @click="addRating" class="w-full bg-blue-500 text-white p-2 rounded mb-3">Ajouter une note</button>
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded">Ajouter ➕</button>
    </form>

    <!-- Tableau des projets -->
    <table class="w-full max-w-3xl mt-6 bg-white shadow-md rounded-lg overflow-hidden">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-3 text-left">Nom</th>
          <th class="p-3 text-left">Rating</th>
          <th class="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project._id" class="border-b hover:bg-gray-100">
          <td class="p-3">
            <input v-if="editingId === project._id" v-model="project.name" class="w-full p-1 border rounded" />
            <span v-else>{{ project.name }}</span>
          </td>
          <td class="p-3">
            <textarea v-if="editingId === project._id" v-model="project.rating" class="w-full p-1 border rounded"></textarea>
            <span v-else>{{ project.rating }}</span>
          </td>
          <td class="p-3 flex space-x-2">
            <button v-if="editingId === project._id" @click="confirmSave(project)" class="bg-green-500 text-white p-2 rounded">💾</button>
            <button v-else @click="editingId = project._id" class="bg-blue-500 text-white p-2 rounded">✏️</button>
            <button @click="confirmDelete(project)" class="bg-red-500 text-white p-2 rounded">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de confirmation pour modification -->
    <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h3 class="text-lg font-semibold">Confirmer la modification</h3>
        <p class="text-gray-600 mt-2">Voulez-vous vraiment enregistrer les modifications ?</p>
        <div class="mt-4 flex justify-end space-x-2">
          <button @click="showEditModal = false" class="px-4 py-2 bg-gray-300 rounded">Annuler</button>
          <button @click="saveProject(selectedProject)" class="px-4 py-2 bg-green-500 text-white rounded">Confirmer</button>
        </div>
      </div>
    </div>

    <!-- Modal de confirmation pour suppression -->
    <div v-if="showDeleteModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h3 class="text-lg font-semibold">Confirmer la suppression</h3>
        <p class="text-gray-600 mt-2">Êtes-vous sûr de vouloir supprimer ce projet ?</p>
        <div class="mt-4 flex justify-end space-x-2">
          <button @click="showDeleteModal = false" class="px-4 py-2 bg-gray-300 rounded">Annuler</button>
          <button @click="deleteProject(selectedProject._id)" class="px-4 py-2 bg-red-500 text-white rounded">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({ layout: "admin" });

const projects = ref([]);
const editingId = ref(null);
const newProject = ref({ name: "", rating: [] });
const showEditModal = ref(false);
const showDeleteModal = ref(false);
const selectedProject = ref(null);

const fetchProjects = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/projects");
    projects.value = await res.json();
  } catch (error) {
    console.error("Erreur lors du chargement des projets :", error);
  }
};

const addProject = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject.value),
    });
    projects.value.push(await res.json());
    newProject.value = { name: "", rating: [1] };
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  }
};

const confirmSave = (project) => {
  selectedProject.value = project;
  showEditModal.value = true;
};

const saveProject = async (project) => {
  try {
    await fetch(`http://localhost:3001/api/projects/${project._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    editingId.value = null;
    showEditModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
  }
};

const confirmDelete = (project) => {
  selectedProject.value = project;
  showDeleteModal.value = true;
};

const deleteProject = async (id) => {
  try {
    await fetch(`http://localhost:3001/api/projects/${id}`, { method: "DELETE" });
    projects.value = projects.value.filter((p) => p._id !== id);
    showDeleteModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
};

onMounted(fetchProjects);

const addRating = () => newProject.value.rating.push(1);
const removeRating = (index) => newProject.value.rating.splice(index, 1);
</script>