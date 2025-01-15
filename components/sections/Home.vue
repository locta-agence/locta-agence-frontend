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
    font-weight: 400;
    font-style: normal;
  }
</style>

<template>
    <div class="w-full h-full flex">
        <div class="h-screen top-2 my-5 w-1/2 locta-bg bg-cover bg-center sticky rounded-xl m-2"></div>
        <div class="w-1/2 right-0 flex justify-center">
            <div class="h-full flex flex-col space-y-28 pr-10">
                <div class="h-[90vh] flex flex-col space-y-20">
                    <div class="w-full h-full flex justify-center items-center">
                        <img class="p-5" src="/assets/images/locta.svg" alt="">
                    </div>
                    <div class="flex flex-col p-5">
                        <p class="text-sm font-mono">Made in Lyon</p>
                        <h3 class="text-5xl font-Actor">Agence créative ancrée dans la culture urbaine</h3>
                    </div>
                </div>
                <div class="space-y-10 p-5">
                    <h2 class="text-6xl font-Actor">Nos expertises</h2>
                    <div class="h-full space-y-10 pb-5">
                        <a v-for="item in links" class="text-xl flex items-center font-Actor border-b b-5">
                            <span class="text-sm mr-5">[ 0{{ links.indexOf(item) + 1 }} ]</span>
                            {{ item.title }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>