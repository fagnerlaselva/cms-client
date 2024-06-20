<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Configurações</h1>
      <div class="col">
        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <div class="text-secondary">
              <RouterLink :to="{ name: 'SeoBlog' }" class="dropdown-item text-primary-emphasis fs-5 py-2 border-bottom">
                SEO
              </RouterLink>
              <RouterLink :to="{ name: 'SeoBlog' }" class="dropdown-item text-primary-emphasis fs-5 py-2 border-bottom">
                Layout
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <RouterLink :to="{ name: 'Profile' }" class="dropdown-item text-primary-emphasis fs-5 py-2">Meu Perfil
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="card border mb-3">
        <div class="card-body text-secondary">
          <RouterLink :to="{ name: 'SeoBlog' }" class="dropdown-item text-primary-emphasis fs-5 py-2  border-bottom">
            Mudar Bucket
          </RouterLink>
          <RouterLink :to="{ name: 'Login' }" class="dropdown-item text-primary-emphasis fs-5 py-2">Sair</RouterLink>
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