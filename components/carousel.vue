<template>
  <div class="carousel-container">
    <div class="photo-gallery relative h-[400px] md:h-[500px] px-4 py-16 overflow-hidden">
      <!-- The gallery with perspective effect -->
      <div class="flex justify-center items-center h-full">
        <!-- Left navigation arrow -->
        <button @click="prevImage" class="gallery-nav gallery-nav-left">
          <span class="text-4xl">&lsaquo;</span>
        </button>
        
        <div class="gallery-container relative w-full flex justify-center items-center">
          <div class="gallery-content" :class="{ 'animate-right': direction === 'right', 'animate-left': direction === 'left' }">
            <!-- Image cachée à gauche (pour anticiper le déplacement vers la gauche) -->
            <div class="gallery-item hidden-left-image">
              <img :src="getImageSrc(6)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            
            <!-- Les 5 positions visibles -->
            <div class="gallery-item far-left-image" @click="prevImage">
              <img :src="getImageSrc(0)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            <div class="gallery-item left-image" @click="prevImage">
              <img :src="getImageSrc(1)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            <div class="gallery-item center-image">
              <img :src="getImageSrc(2)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            <div class="gallery-item right-image" @click="nextImage">
              <img :src="getImageSrc(3)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            <div class="gallery-item far-right-image" @click="nextImage">
              <img :src="getImageSrc(4)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
            
            <!-- Image cachée à droite (pour anticiper le déplacement vers la droite) -->
            <div class="gallery-item hidden-right-image">
              <img :src="getImageSrc(5)" alt="Gallery image" class="w-full h-full object-cover grayscale">
            </div>
          </div>
        </div>
        
        <!-- Right navigation arrow -->
        <button @click="nextImage" class="gallery-nav gallery-nav-right">
          <span class="text-4xl">&rsaquo;</span>
        </button>
      </div>
    </div>
    
    <!-- Nom de l'artiste sous le carousel -->
    <div class="text-center mt-12">
      <h3 class="text-xl font-medium">{{ currentArtistName }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [
        {
          src: '/images/1c38e8c44a9028aeebd3d60c0f466318abfe403f.jpg',
          artist: 'Franck DEREGARD'
        },
        {
          src: '/images/1cf3bfcb69c80152e7639d1dca3f5821ff7a38a6.jpg',
          artist: 'Sophie Marceau'
        },
        {
          src: '/images/a2faaabec183d7a68a76ea9ac0fce54418876024.jpg',
          artist: 'Jean Dujardin'
        },
        {
          src: '/images/6d2295eea990e95723b5b6fe9e706d4c59898953.jpg',
          artist: 'Marion Cotillard'
        }
      ]
    }
  },
  
  data() {
    return {
      currentIndex: 0,
      direction: null,
      isAnimating: false,
      autoplayInterval: null,
      // Liste des indices avant et après le changement
      currentIndices: [],
      nextIndices: []
    }
  },
  
  computed: {
    // Les images normalisées (au moins 5 éléments)
    normalizedImages() {
      // S'assurer qu'il y a au moins 5 images
      let result = [...this.images];
      while (result.length < 5) {
        result = [...result, ...this.images];
      }
      return result;
    },
    
    // Calculer les indices pour chaque position
    positionIndices() {
      // Si nous avons des indices prédéfinis pendant l'animation, les utiliser
      if (this.direction && this.nextIndices.length) {
        return this.nextIndices;
      }
      
      const indices = [];
      const count = this.normalizedImages.length;
      
      // Calculer les positions:
      // [far-left, left, center, right, far-right, hidden-right, hidden-left]
      
      // Les 5 positions visibles
      for (let i = -2; i <= 2; i++) {
        const index = (this.currentIndex + i + count) % count;
        indices.push(index);
      }
      
      // Position cachée à droite (pour anticiper le déplacement vers la droite)
      indices.push((this.currentIndex + 3 + count) % count);
      
      // Position cachée à gauche (pour anticiper le déplacement vers la gauche)
      indices.push((this.currentIndex - 3 + count) % count);
      
      return indices;
    },
    
    // Récupérer le nom de l'artiste de l'image centrale
    currentArtistName() {
      // Si nous avons des indices prédéfinis pendant l'animation, les utiliser
      const centerIndex = this.direction && this.nextIndices.length 
        ? this.nextIndices[2] 
        : this.positionIndices[2];
        
      return this.normalizedImages[centerIndex].artist || 'Artiste inconnu';
    }
  },
  
  methods: {
    // Récupérer l'image pour une position donnée
    getImageSrc(position) {
      // Garantir que nous utilisons toujours les mêmes sources d'images pendant toute l'animation
      const indices = this.direction && this.currentIndices.length 
        ? this.currentIndices 
        : this.positionIndices;
      
      return this.normalizedImages[indices[position]].src;
    },
    
    // Calculer les indices de position actuels et futurs
    calculateIndices(direction) {
      const count = this.normalizedImages.length;
      const currentIndices = [];
      const nextIndices = [];
      
      // Calculer les indices actuels
      for (let i = -2; i <= 2; i++) {
        currentIndices.push((this.currentIndex + i + count) % count);
      }
      currentIndices.push((this.currentIndex + 3 + count) % count); // hidden-right
      currentIndices.push((this.currentIndex - 3 + count) % count); // hidden-left
      
      // Calculer les indices après déplacement
      const nextIndex = direction === 'right' 
        ? (this.currentIndex + 1) % count
        : (this.currentIndex - 1 + count) % count;
        
      for (let i = -2; i <= 2; i++) {
        nextIndices.push((nextIndex + i + count) % count);
      }
      nextIndices.push((nextIndex + 3 + count) % count); // hidden-right
      nextIndices.push((nextIndex - 3 + count) % count); // hidden-left
      
      return { currentIndices, nextIndices, nextIndex };
    },
    
    nextImage() {
      if (this.isAnimating) return;
      
      this.isAnimating = true;
      
      // Calculer et mémoriser les indices avant l'animation
      const { currentIndices, nextIndices, nextIndex } = this.calculateIndices('right');
      this.currentIndices = currentIndices;
      this.nextIndices = nextIndices;
      
      // Démarrer l'animation
      this.direction = 'right';
      
      // Attendre que l'animation soit presque terminée pour mettre à jour l'index
      setTimeout(() => {
        // Mettre à jour l'index seulement à la fin
        this.currentIndex = nextIndex;
        
        // Nettoyer les variables d'animation après un court délai
        setTimeout(() => {
          this.direction = null;
          this.isAnimating = false;
          this.currentIndices = [];
          this.nextIndices = [];
        }, 50);
      }, 750);
    },
    
    prevImage() {
      if (this.isAnimating) return;
      
      this.isAnimating = true;
      
      // Calculer et mémoriser les indices avant l'animation
      const { currentIndices, nextIndices, nextIndex } = this.calculateIndices('left');
      this.currentIndices = currentIndices;
      this.nextIndices = nextIndices;
      
      // Démarrer l'animation
      this.direction = 'left';
      
      // Attendre que l'animation soit presque terminée pour mettre à jour l'index
      setTimeout(() => {
        // Mettre à jour l'index seulement à la fin
        this.currentIndex = nextIndex;
        
        // Nettoyer les variables d'animation après un court délai
        setTimeout(() => {
          this.direction = null;
          this.isAnimating = false;
          this.currentIndices = [];
          this.nextIndices = [];
        }, 50);
      }, 750);
    },
    
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextImage();
      }, 5000);
    },
    
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    }
  },
  
  mounted() {
    this.startAutoplay();
    
    // Arrêter l'autoplay au survol
    const container = this.$el.querySelector('.gallery-container');
    if (container) {
      container.addEventListener('mouseenter', this.stopAutoplay);
      container.addEventListener('mouseleave', this.startAutoplay);
    }
  },
  
  beforeUnmount() {
    this.stopAutoplay();
    
    // Nettoyer les écouteurs d'événements
    const container = this.$el.querySelector('.gallery-container');
    if (container) {
      container.removeEventListener('mouseenter', this.stopAutoplay);
      container.removeEventListener('mouseleave', this.startAutoplay);
    }
  }
}
</script>

