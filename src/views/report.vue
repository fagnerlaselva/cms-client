<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <div class="tabFilter border-bottom py-2">
        <div class="">Relatórios</div>
      </div>
      <div class="row py-4 text-center">
        <div class="col-sm-6">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">600</h5>
              <p class="card-text">Membros</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">6.000</h5>
              <p class="card-text">Visualizações</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">37</h5>
              <p class="card-text">Artigos</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">6</h5>
              <p class="card-text">Categorias</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">2</h5>
              <p class="card-text">Autores</p>
            </div>
          </div>
        </div>
      </div>
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