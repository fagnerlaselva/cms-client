<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Configurações</h1>
      <div class="col">
        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <h5 class="pb-2 text-primary-emphasis">Blog</h5>
            <div class="text-secondary">
              <RouterLink :to="{ name: 'SeoBlog' }" class="dropdown-item">SEO Blog</RouterLink>
              <RouterLink :to="{ path: '/seo-blog#list-item-4' }" class="dropdown-item">Outras Configurações
              </RouterLink>

            </div>
          </div>
        </div>

        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <h5 class="pb-2 text-primary-emphasis">Perfil</h5>
            <RouterLink :to="{ name: 'Profile' }" class="dropdown-item">Meu Perfil</RouterLink>
          </div>
        </div>
      </div>

      <div class="card border mb-3">
        <div class="card-body text-secondary">
          <RouterLink :to="{ name: 'Login' }" class="dropdown-item">Sair</RouterLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ViewConfig',
}
</script>