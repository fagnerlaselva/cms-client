<template>
  <NavSidebar></NavSidebar>
  <section class="main_content dashboard_part" data-bs-theme="auto">
    <div class="container">
      <div>
        <RouterLink :to="{ name: 'ArticleEditor' }" class="buttom-action-add d-flex">
          <div class="rounded-circle  border bg-primário bg-gradiente d-inline-flex p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div class="px-2">Adicionar um artigo</div>
        </RouterLink>
      </div>
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