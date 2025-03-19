<script setup>
import mobileImgHomepage from '../../assets/images/img_homepage.svg'
import { ref } from "vue";

const activeIndex = ref(null); // Stocke l'index de l'élément ouvert

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const links = [
    { title: "Creation de sites web", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi ea dolores velit pariatur ducimus distinctio voluptatem error ad. Nemo voluptas perspiciatis eos cum debitis molestiae quo corrupti est eius." },
    { title: "Direction artistique", description: "artistique" },
    { title: "Captation photo et video", description: "artistique" },
    { title: "Communication", description: "artistique" },
    { title: "Reportage evenement", description: "artistique" },
    { title: "Organisation evénement", description: "artistique" },
    { title: "Clips vidéo", description: "artistique" },
]
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
        <img class="h-screen top-2 my-2 md:w-1/2 locta-bg bg-cover bg-center sticky rounded-xl mr-6 ml-2"
            :src="mobileImgHomepage" alt="">
        <div class="w-1/2 right-0 flex justify-center">
            <div class="h-full flex flex-col space-y-28 pr-10">
                <div class="h-[90vh] flex flex-col space-y-20">
                    <div class="w-full h-full flex justify-center items-center">
                        <img class="p-5" src="/assets/images/locta.svg" alt="">
                    </div>
                    <div class="flex flex-col p-5">
                        <p class="text-sm font-mono">Made in Lyon</p>
                        <h3 class="text-6xl boogybrut-medium border-spacing-1">Agence creative ancree dans la culture
                            urbaine</h3>
                    </div>
                </div>
                <div class="space-y-20 p-5">
                    <h2 class="text-7xl boogybrut-medium">Nos expertises</h2>
                    <div class="h-full pb-5">
                        <div v-for="(item, index) in links" :key="index"
                            class="text-xl flex items-center boogybrut-medium border-b py-7">
                            <div>
                                <span class="text-xl boogybrut-light mr-5">[ 0{{ index + 1 }} ]</span>
                                <button @click="toggleAccordion(index)" class="text-3xl">
                                    <span>{{ item.title }}</span>
                                </button>

                                <div v-show="activeIndex === index"
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
    <div class="md:hidden flex justify-center items-center">
        <img class="" :src="mobileImgHomepage" alt="">
    </div>
</template>