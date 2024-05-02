<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="menu-mobile position-fixed bottom-0 end-0 d-lg-none dropdown position-absolute" data-bs-theme="dark">
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Menu
    </button>
    <ul class="dropdown-menu flex-row" data-bs-theme="dark">
      <li>
        <a href="/" class="dropdown-item" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products"
          data-bs-original-title="Products">
          Artigos
        </a>
      </li>
      <li>
        <a href="/membros" class="dropdown-item " data-bs-toggle="tooltip" data-bs-placement="right"
          aria-label="Products" data-bs-original-title="Products">
          autores
        </a>
      </li>
      <li>
        <a href="/categoria" class="dropdown-item" data-bs-toggle="tooltip" data-bs-placement="right"
          aria-label="Products" data-bs-original-title="Products">
          Categorias
        </a>
      </li>
      <li>
        <a href="/relatorios" class="dropdown-item" data-bs-toggle="tooltip" data-bs-placement="right"
          aria-label="Products" data-bs-original-title="Products">
          Categorias
        </a>
      </li>
      <li>
        <hr class="dropdown-divider">
      </li>

      <li><a class="dropdown-item" href="#">Notificações</a></li>
      <li><a class="dropdown-item" href="#">Configurações</a></li>
      <li><a class="dropdown-item" href="#">Meu Pefil</a></li>
      <li><a class="dropdown-item" href="/login">Sair</a></li>
    </ul>
  </div>
</template>
<style></style>
