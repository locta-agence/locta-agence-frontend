<script setup>
import instagram from "../../assets/images/instagram.svg"
import tiktok from "../../assets/images/tiktok.svg"
</script>

<template>
  <div class="bg-black text-white p-5 w-full flex md:flex-col">
    <!-- Left Side -->
    <div class="flex">
      <div class="w-full md:w-1/4 hidden md:flex justify-center items-center mb-6 md:mb-0">
        <img class="w-20" src="~/assets/images/logo-white.svg" alt="Logo" />
      </div>

      <!-- Right Side -->
      <div class="w-full md:w-3/4 flex flex-col justify-center items-center">
        <!-- Menu -->
        <div
          class="flex flex-col md:flex-row text-sm w-full justify-center md:justify-between text-center md:text-left gap-6">
          <!-- Menu -->
          <ul class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 text-start">
            <li>Qui-sommes-nous ?</li>
            <li>Nos projets</li>
            <li>Nos prestations</li>
            <li>Articles</li>
          </ul>
          <!-- Contact -->
          <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 text-start">
            <li>locta.agence@mail.com</li>
            <li>07 82 38 28 49</li>
            <li class="flex">
              <a href="">
                <img :src="instagram" alt="">
              </a>
              <a href="">
                <img :src="tiktok" alt="">
              </a>
            </li>
          </ul>
          <div class="flex w-full md:hidden flex-col md:flex-row md:space-x-5 text-xs text-start">
            <p>Politique de confidentialité</p>
            <p>Conditions générales d'utilisation</p>
            <p>Paramétrages des cookies</p>
            <p>Mentions légales</p>
          </div>
        </div>

        <!-- Legal -->
      </div>
    </div>
    <div class="md:w-1/4 flex md:hidden justify-end items-start mb-6 md:mb-0 ">
      <img class="w-32 md:w-20" src="~/assets/images/logo-white.svg" alt="Logo" />
    </div>
    <div
      class="hidden md:flex text-neutral-500 flex-col md:flex-row md:justify-center items-center text-xs mt-6 gap-3 w-full text-center md:text-left">
      <p>Politique de confidentialité</p>
      <p>Conditions générales d'utilisation</p>
      <p>Paramétrages des cookies</p>
      <p>Mentions légales</p>
    </div>
  </div>
</template>