<style scoped>
.gallery-container {
  height: 100%;
  position: relative;
  perspective: 1400px;
}

.gallery-content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

.gallery-item {
  position: absolute;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  filter: grayscale(100%);
  transition: filter 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  filter: grayscale(50%);
  opacity: 1;
}

/* Position des images */
.hidden-left-image {
  width: 200px;
  height: 280px;
  transform: translateX(-750px) translateZ(-200px) rotateY(45deg);
  opacity: 0;
  z-index: 0;
  pointer-events: none; /* Désactive les interactions avec cette image */
}

.far-left-image {
  width: 200px;
  height: 280px;
  transform: translateX(-500px) translateZ(-150px) rotateY(35deg);
  opacity: 0.6;
  z-index: 1;
}

.left-image {
  width: 240px;
  height: 320px;
  transform: translateX(-250px) translateZ(-80px) rotateY(25deg);
  opacity: 0.8;
  z-index: 2;
}

.center-image {
  width: 280px;
  height: 380px;
  transform: translateZ(0);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  opacity: 1;
  z-index: 5;
}

.right-image {
  width: 240px;
  height: 320px;
  transform: translateX(250px) translateZ(-80px) rotateY(-25deg);
  opacity: 0.8;
  z-index: 2;
}

.far-right-image {
  width: 200px;
  height: 280px;
  transform: translateX(500px) translateZ(-150px) rotateY(-35deg);
  opacity: 0.6;
  z-index: 1;
}

.hidden-right-image {
  width: 200px;
  height: 280px;
  transform: translateX(750px) translateZ(-200px) rotateY(-45deg);
  opacity: 0;
  z-index: 0;
  pointer-events: none; /* Désactive les interactions avec cette image */
}

/* Animations pour les slides */
.animate-right .hidden-left-image {
  animation: fadeOut 0.8s forwards;
}

