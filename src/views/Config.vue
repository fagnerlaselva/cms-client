<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4 text-primary-emphasis">Configurações</h1>
      <div class="col">
        <ul class="dropdown-menu">
          <li><span class="dropdown-item-text">Dropdown item text</span></li>
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <RouterLink :to="{ name: 'Profile' }" class="dropdown-item">Perfil</RouterLink>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border mb-3">
          <div class="card-body text-secondary">
            <RouterLink :to="{ name: 'Login' }" class="dropdown-item">Sair</RouterLink>
          </div>
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