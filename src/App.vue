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
      <template v-if="!notShowIn.includes(nowpath)">
        <NavSidebar></NavSidebar>
        <NavSidebarMobile></NavSidebarMobile>
      </template>
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
      loading: false,
      notShowIn: ['/login', '/inicio', '/recuperar-senha', '/registrar-se', '/recuperacao-senha-solicitada', '/editor-artigo', '/editor-artigo-preview']
    };
  },
  computed: {
    nowpath() {
      return this.$route.path
    }
  },
  mounted() {
    // Simulação de carregamento
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },

}
</script>
