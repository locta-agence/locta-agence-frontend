<template>
  <div>
    <div class="w-full h-full flex computer">
      <div class="h-screen top-2 my-2 w-1/2 locta-bg bg-cover bg-center sticky rounded-xl mr-6 ml-2"></div>
      <div class="w-1/2 right-0 flex justify-center">
        <div class="h-full w-full flex flex-col space-y-28 pr-10">
          <div style="margin-top: 85px;">
            <div class="flex" style="justify-content: space-between">
              <h1 style="font-size: 150px;" class="boogybrut-medium"><b>{{ project?.number }}</b></h1>
              <div style="width: fit-content; height: 100%; padding-left: 16px; padding-right: 16px; padding-top: 4px; padding-bottom: 4px; border-radius: 20px; outline: 1px var(--CTA-Primary, #0C0C0C) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; margin-top: 50px;">
                <div style="color: var(--CTA-Primary, #0C0C0C); font-size: 14px; font-family: Poppins; font-weight: 400; word-wrap: break-word">Catégorie du projet</div>
              </div>
            </div>
            <h1 v-if="project" style="margin-top: -30px; font-size: 30px" class="boogybrut-medium"><b>{{ project?.name }}</b></h1>
            <div style="white-space: pre-line; font-family: Poppins;">
              Contexte et description : {{ project?.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex mobile flex-col">
      <div class="flex w-full" style="flex-direction: row; margin-top: 30px;">
        <h1 style="font-size: 150px;" class="boogybrut-medium"><b>{{ project?.number }}</b></h1>
        <h1 v-if="project" style="font-size: 30px; margin-top: 130px; margin-left: 20px;" class="boogybrut-medium"><b>{{ project?.name }}</b></h1>
      </div>
      <div class="h-screen top-2 my-2 w-full locta-bg bg-cover bg-center  rounded-xl mr-6 ml-2"></div>
      <div class="w-full right-0 flex justify-center">
        <div class="h-full w-full flex flex-col space-y-28 pr-10">
          <div style="margin-top: 85px;">
            <div class="flex" style="justify-content: space-between">
              <div style="width: fit-content; height: 100%; padding-left: 16px; padding-right: 16px; padding-top: 4px; padding-bottom: 4px; border-radius: 20px; outline: 1px var(--CTA-Primary, #0C0C0C) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 10px; display: inline-flex; margin-top: 50px;">
                <div style="color: var(--CTA-Primary, #0C0C0C); font-size: 14px; font-family: Poppins; font-weight: 400; word-wrap: break-word">Catégorie du projet</div>
              </div>
            </div>
            <div style="white-space: pre-line; font-family: Poppins;">
              Contexte et description : {{ project?.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useFetch } from "#app";

const route = useRoute();
const projectId = route.params.id; // Récupère l'ID du projet depuis l'URL

const { data: project, pending, error } = useFetch(`http://localhost:3001/api/projects/${projectId}`);
console.log(project);

const links = [
  { title: "Creation de sites web", link: "" },
  { title: "Direction artistique", link: "" },
  { title: "Captation photo et video", link: "" },
  { title: "Communication", link: "" },
  { title: "Reportage evenement", link: "" },
  { title: "Organisation evénement", link: "" },
  { title: "Clips vidéo", link: "" },
];
</script>


<style>

@media screen and (max-width: 1024px) {
  .computer {
    display: none;
  }
  .mobile {
    display: flex;
  }
}

@media screen and (min-width: 1024px) {
  .computer {
    display: flex;
  }
  .mobile {
    display: none;
  }
}

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
  src: url('../../../assets/fonts/BoogyBrutWEBL-Medium.woff');
}

.boogybrut-medium {
  font-family: "BoogyBrutM", serif;
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: BoogyBrutL;
  src: url('../../../assets/fonts/BoogyBrutWEBL-Light.woff');
}

.boogybrut-light {
  font-family: "BoogyBrutL", serif;
  font-weight: 200;
  font-style: normal;
}
</style>