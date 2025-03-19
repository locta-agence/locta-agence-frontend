<script setup>
import mobileImgHomepage from '../../assets/images/img_homepage.svg';
import ExpertiseSection from './ExpertiseSection.vue';
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
                <ExpertiseSection />
            </div>
        </div>
    </div>
</template>
