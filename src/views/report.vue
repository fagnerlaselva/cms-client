<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <h1 class="mt-4">Dashboard</h1>
      <div class="row py-4">
        <div class="col-sm-6">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">600</h5>
              <p class="card-text">Membros</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">6.000</h5>
              <p class="card-text">Visualizações</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">37</h5>
              <p class="card-text">Artigos</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">6</h5>
              <p class="card-text">Categorias</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title text-primary-emphasis">2</h5>
              <p class="card-text">Autores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<style>
.card-title {
  font-weight: 600;
}
</style>
<script>
import NavSidebar from "../components/app/nav/NavSidebar.vue"

export default {
  components: { NavSidebar, },
  name: 'ViewReport',

}
</script>