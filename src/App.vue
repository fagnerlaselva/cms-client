<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <SpeedInsights />
  <div>
    <Loader v-if="loading" />
    <div v-else>
      <RouterView />
      <NavSidebar></NavSidebar>
      <NavSidebarMobile></NavSidebarMobile>
    </div>
  </div>
</template>
<script>

import NavSidebar from "./components/app/nav/NavSidebar.vue"
import NavSidebarMobile from "./components/app/nav/NavSidebarMobile.vue"
import Loader from './components/app/Loader.vue';
export default {
  components: { NavSidebarMobile, NavSidebar, Loader },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    // Simulação de carregamento
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
</script>
