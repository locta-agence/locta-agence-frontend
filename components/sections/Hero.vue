<script setup>

const links = [
    { title: "Creation de sites web", link: "" },
    { title: "Direction artistique", link: "" },
    { title: "Captation photo et video", link: "" },
    { title: "Communication", link: "" },
    { title: "Reportage evenement", link: "" },
    { title: "Organisation evénement", link: "" },
    { title: "Clips vidéo", link: "" },
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
        <div class="h-screen top-2 my-2 w-1/2 locta-bg bg-cover bg-center sticky rounded-xl mr-6 ml-2"></div>
        <div class="w-1/2 right-0 flex justify-center">
            <div class="h-full flex flex-col space-y-28 pr-10">
                <div class="h-[90vh] flex flex-col space-y-20">
                    <div class="w-full h-full flex justify-center items-center">
                        <img class="p-5" src="/assets/images/locta.svg" alt="">
                    </div>
                    <div class="flex flex-col p-5">
                        <p class="text-sm font-mono">Made in Lyon</p>
                        <h3 class="text-6xl boogybrut-medium border-spacing-1">Agence creative ancree dans la culture urbaine</h3>
                    </div>
                </div>
                <div class="space-y-20 p-5">
                    <h2 class="text-7xl boogybrut-medium">Nos expertises</h2>
                    <div class="h-full pb-5">
                        <a v-for="item in links" class="text-xl flex items-center boogybrut-medium border-b py-7">
                            <span class="text-xl boogybrut-light mr-5">[ 0{{ links.indexOf(item) + 1 }} ]</span>
                            <h2 class="text-3xl">{{ item.title }}</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>