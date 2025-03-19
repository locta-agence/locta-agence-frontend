<script setup>
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
@font-face {
    font-family: BoogyBrutL;
    src: url('../../assets/fonts/BoogyBrutWEBL-Light.woff');
}

.boogybrut-light {
    font-family: "BoogyBrutL", serif;
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

<!-- Expertise Section -->
<template>
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
</template>