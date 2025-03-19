<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-700">Nom</label>
            <input v-model="name" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Mot de passe</label>
            <input v-model="password" type="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Se connecter</button>
        </form>
        <p v-if="errorMessage" class="text-red-500 mt-2 text-center">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Cookies from 'js-cookie';
  definePageMeta({ layout: "noHeader" });
  const name = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();

  onMounted(() => {
  const token = Cookies.get('auth_token');
  if (token) {
    router.push('/admin/projects');
  }
});
  
  const login = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.value, password: password.value })
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message);
      }
      
      Cookies.set('auth_token', data.token, { secure: true, sameSite: 'Strict', expires: 1 });
      router.push('/admin/projects');
    } catch (error) {
      errorMessage.value = error.message;
    }
  };
  </script>
  
 