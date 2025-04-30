<style>
.locta-bg {
    background-image: url('/assets/images/img_homepage.svg');
}
</style>

<template>
    <div class="bg-white min-h-screen text-white flex w-full">
        <div class="w-[50%]">
            <div class="hidden md:flex h-screen top-2 my-2 locta-bg bg-cover bg-center sticky rounded-xl mr-6 ml-2">
            </div>
        </div>
        <div class="w-[50%] h-screen flex justify-center items-center">
            <div class="container rounded-xl bg-black px-4 py-8 h-fit mt-24 w-[95%]">
                <div class="text-center">
                    <h2 class="text-2xl mb-2">Contactez</h2>
                    <h1 class="text-5xl md:text-7xl font-serif mb-2">LOCTA</h1>
                </div>

                <div class="w-full">
                    <form @submit.prevent="submitForm" class="flex flex-col gap-2">
                        <!-- Nom Prénom -->
                        <input type="text" v-model="formData.lastname" placeholder="Nom"
                            class="bg-transparent border border-white rounded-full px-4 py-3 text-white placeholder-white"
                            required>
                        
                        <input type="text" v-model="formData.name" placeholder="Prénom"
                            class="bg-transparent border border-white rounded-full px-4 py-3 text-white placeholder-white"
                            required>

                        <!-- Email -->
                        <input type="email" v-model="formData.email" placeholder="Mail"
                            class="bg-transparent border border-white rounded-full px-4 py-3 text-white placeholder-white"
                            required>

                        <!-- Sujet -->
                        <input type="text" v-model="formData.subject" placeholder="Sujet"
                            class="bg-transparent border border-white rounded-full px-4 py-3 text-white placeholder-white"
                            required>

                        <!-- Message -->
                        <textarea v-model="formData.message" placeholder="Message"
                            class="bg-transparent border border-white rounded-3xl px-4 py-3 min-h-[150px] text-white placeholder-white"
                            required></textarea>

                        <!-- Bouton d'envoi -->
                        <div class="flex justify-center mt-4">
                            <button type="submit"
                                class="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition-colors">
                                Envoyer le formulaire
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const submitForm = () => {
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    // Par exemple, envoyer les données à une API
    console.log('Formulaire soumis:', formData.value);

    // Réinitialiser le formulaire après l'envoi
    formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    // Afficher un message de confirmation
    alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
};
</script>

<style scoped>
input::placeholder,
textarea::placeholder {
    opacity: 1;
}

input:focus,
textarea:focus {
    outline: none;
}
</style>