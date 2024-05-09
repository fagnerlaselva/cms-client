<script setup>

import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <NavSidebar></NavSidebar>
  <NavSidebarMobile></NavSidebarMobile>
</template>
<script>

import NavSidebar from "./components/app/nav/NavSidebar.vue"
import NavSidebarMobile from "./components/app/nav/NavSidebarMobile.vue"

export default {
  components: { NavSidebarMobile, NavSidebar },
}
</script>
