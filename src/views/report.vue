<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <div class="tabFilter border-bottom py-2">
        <div class="">Complete as informações da sua nova categoria</div>
      </div>
      <h1 class=" py-4"> Relatórios</h1>
    </div>
  </section>

</template>

<script>
import NavSidebar from "../components/app/nav/NavSidebar.vue"

export default {
  components: { NavSidebar, },
  name: 'ViewReport',

}
</script>