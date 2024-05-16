<template>
  <section class="main_content dashboard_part">
    <div class="container">
      <h1 class="pt-4">Configurações</h1>
      <ul class="list-group">
        <li class="list-group-item">
          <RouterLink :to="{ name: 'Profile' }" class="dropdown-item">Perfil</RouterLink>
        </li>
        <li class="list-group-item">
          <RouterLink :to="{ name: 'Login' }" class="dropdown-item">Sair</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>

export default {
  name: 'ViewConfig',
}
</script>