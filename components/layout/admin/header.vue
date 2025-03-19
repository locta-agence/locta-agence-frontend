<template>
  <header class="header">
    <nav>
      <ul class="nav-links">
        <li>
          <NuxtLink to="/admin/projects">Projets</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/galleries">Galeries</NuxtLink>
        </li>
      </ul>
      <button @click="logout" class="logout-button">Déconnexion</button>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const router = useRouter();

const logout = () => {
  Cookies.remove('auth_token');
  router.push('/connexion'); 
};
</script>

<style scoped>
.header {
  background-color: #1e293b;
  color: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover {
  text-decoration: underline;
}

.logout-button {
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.logout-button:hover {
  background-color: #b91c1c;
}
</style>
