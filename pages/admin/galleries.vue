<template>
    <div>
      <h1>Gestion des Galeries</h1>
  
      <!-- Formulaire pour ajouter une galerie -->
      <form @submit.prevent="addGallery">
        <input v-model="newGallery.url" placeholder="URL de l'image/vidéo" required />
        <div style="background-color: white;">
        <label for="projectSelect">Associer à un projet</label>
        <select v-model="newGallery.idProject" id="projectSelect" required>
          <option v-for="project in projects" :key="project._id" :value="project._id">
            {{ project.name }}
          </option>
        </select>
      </div>
        <label>
          Vidéo
          <input v-model="newGallery.isVideo" type="checkbox" />
        </label>
  
        <button type="submit">Ajouter ➕</button>
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
  isVideo: false, // Valeur par défaut
});

const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/projects");
      projects.value = await res.json();
    } catch (error) {
      console.error("Erreur lors du chargement des projets :", error);
    }
  };
// Récupération des galeries depuis l'API
const fetchGalleries = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/galleries");
    galleries.value = await res.json();
  } catch (error) {
    console.error("Erreur lors du chargement des galeries :", error);
  }
};

// Ajouter une galerie
const addGallery = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/galleries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGallery.value),
    });
    const createdGallery = await res.json();
    galleries.value.push(createdGallery);
    newGallery.value = { url: "", isVideo: false }; // Réinitialisation du formulaire
  } catch (error) {
    console.error("Erreur lors de l'ajout de la galerie :", error);
  }
};

// Modifier une galerie
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

// Supprimer une galerie
const deleteGallery = async (id) => {
  try {
    await fetch(`http://localhost:3001/api/galleries/${id}`, { method: "DELETE" });
    galleries.value = galleries.value.filter((g) => g._id !== id);
  } catch (error) {
    console.error("Erreur lors de la suppression de la galerie :", error);
  }
};

// Charger les galeries au montage du composant
onMounted(fetchGalleries);
onMounted(fetchProjects);

</script>

<style scoped>
  /* Style global pour centrer le contenu */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;  /* Fond léger pour améliorer l'apparence */
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 50px;
    color: #333;  /* Couleur sombre pour le titre */
    font-size: 50px;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px; /* Limiter la largeur du formulaire */
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajouter de l'ombre autour du formulaire */
  }
  
  input, button, textarea {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  /* Espace entre le bouton modifier et supprimer */
  button.edit-button {
    margin-right: 10px;  /* Ajout d'un espace entre les deux boutons */
  }
  
  /* Style des boutons pour modifier ou supprimer */
  .edit-button {
    background-color: green;  /* Couleur pour le bouton modifier */
    color: white;
  }
  
  .delete-button {
    background-color: #f44336;  /* Couleur pour le bouton supprimer */
    color: white;
  }
  
  table {
    width: 80%;  /* Limiter la largeur du tableau */
    max-width: 900px;  /* Largeur maximale du tableau */
    margin-top: 20px;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre autour du tableau */
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
  
  .rating-group {

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  /* Optionnel : style spécifique pour la case à cocher */
label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

  </style>