.animate-right .far-left-image {
  animation: slideRightOut 0.8s forwards;
}

.animate-right .left-image {
  animation: slideRightToFarLeft 0.8s forwards;
}

.animate-right .center-image {
  animation: slideRightToLeft 0.8s forwards;
}

.animate-right .right-image {
  animation: slideRightToCenter 0.8s forwards;
}

.animate-right .far-right-image {
  animation: slideRightToRight 0.8s forwards;
}

.animate-right .hidden-right-image {
  animation: slideRightIn 0.8s forwards;
}

.animate-left .hidden-right-image {
  animation: fadeOut 0.8s forwards;
}

.animate-left .far-left-image {
  animation: slideLeftToLeft 0.8s forwards;
}

.animate-left .left-image {
  animation: slideLeftToCenter 0.8s forwards;
}

.animate-left .center-image {
  animation: slideLeftToRight 0.8s forwards;
}

.animate-left .right-image {
  animation: slideLeftToFarRight 0.8s forwards;
}

.animate-left .far-right-image {
  animation: slideLeftOut 0.8s forwards;
}

.animate-left .hidden-left-image {
  animation: slideLeftIn 0.8s forwards;
}

/* Keyframes pour les animations */
@keyframes fadeOut {
  0% { opacity: 0; }
  100% { opacity: 0; }
}

@keyframes slideRightOut {
  0% { 
    transform: translateX(-500px) translateZ(-150px) rotateY(35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
  50% {
    opacity: 0.2;
  }
  100% { 
    transform: translateX(-750px) translateZ(-200px) rotateY(45deg); 
    opacity: 0;
    width: 200px;
    height: 280px;
  }
}

@keyframes slideRightToFarLeft {
  from { 
    transform: translateX(-250px) translateZ(-80px) rotateY(25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
  }
  to { 
    transform: translateX(-500px) translateZ(-150px) rotateY(35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
}

@keyframes slideRightToLeft {
  from { 
    transform: translateZ(0); 
    opacity: 1;
    width: 280px;
    height: 380px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
  to { 
    transform: translateX(-250px) translateZ(-80px) rotateY(25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
}

@keyframes slideRightToCenter {
  from { 
    transform: translateX(250px) translateZ(-80px) rotateY(-25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  to { 
    transform: translateZ(0); 
    opacity: 1;
    width: 280px;
    height: 380px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
}

@keyframes slideRightToRight {
  from { 
    transform: translateX(500px) translateZ(-150px) rotateY(-35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
  to { 
    transform: translateX(250px) translateZ(-80px) rotateY(-25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
  }
}

@keyframes slideRightIn {
  0% { 
    transform: translateX(750px) translateZ(-200px) rotateY(-45deg); 
    opacity: 0;
    width: 200px;
    height: 280px;
  }
  50% {
    opacity: 0.2;
  }
  100% { 
    transform: translateX(500px) translateZ(-150px) rotateY(-35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
}

@keyframes slideLeftToLeft {
  from { 
    transform: translateX(-500px) translateZ(-150px) rotateY(35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
  to { 
    transform: translateX(-250px) translateZ(-80px) rotateY(25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
  }
}

@keyframes slideLeftToCenter {
  from { 
    transform: translateX(-250px) translateZ(-80px) rotateY(25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  to { 
    transform: translateZ(0); 
    opacity: 1;
    width: 280px;
    height: 380px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
}

@keyframes slideLeftToRight {
  from { 
    transform: translateZ(0); 
    opacity: 1;
    width: 280px;
    height: 380px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }
  to { 
    transform: translateX(250px) translateZ(-80px) rotateY(-25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
}

@keyframes slideLeftToFarRight {
  from { 
    transform: translateX(250px) translateZ(-80px) rotateY(-25deg); 
    opacity: 0.8;
    width: 240px;
    height: 320px;
  }
  to { 
    transform: translateX(500px) translateZ(-150px) rotateY(-35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
}

@keyframes slideLeftOut {
  0% { 
    transform: translateX(500px) translateZ(-150px) rotateY(-35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
  50% {
    opacity: 0.2;
  }
  100% { 
    transform: translateX(750px) translateZ(-200px) rotateY(-45deg); 
    opacity: 0;
    width: 200px;
    height: 280px;
  }
}

@keyframes slideLeftIn {
  0% { 
    transform: translateX(-750px) translateZ(-200px) rotateY(45deg); 
    opacity: 0;
    width: 200px;
    height: 280px;
  }
  50% {
    opacity: 0.2;
  }
  100% { 
    transform: translateX(-500px) translateZ(-150px) rotateY(35deg); 
    opacity: 0.6;
    width: 200px;
    height: 280px;
  }
}

.gallery-nav {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  opacity: 0.7;
  transform: scale(1);
}

.gallery-nav:hover {
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 1;
  transform: scale(1.1);
}

.gallery-nav:active {
  transform: scale(0.95);
  background-color: rgba(255, 255, 255, 1);
}

.gallery-nav-left {
  left: 20px;
}

.gallery-nav-right {
  right: 20px;
}

.photo-gallery {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
