  <template>
    <Projects />
  </template>
  
  <script setup>
  import Header from '~/components/layout/admin/header.vue';
  import Projects from '~/pages/admin/projects.vue';
  import Footer from '~/components/layout/footer.vue';
  import { onMounted } from "vue";
  import Cookies from 'js-cookie';
  import { useRouter } from 'vue-router';
const router = useRouter();

  onMounted(() => {
  const token = Cookies.get('auth_token');
  if (!token) {
    router.push('/connexion');
  }
  else {
    router.push('/admin/projects');
  }
});
  
  definePageMeta({
  layout: "admin",
});
  </script>