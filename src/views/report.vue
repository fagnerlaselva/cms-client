<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <div class="tabFilter border-bottom py-2">
        <div class="">Relatórios</div>
      </div>
      <div class="row py-4">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">Artigos</h5>
              <p class="card-text">37 publicados</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">Catergorias</h5>
              <p class="card-text">6 publicados</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border mb-3">
            <div class="card-body text-secondary">
              <h5 class="card-title">Membros</h5>
              <p class="card-text">2 </p>
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