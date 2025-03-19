<template>
  <div class="container">
    <h1>Gestion des Galeries</h1>

    <!-- Formulaire pour ajouter une galerie -->
    <form @submit.prevent="addGallery" class="form-container">
      <input v-model="newGallery.url" placeholder="URL de l'image/vidéo" required />

      <div class="form-group">
        <label for="projectSelect">Associer à un projet</label>
        <select v-model="newGallery.idProject" id="projectSelect" required>
          <option v-for="project in projects" :key="project._id" :value="project._id">
            {{ project.name }}
          </option>
        </select>
      </div>

      <label class="checkbox-label">
        <input v-model="newGallery.isVideo" type="checkbox" />
        Vidéo
      </label>

      <button type="submit" class="add-button">Ajouter ➕</button>
    </form>

    <!-- Tableau des galeries -->
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Vidéo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="gallery in galleries" :key="gallery._id">
          <td>
            <input v-if="editingId === gallery._id" v-model="gallery.url" />
            <span v-else>{{ gallery.url }}</span>
          </td>
          <td>
            <input v-if="editingId === gallery._id" type="checkbox" v-model="gallery.isVideo" />
            <span v-else>{{ gallery.isVideo ? 'Oui' : 'Non' }}</span>
          </td>
          <td>
            <button v-if="editingId === gallery._id" @click="saveGallery(gallery)" class="edit-button">💾</button>
            <button v-else @click="editingId = gallery._id" class="edit-button">✏️</button>
            <button @click="deleteGallery(gallery._id)" class="delete-button">🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "admin",
});

const galleries = ref([]);
const projects = ref([]);
const editingId = ref(null);
const newGallery = ref({
  url: "",
  isVideo: false,
  idProject: "", // Ajout pour éviter un bug si non sélectionné
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
    const createdGallery = await res.json();
    galleries.value.push(createdGallery);
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  color: #333;
  font-size: 32px;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 450px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input, select, button {
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
}

.add-button {
  background-color: #1e90ff;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.add-button:hover {
  background-color: #007acc;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
}

table {
  width: 90%;
  max-width: 900px;
  margin-top: 20px;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  font-size: 16px;
}

th {
  background-color: #f4f4f4;
  color: #333;
}

td {
  background-color: #fff;
}

.edit-button {
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.edit-button:hover {
  background-color: #218838;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
