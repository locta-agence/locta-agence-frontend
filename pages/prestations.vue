<script setup>
// Import necessary components or assets if needed
import { ref } from 'vue';

// Sample image for the last expertise card (clip video)
const concertImage = ref('/images/1c38e8c44a9028aeebd3d60c0f466318abfe403f.jpg');

// Testimonial data
const testimonials = ref([
  { id: 1, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 2, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 3, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 4, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 5, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 6, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 7, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 8, author: 'ALEX R.', stars: 5, text: '"ut enim, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
]);

// Expertise data
const expertises = ref([
  { 
    id: '01', 
    title: 'Création de sites web', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '02', 
    title: 'Direction artistique', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '03', 
    title: 'Captation vidéo et photo', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '04', 
    title: 'Communication', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '05', 
    title: 'Reportage événement', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '06', 
    title: 'Organisation événement', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  { 
    id: '07', 
    title: 'Clip vidéo', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: true
  },
]);
</script>

<template>
  <div class="prestations-page">
    <!-- Main title section -->
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl md:text-5xl font-semibold mt-24 mb-10">Nos expertises</h1>
      
      <!-- Expertise grid - layout exactly as in the image -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- First row: 3 cards -->
        <div v-for="expertise in expertises.slice(0, 3)" :key="expertise.id" class="p-6 bg-gray-50 rounded-lg">
          <h2 class="text-3xl font-bold mb-1">{{ expertise.id }}.</h2>
          <h3 class="text-xl font-semibold mb-3">{{ expertise.title }}</h3>
          <p class="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Second row: 3 cards -->
        <div v-for="expertise in expertises.slice(3, 6)" :key="expertise.id" class="p-6 bg-gray-50 rounded-lg">
          <h2 class="text-3xl font-bold mb-1">{{ expertise.id }}.</h2>
          <h3 class="text-xl font-semibold mb-3">{{ expertise.title }}</h3>
          <p class="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <!-- Last card with image (7th) -->
        <div class="p-6 bg-gray-50 rounded-lg col-span-1 md:col-span-3 lg:col-span-1">
          <h2 class="text-3xl font-bold mb-1">07.</h2>
          <h3 class="text-xl font-semibold mb-3">Clip vidéo</h3>
          <p class="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="mt-2">
            <img :src="concertImage" class="w-full h-36 object-cover rounded-lg" alt="Concert crowd" />
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial section -->
    <div class="container mx-auto px-4 py-12 mt-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-16">Ils temoignent</h2>
      
      <!-- Testimonial grid - layout exactly as in the image (2 rows of 4) -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- First row of testimonials -->
        <div v-for="testimonial in testimonials.slice(0, 4)" :key="testimonial.id" class="mb-8">
          <!-- Stars -->
          <div class="flex text-purple-600 mb-1">
            <span v-for="i in testimonial.stars" :key="i">★</span>
          </div>
          <!-- Author -->
          <h4 class="font-bold mb-2">{{ testimonial.author }}</h4>
          <!-- Text -->
          <p class="text-sm text-gray-700">
            {{ testimonial.text }}
          </p>
        </div>

        <!-- Second row of testimonials -->
        <div v-for="testimonial in testimonials.slice(4, 8)" :key="testimonial.id" class="mb-8">
          <!-- Stars -->
          <div class="flex text-purple-600 mb-1">
            <span v-for="i in testimonial.stars" :key="i">★</span>
          </div>
          <!-- Author -->
          <h4 class="font-bold mb-2">{{ testimonial.author }}</h4>
          <!-- Text -->
          <p class="text-sm text-gray-700">
            {{ testimonial.text }}
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>
/* Additional styles to match the design exactly */
h1, h2 {
  font-weight: 700;
}

.prestations-page {
  font-family: 'Inter', sans-serif;
}

/* Card styling to match the design */
.bg-gray-50 {
  background-color: #f9f9f9;
}

/* Star styling to match the purple in the image */
.text-purple-600 {
  color: #9333ea;
}
</style>
