<script setup>

import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
    <NavSidebar></NavSidebar>
    <NavSidebarMobile></NavSidebarMobile>
  </div>
</template>
<script>

import NavSidebar from "./components/app/nav/NavSidebar.vue"
import NavSidebarMobile from "./components/app/nav/NavSidebarMobile.vue"

export default {
  components: { NavSidebarMobile, NavSidebar },
}
</script>
