<template>
  <div class="about-page mb-10">
    <!-- Main title section -->
    <div class="container mx-auto px-4 py-24 md:py-32">
      <img class="rounded-lg w-full object-cover" src="/public/images/locta.png" alt="">
      <img class="rounded-lg w-full object-cover" src="/public/images/locta.png" alt="">
      <img class="rounded-lg w-full object-cover" src="/public/images/locta.png" alt="">
    </div>

    <!-- Who we are section -->
    <div class="container mx-auto px-4 md:py-8 w-[85%]">
      <div class="container mx-auto py-8 w-full mb-8">
      <blockquote class="text-xl md:text-5xl font-bold italic w-full mx-auto">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed od tempor incididunt ut labore et dolore magna
        aliqua. Ut enim a"
      </blockquote>
    </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <!-- Left side - image -->
        <div class="flex flex-col h-full">
          <div class="flex-1 relative">
            <img class="rounded-lg w-full max-h-[400px] object-cover"
              src="/public/images/1c38e8c44a9028aeebd3d60c0f466318abfe403f.jpg" alt="">
          </div>
          <div class="container mx-auto">
            <p class="max-w-4xl text-base leading-relaxed font-normal mt-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>

        <!-- Right side - text content -->
        <div class="h-full">
          <h2 class="text-4xl font-bold mb-5">Qui sommes nous ?</h2>
          <div class="space-y-8">
            <p class="text-base leading-relaxed font-normal text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p class="text-base leading-relaxed font-normal text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <!-- "L'équipe" button -->
            <div class="mt-12 flex justify-start">
              <button
                class="border border-black rounded-full px-8 py-2 flex items-center text-sm hover:bg-black hover:text-white transition-colors">
                <span>L'équipe</span>
                <span class="ml-3">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Photo gallery section -->
    <Carousel :images="[
      { src: '/images/1c38e8c44a9028aeebd3d60c0f466318abfe403f.jpg', artist: 'Franck DEREGARD' },
      { src: '/images/1cf3bfcb69c80152e7639d1dca3f5821ff7a38a6.jpg', artist: 'Julie NOURRISSAT' },
      { src: '/images/a2faaabec183d7a68a76ea9ac0fce54418876024.jpg', artist: 'Lucas MARTIN' },
      { src: '/images/6d2295eea990e95723b5b6fe9e706d4c59898953.jpg', artist: 'Florent CLAIROTTE' },
      { src: '/images/f8415f4d78b8055acbe2f6b4edc25fa9871d45b1.jpg', artist: 'Raphael PARISOTTO' }
    ]" />
  </div>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
  height: 100%;
  position: relative;
}

.gallery-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
  transform-style: preserve-3d;
}

.gallery-item {
  position: absolute;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.9;
  filter: grayscale(100%);
}

.gallery-item:hover {
  opacity: 1;
  transform-origin: center;
  z-index: 20;
  scale: 1.02;
}

.left-image {
  width: 220px;
  height: 300px;
  transform: translateX(-400px) translateZ(-120px) rotateY(30deg);
  z-index: 1;
}

.left-center-image {
  width: 240px;
  height: 320px;
  transform: translateX(-200px) translateZ(-60px) rotateY(20deg);
  z-index: 2;
}

.center-image {
  width: 280px;
  height: 380px;
  transform: translateZ(0);
  z-index: 3;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.right-center-image {
  width: 240px;
  height: 320px;
  transform: translateX(200px) translateZ(-60px) rotateY(-20deg);
  z-index: 2;
}

.right-image {
  width: 220px;
  height: 300px;
  transform: translateX(400px) translateZ(-120px) rotateY(-30deg);
  z-index: 1;
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
  z-index: 10;
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

.photo-gallery {
  animation: fadeIn 1.5s ease-out;
}

/* Typography styles */
h1 {
  font-family: serif;
  letter-spacing: -0.03em;
}

blockquote {
  font-family: serif;
  line-height: 1.4;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5;
}

.leading-relaxed {
  line-height: 1.7;
}
</style>