<template>
  <header class="header">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/admin/projects">Projets</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/users">Utilisateurs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/galleries">Galeries</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #1e293b; /* Bleu foncé */
  color: white;
  padding: 35px 30px;
}

nav ul {
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
</style>
