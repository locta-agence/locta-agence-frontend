<template>
  <section class="bg-black text-white py-32 rounded-3xl m-2 flex flex-col justify-center items-center">
    <div class="flex gap-16 text-center">
      <div v-for="(stat, index) in stats" :key="index">
        <p class="text-4xl font-bold">{{ stat.value }}</p>
        <p class="text-lg">{{ stat.label }}</p>
      </div>
    </div>
    <p class="mt-8 text-justify text-gray-300 max-w-2xl mx-auto">
      Bienvenue chez Locta, l’agence qui met son savoir-faire au service de la culture et des artistes émergents. Ancrée à Lyon, nous accompagnons celles et ceux qui façonnent la culture: musiciens, danseurs, street artists, designers, photographes…<br>
      Nous t’aidons à développer ton projet à travers trois pôles d’expertise complémentaires :<br>
      Création & direction artistique (sites web, identité visuelle, captation photo et vidéo).<br>
      Communication & stratégie (gestion des réseaux sociaux, branding, relations presse).<br>
      Événementiel & production (organisation et reportage d’événements, réalisation de clips vidéo).<br>
      Passionnés par la culture sous toutes ses formes, nous concevons des stratégies sur-mesure pour valoriser ton art et amplifier ton impact.<br>
      Prêt à faire passer ton projet au niveau supérieur ?

      CRÉER ET INSPIRER
    </p>
  </section>
</template>

<script setup>
const stats = [
  { value: "2023", label: "Création de l’agence" },
  { value: "24", label: "Membres de l’agence" },
  { value: "2", label: "Projets réalisés" },
  { value: "1", label: "Événement" },
];
</script>
