<script setup>
import arrowSvg from '../../assets/images/guidance_up-arrow.svg'
import logoSvg from '../../assets/images/logo-locta.svg'

import { ref } from 'vue';
const logo = ref(null)

onMounted(() => {
  document.onscroll = function(){ 
  var pos = getVerticalScrollPercentage(document.body)
  if (logo.value) { 
      if (pos > 57) {    
        logo.value.style.filter = "invert(1)";
      } else {
        logo.value.style.filter = "invert(0)";
      }
    }
}

function getVerticalScrollPercentage( elm ){
  var p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}  
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.poppins-light {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: normal;
}
</style>

<template>
  <img ref="logo" class="fixed z-10" :src="logoSvg" alt="">
  <nav class="w-full flex fixed pr-4 h-20">
    <div class="w-[50%] bg-white"></div>
    <div class="flex w-[50%] bg-white justify-between items-center py-2 px-4 poppins-light">
      <div class="flex space-x-8 ml-8">
        <a class="cursor-pointer">Projet</a>
        <a class="cursor-pointer">Articles</a>
        <a class="cursor-pointer">Presta</a>
        <a class="cursor-pointer">À propos</a>
      </div>
      <button class="flex py-1 border border-black px-6 rounded-full cursor-pointer">
        <p>Contact</p>
        <img :src="arrowSvg" alt="">
      </button>
    </div>
  </nav>
</template>