<script setup>
import mobileImgHomepage from '../../assets/images/img_homepage.svg';
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const links = [
    { title: "Création de sites web", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi ea dolores velit pariatur ducimus distinctio voluptatem error ad. Nemo voluptas perspiciatis eos cum debitis molestiae quo corrupti est eius." },
    { title: "Direction artistique", description: "artistique" },
    { title: "Captation photo et vidéo", description: "artistique" },
    { title: "Communication", description: "artistique" },
    { title: "Reportage événement", description: "artistique" },
    { title: "Organisation événement", description: "artistique" },
    { title: "Clips vidéo", description: "artistique" }
];
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Actor&display=swap');

.locta-bg {
    background-image: url('/assets/images/img_homepage.svg');
}

.font-Actor {
    font-family: "Actor", serif;
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: BoogyBrutM;
    src: url('../../assets/fonts/BoogyBrutWEBL-Medium.woff');
}

.boogybrut-medium {
    font-family: "BoogyBrutM", serif;
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: BoogyBrutL;
    src: url('../../assets/fonts/BoogyBrutWEBL-Light.woff');
}

.boogybrut-light {
    font-family: "BoogyBrutL", serif;
    font-weight: 200;
    font-style: normal;
}
</style>

<template>
    <div class="w-full h-full flex">
        <div class="hidden md:flex h-screen top-2 my-2 md:w-1/2 locta-bg bg-cover bg-center sticky rounded-xl mr-6 ml-2"></div>

        <!-- Main Content -->
        <div class=" w-full md:w-1/2 right-0 flex justify-center">
            <div class="w-full h-full flex flex-col space-y-10 md:space-y-28 md:pr-10">
                <div class="h-[30vh] md:hidden"></div>
                <div class="flex md:hidden w-full justify-center items-center h-[20vh] p-2">
                    <img :src="mobileImgHomepage" alt="Mobile Homepage Image">
                </div>

                <div class="w-full h-[90vh] flex flex-col space-y-10 md:space-y-20">
                    <div class="w-full h-full flex justify-center items-center mt-20">
                        <img class="p-5" src="/assets/images/locta.svg" alt="Logo">
                    </div>
                    <div class="flex flex-col p-5">
                        <p class="text-sm font-mono">Made in Lyon</p>
                        <h3 class="text-5xl md:text-6xl boogybrut-medium border-spacing-1">Agence créative ancrée dans la culture
                            urbaine</h3>
                    </div>
                </div>

                <!-- Expertise Section -->
                <div class="space-y-20 p-5">
                    <h2 class="text-5xl md:text-7xl boogybrut-medium">Nos expertises</h2>
                    <div class="h-full pb-5">
                        <div v-for="(item, index) in links" :key="index"
                            class="text-xl flex items-center boogybrut-medium border-b py-7">
                            <div>
                                <!-- Accordion Header -->
                                <div class="flex">
                                    <span class="text-xl boogybrut-light mr-5">[ 0{{ index + 1 }} ]</span>
                                    <button @click="toggleAccordion(index)" class="text-xl md:text-3xl"
                                        :aria-expanded="activeIndex === index ? 'true' : 'false'"
                                        :aria-controls="'accordion-content-' + index">
                                        {{ item.title }}
                                    </button>
                                </div>

                                <!-- Accordion Content -->
                                <div :id="'accordion-content-' + index" v-show="activeIndex === index"
                                    class="overflow-hidden transition-all duration-300 ease-in-out w-full"
                                    :style="{ maxHeight: activeIndex === index ? '200px' : '0px' }">
                                    <p class="mt-10 bg-white border-gray-300 text-md boogybrut-light">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
