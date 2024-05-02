<script setup>

import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <NavSidebarMobile></NavSidebarMobile>
</template>

<script>
import NavSidebarMobile from "./components/app/nav/NavSidebarMobile.vue"
export default {
  components: { NavSidebarMobile },
}
</script>
