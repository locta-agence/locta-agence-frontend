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
    <div class="w-full h-full flex mobile flex-col mb-4">
      <div class="flex w-full" style="margin-top: 80px;">
        <div style="font-size: 150px; line-height: 110px;" class="boogybrut-medium"><b>{{ project?.number }}</b></div>
        <div v-if="project" style="font-size: 20px; margin-top: auto; margin-left: 10px;" class="boogybrut-medium"><b>{{ project?.name }}</b></div>
      </div>
      <div class="h-screen top-2 my-2 w-[98%] locta-bg bg-cover bg-center rounded-xl mx-auto flex flex-col justify-end">
        <div class="flex" style="justify-content: end; position: relative; bottom: 5px; margin-right: 5px;">
          <div class="bg-white" style="width: fit-content; height: 100%; padding: 4px 16px; border-radius: 20px; outline: 1px var(--CTA-Primary, #0C0C0C) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 10px; display: inline-flex;">
            <div style="color: var(--CTA-Primary, #0C0C0C); font-size: 14px; font-family: Poppins; font-weight: 400; overflow-wrap: break-word;">
              {{ category?.name }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="w-full right-0 flex justify-center">
        <div class="h-full w-full flex flex-col space-y-28">
          <div class="mt-4 mx-4">
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
const { data: category, pending: loadingCategory, error: errorCategory } = useFetch(() => {
  if (project.value && project.value.idCategory) {
    const categoryId =
      typeof project.value.idCategory === 'string'
        ? project.value.idCategory
        : project.value.idCategory.$oid || project.value.idCategory._id

    return `http://localhost:3001/api/categories/${categoryId}`
  }
  return null
})
console.log(category.value);
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